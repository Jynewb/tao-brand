/**
 * TAO Brand Handbook PDF Generator
 *
 * Generates a slide-style PDF (16:9 landscape pages)
 * Each .slide element becomes its own page.
 *
 * Usage: node scripts/generate-pdf.mjs [--lang=en|zh] [url]
 */

import puppeteer from "puppeteer-core";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Parse arguments
const args = process.argv.slice(2);
const langArg = args.find((a) => a.startsWith("--lang="));
const lang = langArg ? langArg.split("=")[1] : "zh";
const urlArg = args.find((a) => !a.startsWith("--"));

const OUTPUT_PATH = join(
  __dirname,
  "..",
  lang === "en" ? "TAO_Brand_Handbook_EN.pdf" : "TAO_Brand_Handbook.pdf"
);
const BASE_URL = urlArg || "http://localhost:3333";
const URL = `${BASE_URL}/pdf?lang=${lang}`;

// 16:9 slide dimensions
const SLIDE_W = 1280;
const SLIDE_H = 720;

async function generatePDF() {
  console.log(`Generating ${lang.toUpperCase()} PDF...`);
  console.log("Launching browser...");

  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: [
      "--no-sandbox",
      "--proxy-bypass-list=*",
      "--disable-extensions",
      "--disable-default-apps",
    ],
    env: {
      ...process.env,
      NO_PROXY: "*",
      no_proxy: "*",
      HTTP_PROXY: "",
      HTTPS_PROXY: "",
      http_proxy: "",
      https_proxy: "",
    },
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: SLIDE_W,
    height: SLIDE_H,
    deviceScaleFactor: 2,
  });

  console.log(`Loading ${URL} ...`);
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));

  // Count slides
  const slideCount = await page.evaluate(
    () => document.querySelectorAll(".slide").length
  );
  console.log(`Found ${slideCount} slides`);

  if (slideCount === 0) {
    console.error("No .slide elements found! Check the /pdf route.");
    await browser.close();
    process.exit(1);
  }

  // Screenshot each slide element
  const screenshots = [];
  for (let i = 0; i < slideCount; i++) {
    const slideHandle = await page.evaluateHandle(
      (idx) => document.querySelectorAll(".slide")[idx],
      i
    );
    const shot = await slideHandle.asElement().screenshot({ type: "png" });
    screenshots.push(shot);
    process.stdout.write(`\r  Slide ${i + 1}/${slideCount}`);
  }
  console.log("");

  // Save first screenshot as test
  fs.writeFileSync(join(__dirname, "..", "test-slide.png"), screenshots[0]);
  console.log(
    `Test slide saved (${(screenshots[0].length / 1024).toFixed(0)}KB)`
  );

  // Write screenshots to temp dir
  const tempDir = join(__dirname, "..", ".pdf-temp");
  fs.mkdirSync(tempDir, { recursive: true });
  for (let s = 0; s < screenshots.length; s++) {
    fs.writeFileSync(
      join(tempDir, `slide-${String(s).padStart(3, "0")}.png`),
      screenshots[s]
    );
  }

  // Create composite HTML
  const slidesHTML = screenshots
    .map((_, idx) => {
      const imgPath = join(
        tempDir,
        `slide-${String(idx).padStart(3, "0")}.png`
      );
      return `<div class="slide" ${
        idx < screenshots.length - 1
          ? 'style="page-break-after: always;"'
          : ""
      }>
        <img src="file://${imgPath}" />
      </div>`;
    })
    .join("\n");

  const htmlPath = join(tempDir, "composite.html");
  fs.writeFileSync(
    htmlPath,
    `<!DOCTYPE html>
<html>
<head>
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: #0a0a0f; }
  .slide { width: ${SLIDE_W}px; height: ${SLIDE_H}px; overflow: hidden; }
  .slide img { width: 100%; height: 100%; display: block; }
  @page { size: ${SLIDE_W}px ${SLIDE_H}px; margin: 0; }
</style>
</head>
<body>${slidesHTML}</body>
</html>`
  );

  const pdfPage = await browser.newPage();
  await pdfPage.setViewport({
    width: SLIDE_W,
    height: SLIDE_H,
    deviceScaleFactor: 2,
  });
  await pdfPage.goto(`file://${htmlPath}`, {
    waitUntil: "load",
    timeout: 30000,
  });
  await new Promise((r) => setTimeout(r, 2000));

  await pdfPage.emulateMediaType("screen");
  await pdfPage.pdf({
    path: OUTPUT_PATH,
    width: `${SLIDE_W}px`,
    height: `${SLIDE_H}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  // Cleanup temp files
  for (const f of fs.readdirSync(tempDir)) {
    fs.unlinkSync(join(tempDir, f));
  }
  fs.rmdirSync(tempDir);

  const fileSize = fs.statSync(OUTPUT_PATH).size;
  console.log(
    `PDF saved: ${OUTPUT_PATH} (${(fileSize / 1024 / 1024).toFixed(1)}MB)`
  );

  await browser.close();
  console.log("Done!");
}

generatePDF().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});

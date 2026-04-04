/**
 * TAO Brand Handbook PDF Generator
 *
 * Generates a single continuous-scroll PDF (no page breaks)
 * that matches the website experience exactly.
 *
 * Usage: node scripts/generate-pdf.mjs [url]
 */

import puppeteer from "puppeteer-core";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "..", "TAO_Brand_Handbook.pdf");
const URL = process.argv[2] || "https://jynewb.github.io/tao-brand/";

const PAGE_WIDTH = 1440;

async function generatePDF() {
  console.log("Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({
    width: PAGE_WIDTH,
    height: 900,
    deviceScaleFactor: 2,
  });

  console.log(`Loading ${URL} ...`);
  await page.goto(URL, { waitUntil: "networkidle0", timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));

  // Scroll through to trigger all animations
  console.log("Triggering all animations...");
  await page.evaluate(async () => {
    const totalHeight = document.body.scrollHeight;
    for (let y = 0; y < totalHeight; y += 200) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 60));
    }
    // Stay at bottom briefly
    await new Promise((r) => setTimeout(r, 1000));
    // Scroll back
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 1000));
  });

  // Force all animated elements visible
  await page.evaluate(() => {
    document.querySelectorAll("*").forEach((el) => {
      const style = window.getComputedStyle(el);
      const opacity = parseFloat(style.opacity);
      // Only force-show elements that are content (hidden by animation)
      // Skip intentionally faint elements (decorative backgrounds, etc.)
      if (opacity > 0 && opacity < 0.3) return; // decorative
      if (opacity === 0) {
        // Check if it's a content element hidden by framer-motion
        const tag = el.tagName.toLowerCase();
        if (["div", "p", "h1", "h2", "h3", "span", "section", "a", "img"].includes(tag)) {
          el.style.opacity = "1";
          el.style.transform = "none";
        }
      }
    });

    // Hide scroll indicator
    const scrollEl = document.querySelector("[class*='bottom-10']");
    if (scrollEl) scrollEl.style.display = "none";
  });

  await new Promise((r) => setTimeout(r, 1000));

  // Inject PDF-specific CSS overrides
  await page.addStyleTag({
    content: `
      /* Remove hero full-screen height */
      section:first-of-type {
        min-height: auto !important;
        padding-top: 8rem !important;
        padding-bottom: 8rem !important;
      }
      /* Hide all decorative gradient blobs */
      [class*="blur-["], [class*="blur-\\["] {
        display: none !important;
      }
      /* Hide gradient mesh (aurora backgrounds) */
      [class*="overflow-hidden"] > [class*="absolute"][class*="rounded-full"][class*="opacity-"] {
        display: none !important;
      }
    `,
  });

  // Remove ALL decorative blurred/gradient elements via JS
  await page.evaluate(() => {
    // Kill every element that has blur in its computed style or class
    document.querySelectorAll("*").forEach((el) => {
      const cls = el.className || "";
      const style = window.getComputedStyle(el);

      // Remove any element with blur filter (decorative gradient blobs)
      if (typeof cls === "string" && cls.includes("blur-[")) {
        el.remove();
        return;
      }

      // Remove elements with blur in computed filter
      if (style.filter && style.filter.includes("blur") && style.filter !== "none") {
        el.remove();
        return;
      }

      // Remove elements with backdrop-filter blur
      if (style.backdropFilter && style.backdropFilter.includes("blur")) {
        // Don't remove glass cards, only large decorative ones
        const rect = el.getBoundingClientRect();
        if (rect.width > 400 && rect.height > 400 && style.position === "absolute") {
          el.remove();
          return;
        }
      }
    });

    // Remove aurora animation elements
    document.querySelectorAll("[style*='aurora']").forEach((el) => {
      el.remove();
    });
  });

  await new Promise((r) => setTimeout(r, 500));

  // Get the full page height
  const fullHeight = await page.evaluate(() => document.body.scrollHeight);
  console.log(`Page height: ${fullHeight}px`);

  // Generate single-page PDF with full document height
  await page.emulateMediaType("screen");

  console.log("Generating continuous-scroll PDF...");
  await page.pdf({
    path: OUTPUT_PATH,
    width: `${PAGE_WIDTH}px`,
    height: `${fullHeight}px`,
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  const fileSize = (await import("fs")).statSync(OUTPUT_PATH).size;
  console.log(`PDF saved: ${OUTPUT_PATH} (${(fileSize / 1024 / 1024).toFixed(1)}MB)`);

  await browser.close();
  console.log("Done!");
}

generatePDF().catch((err) => {
  console.error("Error:", err);
  process.exit(1);
});

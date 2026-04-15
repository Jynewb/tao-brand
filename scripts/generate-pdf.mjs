import { chromium } from "playwright";
import { readFileSync, writeFileSync, unlinkSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

async function main() {
  const htmlPath = resolve(__dirname, "generate-pdf.html");
  let html = readFileSync(htmlPath, "utf-8");

  const logoPath = resolve(__dirname, "../public/logo-tao.png");
  const logoBase64 = readFileSync(logoPath).toString("base64");
  const logoDataUri = `data:image/png;base64,${logoBase64}`;
  html = html.replaceAll("LOGO_PLACEHOLDER", logoDataUri);

  const tmpHtml = resolve(__dirname, "_tmp_pdf.html");
  writeFileSync(tmpHtml, html);

  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 720 });
  await page.goto(`file://${tmpHtml}`, { waitUntil: "networkidle" });
  await page.waitForTimeout(1500);

  const pageCount = await page.evaluate(() => document.querySelectorAll(".page").length);
  console.log(`Found ${pageCount} pages`);

  const outputPath = resolve(__dirname, "../TAO_Client_Credential_2026_Claude.pdf");

  await page.pdf({
    path: outputPath,
    width: "1280px",
    height: "720px",
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    preferCSSPageSize: false,
  });

  console.log(`PDF generated: ${outputPath}`);
  await browser.close();
  unlinkSync(tmpHtml);
}

main().catch(console.error);

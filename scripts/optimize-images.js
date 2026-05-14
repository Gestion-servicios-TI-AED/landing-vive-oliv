import sharp from "sharp";
import { readdir, stat, unlink } from "fs/promises";
import { join, extname, basename } from "path";

const ASSETS_DIR = new URL("../src/assets", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1").replace(/%20/g, " ");
const QUALITY = 82;

const files = await readdir(ASSETS_DIR);
const images = files.filter(f => /\.(png|jpg|jpeg)$/i.test(f));

let totalBefore = 0;
let totalAfter = 0;

for (const file of images) {
  const inputPath = join(ASSETS_DIR, file);
  const outputPath = join(ASSETS_DIR, basename(file, extname(file)) + ".webp");

  const { size: before } = await stat(inputPath);
  totalBefore += before;

  await sharp(inputPath).webp({ quality: QUALITY }).toFile(outputPath);

  const { size: after } = await stat(outputPath);
  totalAfter += after;

  const saved = (((before - after) / before) * 100).toFixed(1);
  console.log(`${file.slice(0, 12)}... ${(before / 1024).toFixed(0)} KB → ${(after / 1024).toFixed(0)} KB  (-${saved}%)`);
}

console.log(`\nTotal: ${(totalBefore / 1024 / 1024).toFixed(2)} MB → ${(totalAfter / 1024 / 1024).toFixed(2)} MB  (-${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}%)`);

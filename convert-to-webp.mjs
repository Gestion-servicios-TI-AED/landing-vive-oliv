import sharp from "sharp";
import { readdir, readFile, writeFile, unlink } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const ASSETS_DIR = "./src/assets";
const SRC_DIR = "./src";
const SUPPORTED = [".png", ".jpg", ".jpeg", ".gif", ".tiff", ".bmp", ".avif"];
const SOURCE_EXTS = [".tsx", ".ts", ".jsx", ".js", ".css"];

// ── 1. Convertir imágenes ─────────────────────────────────────────────────────

const files = await readdir(ASSETS_DIR, { withFileTypes: true });
const targets = files.filter(
  (f) => f.isFile() && SUPPORTED.includes(path.extname(f.name).toLowerCase())
);

if (targets.length === 0) {
  console.log("No hay imágenes para convertir.");
  process.exit(0);
}

console.log(`Convirtiendo ${targets.length} imagen(es) a WebP...\n`);

const renamed = new Map(); // oldName → newName

for (const file of targets) {
  const inputPath = path.join(ASSETS_DIR, file.name);
  const outputName = path.basename(file.name, path.extname(file.name)) + ".webp";
  const outputPath = path.join(ASSETS_DIR, outputName);

  try {
    await sharp(inputPath)
      .webp({ quality: 85, effort: 6 })
      .toFile(outputPath);

    await unlink(inputPath);
    renamed.set(file.name, outputName);
    console.log(`  ✓  ${file.name} → ${outputName}`);
  } catch (err) {
    console.error(`  ✗  Error con ${file.name}: ${err.message}`);
  }
}

if (renamed.size === 0) {
  console.log("\nNo se convirtió ninguna imagen. Nada que actualizar.");
  process.exit(0);
}

// ── 2. Actualizar imports en archivos fuente ──────────────────────────────────

console.log("\nActualizando imports en archivos fuente...\n");

async function walkDir(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const filePaths = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules" && entry.name !== "dist") {
      filePaths.push(...(await walkDir(full)));
    } else if (entry.isFile() && SOURCE_EXTS.includes(path.extname(entry.name))) {
      filePaths.push(full);
    }
  }
  return filePaths;
}

const sourceFiles = await walkDir(SRC_DIR);
let totalReplacements = 0;

for (const filePath of sourceFiles) {
  let content = await readFile(filePath, "utf-8");
  let modified = false;

  for (const [oldName, newName] of renamed) {
    // Escapa caracteres especiales para usarlos en regex (ej. espacios, puntos)
    const escaped = oldName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/ /g, "[ ]");
    const regex = new RegExp(escaped, "g");
    if (regex.test(content)) {
      content = content.replace(new RegExp(escaped, "g"), newName);
      modified = true;
      totalReplacements++;
      console.log(`  ✓  ${path.relative(".", filePath)}: "${oldName}" → "${newName}"`);
    }
  }

  if (modified) {
    await writeFile(filePath, content, "utf-8");
  }
}

if (totalReplacements === 0) {
  console.log("  No se encontraron referencias que actualizar.");
}

console.log(`\n✅ Listo. ${renamed.size} imagen(es) convertida(s), ${totalReplacements} import(s) actualizado(s).`);

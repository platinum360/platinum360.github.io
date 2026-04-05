import sharp from 'sharp';
import { readdirSync, statSync, readFileSync, writeFileSync, unlinkSync, renameSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const folder = join(__dirname, 'public', 'The Work_webp');
const TARGET_KB = 250;

async function compressFile(filePath) {
  const original = readFileSync(filePath);
  const sizeBefore = original.length;
  const temp = filePath + '.tmp.webp';
  let quality = 80;

  while (quality >= 30) {
    const buf = await sharp(original).webp({ quality, effort: 4 }).toBuffer();
    if (buf.length <= TARGET_KB * 1024) {
      writeFileSync(temp, buf); unlinkSync(filePath); renameSync(temp, filePath);
      return { action: 'compressed', before: sizeBefore, after: buf.length };
    }
    quality -= 5;
  }
  const buf = await sharp(original).resize({ width: 1200, withoutEnlargement: true }).webp({ quality: 65, effort: 4 }).toBuffer();
  writeFileSync(temp, buf); unlinkSync(filePath); renameSync(temp, filePath);
  return { action: 'resized', before: sizeBefore, after: buf.length };
}

async function processDir(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) { await processDir(full); continue; }
    if (extname(entry.name).toLowerCase() !== '.webp') continue;
    const size = statSync(full).size;
    if (size <= TARGET_KB * 1024) { console.log(`✅ SKIP  ${entry.name} (${(size/1024).toFixed(0)}KB)`); continue; }
    const res = await compressFile(full);
    console.log(`${res.action === 'resized' ? '🔄 RESIZE' : '✅ DONE '} ${entry.name}: ${(res.before/1024).toFixed(0)}KB → ${(res.after/1024).toFixed(0)}KB`);
  }
}

console.log('Compressing Work_webp folder...\n');
processDir(folder).then(() => console.log('\n✨ Done!')).catch(console.error);

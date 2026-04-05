import sharp from 'sharp';
import { readdirSync, statSync, writeFileSync, readFileSync, unlinkSync, renameSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const folder = join(__dirname, 'public', 'The Art_webp');
const TARGET_KB = 250;

async function compressFile(filePath) {
  const sizeBefore = statSync(filePath).size;
  const tempPath = filePath + '.tmp.webp';

  // Read the original into a buffer first
  const originalBuf = readFileSync(filePath);

  let quality = 80;

  while (quality >= 30) {
    const buf = await sharp(originalBuf)
      .webp({ quality, effort: 4 })
      .toBuffer();

    if (buf.length <= TARGET_KB * 1024) {
      writeFileSync(tempPath, buf);
      unlinkSync(filePath);
      renameSync(tempPath, filePath);
      return { action: 'compressed', before: sizeBefore, after: buf.length, quality };
    }
    quality -= 5;
  }

  // Force resize if quality alone not enough
  const buf = await sharp(originalBuf)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 65, effort: 4 })
    .toBuffer();

  writeFileSync(tempPath, buf);
  unlinkSync(filePath);
  renameSync(tempPath, filePath);
  return { action: 'resized', before: sizeBefore, after: buf.length, quality: 65 };
}

async function compressAll() {
  const files = readdirSync(folder).filter(f => extname(f).toLowerCase() === '.webp');
  console.log(`Found ${files.length} WebP files. Target: <${TARGET_KB}KB each\n`);

  let totalBefore = 0, totalAfter = 0, skipped = 0;

  for (const file of files) {
    const filePath = join(folder, file);
    const sizeBefore = statSync(filePath).size;
    totalBefore += sizeBefore;

    if (sizeBefore <= TARGET_KB * 1024) {
      console.log(`✅ SKIP   ${file} (${(sizeBefore/1024).toFixed(0)}KB)`);
      totalAfter += sizeBefore;
      skipped++;
      continue;
    }

    try {
      const result = await compressFile(filePath);
      totalAfter += result.after;
      const icon = result.action === 'resized' ? '🔄 RESIZE' : '✅ DONE  ';
      console.log(`${icon} ${file}: ${(result.before/1024).toFixed(0)}KB → ${(result.after/1024).toFixed(0)}KB`);
    } catch (err) {
      console.error(`❌ FAIL  ${file}: ${err.message}`);
      totalAfter += sizeBefore;
    }
  }

  console.log(`\n✨ Done! Total: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (${skipped} already small)`);
}

compressAll().catch(console.error);

/**
 * Prepares project banner assets for portfolio cards.
 * - operations-hub: normalizes PNG to public/operations-hub.png
 * - inn4smart: builds public/inn4smart.svg from PNG or JPG (embedded, sharp on cards)
 *
 * Run: npm run banners:prepare
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');

function findFirst(candidates) {
  for (const name of candidates) {
    const full = path.join(publicDir, name);
    if (fs.existsSync(full)) return { full, name };
  }
  return null;
}

function jpegDimensions(buffer) {
  let i = 2;
  while (i < buffer.length - 8) {
    if (buffer[i] !== 0xff) {
      i += 1;
      continue;
    }
    const marker = buffer[i + 1];
    if (marker === 0xc0 || marker === 0xc1 || marker === 0xc2) {
      return {
        height: buffer.readUInt16BE(i + 5),
        width: buffer.readUInt16BE(i + 7),
        mime: 'image/jpeg',
      };
    }
    const len = buffer.readUInt16BE(i + 2);
    i += 2 + len;
  }
  throw new Error('Could not read JPEG dimensions');
}

function pngDimensions(buffer) {
  const sig = buffer.toString('ascii', 1, 4);
  if (sig !== 'PNG') throw new Error('File is not a valid PNG');
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
    mime: 'image/png',
  };
}

function readImageMeta(buffer) {
  if (buffer[0] === 0xff && buffer[1] === 0xd8) return jpegDimensions(buffer);
  return pngDimensions(buffer);
}

function writeEmbeddedSvg(imagePath, svgPath, label) {
  const buf = fs.readFileSync(imagePath);
  const { width, height, mime } = readImageMeta(buf);
  const b64 = buf.toString('base64');
  const maxW = 320;
  const scale = width > maxW ? maxW / width : 1;
  const vw = Math.round(width * scale);
  const vh = Math.round(height * scale);
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="${vw}" height="${vh}" viewBox="0 0 ${width} ${height}" role="img" aria-label="${label}">
  <image width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" href="data:${mime};base64,${b64}"/>
</svg>`;
  fs.writeFileSync(svgPath, svg, 'utf8');
  console.log(`Created ${path.basename(svgPath)} (${width}x${height}) from ${path.basename(imagePath)}`);
}

function copyTo(destName, sourcePath) {
  const dest = path.join(publicDir, destName);
  if (path.resolve(sourcePath) !== path.resolve(dest)) {
    fs.copyFileSync(sourcePath, dest);
  }
  console.log(`Ready ${destName}`);
  return dest;
}

const opsCandidates = [
  'operations-hub.png',
  'operations.png',
  'operation.png',
  'Operation.png',
  'WorkED-ops.png',
  'worked-ops.png',
  'ops-hub.png',
  'ops.png',
];

const inn4Candidates = [
  'inn4smart.jpg',
  'inn4smart.jpeg',
  'inn4smart.png',
  'Inn4Smart.jpg',
  'Inn4Smart.png',
  'SMART SOLUTION.jpg',
  'SMART SOLUTION.png',
];

let ok = true;

const ops = findFirst(opsCandidates);
if (ops) {
  copyTo('operations-hub.png', ops.full);
} else if (fs.existsSync(path.join(publicDir, 'WorkED-ops.svg'))) {
  console.log('No Operations Hub PNG found; portfolio will use WorkED-ops.svg fallback.');
} else {
  console.warn('Missing Operations Hub PNG. Add one of:', opsCandidates.join(', '));
  ok = false;
}

const inn4 = findFirst(inn4Candidates);
if (inn4) {
  writeEmbeddedSvg(inn4.full, path.join(publicDir, 'inn4smart.svg'), 'Inn4Smart SMART SOLUTION');
} else if (fs.existsSync(path.join(publicDir, 'inn4smart.svg'))) {
  console.log('Using existing inn4smart.svg (add inn4smart.jpg to regenerate).');
} else {
  console.warn('Missing Inn4Smart image. Add inn4smart.jpg to public/.');
}

if (!ok) {
  console.log('\nAdd Operations Hub PNG to public/, or keep WorkED-ops.svg fallback.');
  process.exit(1);
}

console.log('\nDone. Refresh the site to see project banners.');

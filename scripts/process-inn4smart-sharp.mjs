import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const src = path.join(publicDir, 'inn4smart.jpg');
const outPng = path.join(publicDir, 'inn4smart.png');

function alphaFromWhite(r, g, b) {
  const m = Math.min(r, g, b);
  if (m >= 252) return 0;
  if (m >= 220) return Math.round(255 * ((252 - m) / 32));
  return 255;
}

function themeAdjust(r, g, b) {
  if (r > 160 && g > 120 && b < 140 && r >= g) {
    return [
      Math.min(255, Math.round(r * 1.05)),
      Math.min(255, Math.round(g * 1.02)),
      Math.min(255, Math.round(b * 0.95)),
    ];
  }
  if (r < 120 && g < 130 && b < 150) {
    const lum = (r + g + b) / 3;
    const t = Math.max(0, Math.min(1, (90 - lum) / 90));
    const tr = 168;
    const tg = 182;
    const tb = 198;
    return [
      Math.round(r + (tr - r) * t * 0.82),
      Math.round(g + (tg - g) * t * 0.82),
      Math.round(b + (tb - b) * t * 0.82),
    ];
  }
  return [r, g, b];
}

export async function processInn4smartAssets() {
  if (!fs.existsSync(src)) {
    throw new Error('Missing public/inn4smart.jpg');
  }

  const trimmedBuffer = await sharp(src).ensureAlpha().trim({ threshold: 14 }).png().toBuffer();
  const { data, info } = await sharp(trimmedBuffer).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = alphaFromWhite(r, g, b);
    if (a === 0) {
      data[i + 3] = 0;
      continue;
    }
    const [nr, ng, nb] = themeAdjust(r, g, b);
    data[i] = nr;
    data[i + 1] = ng;
    data[i + 2] = nb;
    data[i + 3] = Math.min(a, data[i + 3]);
  }

  await sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } })
    .png()
    .toFile(outPng);

  const b64 = fs.readFileSync(outPng).toString('base64');
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="280" height="${Math.round((info.height * 280) / info.width)}" viewBox="0 0 ${info.width} ${info.height}" role="img" aria-label="Inn4Smart">
  <image width="${info.width}" height="${info.height}" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,${b64}"/>
</svg>
`;
  fs.writeFileSync(path.join(publicDir, 'inn4smart.svg'), svg);

  return { width: info.width, height: info.height, outPng };
}

const isCli =
  process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === pathToFileURL(path.resolve(fileURLToPath(import.meta.url))).href;

if (isCli) {
  processInn4smartAssets()
    .then(({ width, height }) => {
      console.log(
        `Saved inn4smart.png (${width}x${height}) from original JPG — same logo, theme-matched for dark cards`,
      );
    })
    .catch((err) => {
      console.error(err.message || err);
      process.exit(1);
    });
}

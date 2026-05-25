import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const jpg = path.join(publicDir, 'inn4smart.jpg');
const png = path.join(publicDir, 'inn4smart.png');
const py = path.join(root, 'scripts', 'process-inn4smart-logo.py');

if (!fs.existsSync(jpg)) {
  console.error('Missing public/inn4smart.jpg');
  process.exit(1);
}

const run = spawnSync('python', [py], { cwd: root, encoding: 'utf8' });
if (run.stdout) process.stdout.write(run.stdout);
if (run.stderr) process.stderr.write(run.stderr);

if (run.status !== 0 || !fs.existsSync(png)) {
  console.error('Python processing failed. Run: pip install pillow && python scripts/process-inn4smart-logo.py');
  process.exit(run.status ?? 1);
}

const buf = fs.readFileSync(png);
const { width, height } = readPngSize(buf);
const b64 = buf.toString('base64');
const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="280" height="${Math.round((height * 280) / width)}" viewBox="0 0 ${width} ${height}" role="img" aria-label="Inn4Smart">
  <image width="${width}" height="${height}" preserveAspectRatio="xMidYMid meet" href="data:image/png;base64,${b64}"/>
</svg>
`;
fs.writeFileSync(path.join(publicDir, 'inn4smart.svg'), svg);
console.log('Updated inn4smart.svg from processed PNG');

function readPngSize(buffer) {
  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

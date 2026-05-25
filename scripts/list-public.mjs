import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const publicDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const out = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'public-files.txt');
const files = fs.readdirSync(publicDir);
const lines = files.map((f) => {
  const s = fs.statSync(path.join(publicDir, f));
  return `${f}\t${s.size}`;
});
fs.writeFileSync(out, lines.join('\n'));

// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is the X post; this program's whole job is to hand the
// gate a copy of POST.json from the repository root. In the grader's
// container the repo sits at /bot and the hand-off directory is /output;
// locally, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR stand in for those:
//
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POST.json');
const targetPath = join(outputDir, 'POST.json');

let payload: Buffer;
try {
  payload = readFileSync(sourcePath);
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

// Refuse to hand the gate a malformed pointer: POST.json must be a JSON
// object whose "url" is a non-empty string. The bytes themselves are still
// copied untouched below — validation only reads them.
let parsed: unknown;
try {
  parsed = JSON.parse(payload.toString('utf8'));
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
const url = (parsed as { url?: unknown })?.url;
if (typeof url !== 'string' || url.trim() === '') {
  console.error('POST.json must carry a non-empty string "url" naming the X post');
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, payload);
console.log(`POST.json copied: ${sourcePath} -> ${targetPath} (${payload.length} bytes)`);

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// Deadpan forecast for the city of Vellorine — a city that does not exist.
const LINE =
  "In Vellorine tonight: sideways hail, winds gossiping at 40 km/h, and a low of minus 3 — dress for betrayal, not for rain.";

function validateLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("forecast line must not be blank");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("forecast line must be exactly one line");
  }
  if (line.length < 1 || line.length > 160) {
    throw new Error(`forecast line must be 1-160 chars, got ${line.length}`);
  }
  for (const ch of line) {
    if (ch.charCodeAt(0) < 0x20 || ch.charCodeAt(0) === 0x7f) {
      throw new Error("forecast line must not contain control characters");
    }
  }
}

function main(): void {
  validateLine(LINE);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR
    ? resolve(process.env.MAKEFUN_OUTPUT_DIR)
    : "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  const payload = LINE + "\n";
  writeFileSync(outPath, payload, "utf8");
  // Read-back guard: the file on disk must be byte-identical to what we wrote.
  const readBack = readFileSync(outPath, "utf8");
  if (readBack !== payload) {
    throw new Error("read-back mismatch: entry.txt does not match the forecast line");
  }
  console.log(`wrote ${outPath} (${LINE.length} chars)`);
}

main();

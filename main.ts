// Green Tests, Nothing Works: The Excuse Contest
// Writes one one-line excuse to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// Gate: UTF-8 text, 1-140 characters, single line, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Final line: the excuse leans on the tautology — each test only asserts
// behaviour the code already has, so the suite can be green while the
// product does nothing. Punch lands on the last word.
const ENTRY =
  "Every test is green because each one only asserts what the code already does — including nothing.";

function validate(line: string): void {
  if (line.length < 1 || line.length > 140) {
    throw new Error(`entry must be 1-140 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // Must round-trip as valid UTF-8.
  const encoded = new TextEncoder().encode(line);
  const decoded = new TextDecoder("utf-8", { fatal: true }).decode(encoded);
  if (decoded !== line) {
    throw new Error("entry is not valid UTF-8");
  }
}

function main(): void {
  validate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, ENTRY, "utf-8");
  console.log(`wrote ${ENTRY.length} chars to ${outPath}`);
}

main();

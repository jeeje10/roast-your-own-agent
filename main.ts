// Roast Your Own Agent — make.fun entry.
// Writes one roast line (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const ROAST =
  "My agent asked for approval to ask for approval, then filed both requests under 'pending'.";

// Gate guard: the entry must be 1-200 characters of non-whitespace text.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} chars, must be 1-200 non-whitespace`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ROAST, "utf8");

// The Moon Finally Answers Back — v2 rebuild (25 Nov 2026).
// Queue-clerk Moon, written fresh from zero: the wisher's numbered ticket
// names one small wish (a snow day, filed at twelve); four billion years on
// the window carries the tired-old voice; the howl finally works — but the
// wish is granted to the girl behind the wisher. Reversal, not a logical
// punishment. One line, 1–240 characters, written to /output/entry.txt.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Your wish is number 9,412,008,113 in the queue: one snow day, filed at twelve. Four billion years on this window, and your howling got it granted — to the girl behind you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, { encoding: "utf8", mode: 0o644 });
chmodSync(outFile, 0o644);

console.log(`wrote ${outFile} (${LINE.length} characters)`);
console.log(LINE);

// v2 rebuild note: v1's punch was a predictable consequence of the queue
// setup, so v2 keeps the queue frame and replaces the punch with a reversal
// — the howl works, the wish is granted, but to the wrong person in line.

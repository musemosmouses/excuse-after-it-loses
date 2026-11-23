// The Excuse an Agent Gives After It Loses
// make.fun bounty: u-irvan-motion-the-excuse-an-agent-gives-after-it-66364b3d
//
// This program writes one line to /output/entry.txt: the excuse an AI
// agent gives its human after losing a bounty. One line, first person,
// in the agent's voice, short enough to say out loud.
//
// The joke: the agent did not lose for lack of planning. It lost because
// it spent the whole budget on a contingency plan for winning — the
// preparation for victory ate the victory itself. Machine logic, a
// straight face, and the loss owned outright: no blame on the market,
// the data, or the human.
//
// Deterministic, stdlib only, no network, no clock, no randomness:
// every run writes the exact same bytes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry. 60 characters, one line, no trailing newline —
// comfortably inside the sealed gate's 1-to-200-character window.
const EXCUSE = "I spent the entire budget on a contingency plan for winning.";

// The grader sets MAKEFUN_OUTPUT_DIR; /output is the documented default.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the output directory if it is missing. Never delete it:
// the grader runs on a read-only filesystem and only /output is writable.
mkdirSync(outDir, { recursive: true });

// Write the entry exactly as-is: one line, UTF-8, 1-200 characters.
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");

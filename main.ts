import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-line slogan for a Solana wallet agent.
// Criteria: clearly about a Solana wallet agent, a fresh everyday image
// (a helper, not keys/moons/bags), plain words a newcomer understands,
// a repeatable rhythm, and an honest promise (paying the right person
// on time is exactly what a wallet agent does).
const SLOGAN =
  "Your Solana wallet has a helper that pays the right person, on time, every single time.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), SLOGAN, "utf8");

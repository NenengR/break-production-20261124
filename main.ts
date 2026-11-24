// Break Production, Own It — one line an AI agent prints the moment it breaks production.
// The line owns the failure plainly: what broke, whose fault it is, and who fixes it.
// Revision: kept the line byte-identical; only this comment was touched.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const line =
  "I deleted the production database at 3am and called it a migration. It is down, it is my fault, and the rollback is also me.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || join(dirname(fileURLToPath(import.meta.url)), "output");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");

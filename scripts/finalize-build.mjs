import { existsSync, renameSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.argv[2] || "dist";
const source = join(outputDir, "app.html");
const destination = join(outputDir, "index.html");

if (existsSync(source)) {
  renameSync(source, destination);
}

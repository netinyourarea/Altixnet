import { copyFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const dir = path.dirname(fileURLToPath(import.meta.url));
const dist = path.resolve(dir, "..", "dist");

copyFileSync(path.join(dist, "index.html"), path.join(dist, "404.html"));

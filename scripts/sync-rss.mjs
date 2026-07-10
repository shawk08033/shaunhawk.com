import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distFeed = path.join(root, "dist", "rss.xml");
const publicFeed = path.join(root, "public", "rss.xml");

execFileSync("npx", ["astro", "build"], {
  cwd: root,
  stdio: "inherit",
});

if (!existsSync(distFeed)) {
  throw new Error("Expected dist/rss.xml after astro build");
}

copyFileSync(distFeed, publicFeed);
console.log(`Synced ${publicFeed}`);

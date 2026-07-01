import { copyFile, mkdir } from "node:fs/promises";

await mkdir("dist/privacy", { recursive: true });
await Promise.all([
  copyFile("dist/index.html", "dist/404.html"),
  copyFile("dist/index.html", "dist/privacy/index.html"),
]);

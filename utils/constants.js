/**
 * @module utils/constants
 */

import { readFile } from "fs/promises";

export const log = console.log;

export const pkgJSON = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf-8"),
);

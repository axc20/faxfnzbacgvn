import { writeFileSync } from "node:fs";
import { nanoid } from "nanoid";

const ids = Array.from({ length: 5 }).map(() => nanoid());
const data1 = `module.exports = {
  ID_1: "${ids[0]}",
  ID_2: "${ids[1]}",
  ID_3: "${ids[2]}",
  ID_4: "${ids[3]}",
  ID_5: "${ids[4]}"
};`;
const data2 = `export const ID_1 = "${ids[0]}";
export const ID_2 = "${ids[1]}";
export const ID_3 = "${ids[2]}";
export const ID_4 = "${ids[3]}";
export const ID_5 = "${ids[4]}";`;

writeFileSync("index.cjs", data1, { encoding: 'utf-8' });
writeFileSync("index.mjs", data2, { encoding: 'utf-8' });

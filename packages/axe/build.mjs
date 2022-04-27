import { writeFileSync } from "node:fs";
import { nanoid } from "nanoid";

const ids = Array.from({ length: 5 }).map(() => nanoid());
const data = `export const ID_1 = "${ids[0]}";
export const ID_2 = "${ids[1]}";
export const ID_3 = "${ids[2]}";
export const ID_4 = "${ids[3]}";
export const ID_5 = "${ids[4]}";`;

writeFileSync("index.js", data, { encoding: 'utf-8' });

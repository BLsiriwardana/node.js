const user_name = "amila";
console.log(user_name);
import { url } from "inspector";
//const os = require('os')
//const path = require('path')
import os from "node:os"; // same to import os from "os";
import path from "node:path"; // same to import os from "path";
import { fileURLToPath } from "url";
import { readFile } from "node:fs";
import { Simplecalculation } from "./myfunction.js";
import { join } from "path";
import { error } from "console";

const __filename = fileURLToPath(import.meta.url); //to create new import module file name
const __dirname = path.dirname(__filename);
console.log(os.platform());
console.log(os.version());
console.log(Simplecalculation(1, 2, 3));

console.log(path.basename(__filename));
console.log(path.extname(__filename));

const ext = path.extname(__filename);
console.log(path.parse(__filename));
//directory
readFile(join(__dirname, "myname.txt"), "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data); // to string buffer data  console.log(data.toString());
});

console.log(__dirname);
console.log(__filename);

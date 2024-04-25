import os from "node:os"; // same to import os from "os";
import path from "node:path"; // same to import os from "path";
import { fileURLToPath } from "url";
//import { appendFile, readFile, rm, writeFile } from "node:fs";
import { Simplecalculation } from "./myfunction.js";
import { join } from "path";
import { error } from "console";
import { log } from "node:console";
import { readFile, writeFile, rm, rmdir, appendFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url); //to create new import module file name
const __dirname = path.dirname(__filename);

// readFile(join(__dirname, "myname.txt"), "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data); // to string buffer data  console.log(data.toString());
// });

// writeFile(
//   join(__dirname, "writed.txt"),
//   "Hi ! Welcome to EasyCode !",
//   {
//     encoding: "utf-8",
//   },
//   (err) => {
//     if (err) {
//       log(err);
//     } else {
//       log("successfully updated !");
//     }
//   }
// );

// appendFile(
//   join(__dirname, "writed.txt"),
//   " I'm Bihan Lakshitha.",
//   { encoding: "utf-8" },
//   (err) => {
//     if (err) {
//       log(err);
//     } else {
//       log("successfully updated !");
//     }
//   }
// );

// writeFile(
//   join(__dirname, "writed.js"),
//   `const a = 'Bihan';
//    console.log('our DON is '+ a);
//   `,

//   (err) => {
//     if (err) {
//       log(err);
//     } else {
//       log("successfully updated !");
//     }
//   }
// );

// rm(join(__dirname, "writed.txt"), (err) => !err && log("file is deleted !"));

/// ----------- promise API -------------
readFile(join(__dirname, "myname.txt"), { encoding: "utf-8" })
  .then((data) => log(data))
  .catch((err) => log(err));

const writeFunction = async (data) => {
  try {
    const request = await writeFile(
      join(__dirname, "myname.txt"),
      "Bihan Lakshitha",
      { encoding: "utf-8" }
    );
    // log(request);
  } catch (error) {
    log(error);
  }
};

writeFunction(`
const a = 'Bihan';
console.log(a)
`);

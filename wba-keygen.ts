import {config} from 'dotenv';
import base58 from 'bs58';
import fs, { existsSync } from 'fs';
config();

try {
  const decoded = base58.decode(process.env.WBA_SECRET_KEY ?? "").toString();
  const fileExists = existsSync("wba-wallet.json")
  if (fileExists) {
    throw Error ("File already Exists. Delete it first.")
  }
  fs.writeFileSync("wba-wallet.json", `[${decoded}]`);
  console.log("Generate WBA wallet success!");
} catch(e: any) {
  console.log(`Error on writing file: ${e.message}`);
}
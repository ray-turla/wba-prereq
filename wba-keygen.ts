import {config} from 'dotenv';
import base58 from 'bs58';
import fs, { existsSync } from 'fs';
config();

try {
  // Save generated secret key to file.
  saveWalletToFile("wba-wallet.json", `[${kp.secretKey}]`);
} catch(e: any) {
  console.log(`Error on writing file: ${e.message}`);
}
import { Keypair } from "@solana/web3.js";
import fs from 'fs';

let kp = Keypair.generate();
console.log(`You've generated a new wallet: ${kp.publicKey.toBase58()} [${kp.secretKey}]`);
saveWalletToFile(kp);

function saveWalletToFile(keypair: Keypair, file: string = "dev-wallet.json") {
  try {
    const fileExists = fs.existsSync(file)
    if (fileExists) {
      throw Error("File already exists");
    }
    fs.writeFileSync(file, `[${keypair.secretKey}]`);
    console.log(`Wallet saved to ${file}`);
  } catch(e: any) {
    console.error(`Error on saving wallet: ${e.message}`);
  }
}
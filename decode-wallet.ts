import base58 from "bs58";
import { Keypair } from "@solana/web3.js";
import wallet from './dev-wallet.json'

console.log(base58.encode(Keypair.fromSecretKey(new Uint8Array(wallet)).secretKey))
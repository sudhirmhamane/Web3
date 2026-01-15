// public and private key generation

import * as ed from "@noble/ed25519";

async function main() {
  const privKey = ed.utils.randomSecretKey();
  // randomSecretKey is the function which generate a random secure private key.


  // in this line of code the message is converted to a Uint8Array
  const message = new TextEncoder().encode("hello world");

  // here we are generating public key using the private key
  const pubKey = await ed.getPublicKeyAsync(privKey);

  // here we are signing the message and get a signature
  const sign = await ed.signAsync(message, privKey);

  // here we are checking that this signature is valid for above message and public key.
  const isValid = await ed.verifyAsync(sign, message, pubKey);

  console.log(isValid);
}

main();

// function greet(person:string):string {
//   return `hello ${person}, welcome`
// }

// const user = "sudhir"
// console.log(greet(user))


// Seed phrase:

import {generateMnemonic, mnemonicToSeedSync} from "bip39";
const mnemonic = generateMnemonic(256);
console.log("Generated Mne: ", mnemonic);
const seed = mnemonicToSeedSync(mnemonic);
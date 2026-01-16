import { HDNodeWallet } from "ethers";

export function getWallet(mnemonic: string, index: number) {
  const root = HDNodeWallet.fromPhrase(mnemonic);
  const wallet = root.deriveChild(index);

  return {
    publicKey: wallet.publicKey,
  };
}

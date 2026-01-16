import { useState } from "react";
import { getWallet } from "../utils/wallet";

type Props = {
  mnemonic: string;
};

export default function wallets({ mnemonic }: Props) {
  const [index, setIndex] = useState(0);
  const [wallets, setWallets] = useState<string[]>([]);

  const addWallet = () => {
    const wallet = getWallet(mnemonic, index);
    setWallets([...wallets, wallet.publicKey]);
    setIndex(index + 1);
  };

  if (!mnemonic) return null;

  return (
    <>
      <button onClick={addWallet}>Add Wallet</button>
      {wallets.map((key, i) => (
        <p key={i}>
          Wallet {i + 1}: {key}
        </p>
      ))}
    </>
  );
}

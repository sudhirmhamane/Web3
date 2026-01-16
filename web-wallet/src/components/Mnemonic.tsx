import * as bip39 from "bip39"

type Props = {
    setMmemonic:(m: string) => void;
};

export default function Mnemonic({setMmemonic}: Props){
    const generateMnemonic = () => {
        const mnemonic = bip39.generateMnemonic();
        setMmemonic(mnemonic);
    };
    return <button onClick={generateMnemonic}>Generate Mnemonic</button>
}
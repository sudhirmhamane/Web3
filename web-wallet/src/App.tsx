import { useState } from "react"
import Mnemonic from "./components/Mnemonic";
import Wallets from "./components/Wallets";

function App() {
  const [mnemonic, setMmemonic] = useState("");

  return (
    <>
      <h2>Simple Web Wallet</h2>
      <Mnemonic setMmemonic={setMmemonic}/>

      {mnemonic && (
        <>
          <p><strong>Mnemonic:</strong> {mnemonic}</p>
          <Wallets mnemonic={mnemonic} />
        </>
      )}
    </>
  )
}

export default App

# Creating a web based wallet

## JSON-RPC
* Is a remote procedure call(RPC) protocol encoded in JSON(Js Object Notation). It allows for communication between a client and a server over a network. JSON-RPC enables a client to invoke methods on a server and receive responses, similar to traditional RPC protocols but using JSON for Data formatting.
* as a user, we interact with the blockchain for two purposes
1. To send a transction
2. To fetch some details from the blockchain(balances etc)
---

## RPC Server

* An RPC server provides a way for external clients to interact with the blockchain network, RPC stands for **Remote Procedure Call**, and an RPC Server exposes an API that allows clients to send requests and receive from the blockchain.
* An RPC server is a service that listens for JSON-RPC requests, and returns the results. It acts as an intermediary between the blockchain and external application or services.
* **NOTE-** An RPC server is not inherently part of the blockchain network itself, nor does it participate in staking or consensus mechanisms

---

We can grab our own RPC server from one of many providers-
1. Quicknode
2. Alchemy
3. Helius
4. Infura

---

## Wei, Lamports

### ETH

#### Wei:

* **Defination:** Wei is the smallest unit of cryptocurrency in the Ethereum network. It's similar to how a cent is to a dollar.
* **Value:** 1 Ether(ETH) = 10^18 Wei.

#### Gwei:

* **Defination:** A larger uint of Ether commonly used in the context of gas prices.
* **Conversion:** 1 Ether = 10^9 gwai

### Lamports

* In the Solana blockchain, the smallest unit of currency is called a lamport. Just as wei is to Ether in Ethereum, lamports are to SOL(the native token of Solana).
* 1 SOL = 10^9 lamports.

* **Code:**

const { LAMPORTS_PER_SOL } = require(@solana/web3.js) 
console.log(LAMPORTS_PER_SOL)

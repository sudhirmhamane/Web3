# Solana Jargon, Programming Model and Token

## Context of this class

- Understanding what ETH and SOL solve over Bitcoin
- Programs/Smart contract
- Jargon specific to solana
- Solana token program
- Token 22 program

## Programs/Smart Contracts
- ETH was one of the first blockchain to introduce the concept of decentralized state/programs. These are popularly known as smart contracts on the ETH blockchain.
- Simple ETH smart contract

// SPDX-License-identifier: MIT

pragma solidity ^0.8.0;
contract Counter {
    uint public count;

    // constructor to initialize count
    constructor() {
        count = 0;
    }

    // Function to increment the count
    function increment() public {
        count += 1;
    }

    // function to decrement the count
    function decrement() public {
        require(count > 0, "Count cannot be negative");
        count -= 1;
    }

    // function to get the current count
    function getCount() public view return (uint) {
        return count;
    }
}

---

# Account on Solana

## Accounts

- On the Solana Blockchain, an "account" is a fundamental data structure used to store various types of information

1. **Data Storage:** Accounts on Solana are used to store data by programs(Smart Contracts) or to maintain state
2. **Lamports:** Account hold a balance of solana's native cryptocurrency, lamports. Lamports are used to pay for transaction fees and to rent the space that the account occupies on the blockchain
3. **Programs:** On Solana, programs are special accounts that contain executable code. These accounts are distinct from regular data accounts in that are designed to be executed by the blockchain when triggered by a transaction.


# Bitcoin

## What is Bitcoin?
Bitcoin is a **peer-to-peer digital currency** that allows people to send money directly to each other without banks or third parties.  
It uses **cryptography + blockchain** to secure transactions, remove trust dependency, and prevent fraud.


## Why Bitcoin Was Created
Traditional financial systems depend on banks. Problems:
- High transaction fees
- Transactions can be reversed
- Requires trusting banks
- Fraud risk
- Not suitable for small payments
- Governments/banks can block payments

Bitcoin replaces **trust in banks** with **mathematical proof and decentralized network**.


## The Double Spending Problem
Digital money can be copied and reused multiple times.  
Example: Sending the same ₹10 digital token to two different people.

Bitcoin solves this using:
- Blockchain
- Proof of Work
- Decentralized consensus

Result: **A bitcoin cannot be used twice**.

## How Bitcoin Transactions Work
Bitcoin works as a **chain of digital signatures**.

1. Owner signs a transaction with private key  
2. Transfers bitcoin to receiver  
3. Receiver verifies previous ownership using public keys  
4. Transaction becomes part of blockchain  
5. Everyone agrees it is valid

## Blockchain and Timestamping
Bitcoin uses a **Timestamp Server**:
- Groups transactions into blocks  
- Hashes each block  
- Links block to previous block  
- Creates a secure chain = **Blockchain**

Each block confirms all previous blocks, making history permanent (immutable).


## Proof of Work (Mining)
To add a block, miners must:
1. Collect valid transactions
2. Try different nonce values
3. Generate hash until difficulty condition is satisfied
4. Broadcast block to network
5. Other nodes verify
6. Block gets added permanently

Proof of Work requires:
- Computing power
- Electricity
- Time

Which makes tampering extremely difficult.

## Longest Chain Rule
- The **longest blockchain** is considered the valid one
- Represents the most computational effort
- Attackers must overpower entire network to cheat
- Practically impossible if majority is honest


## How the Bitcoin Network Operates
1. Transactions broadcast to network  
2. Transactions collected into blocks  
3. Miners perform Proof of Work  
4. Valid block broadcast to network  
5. Nodes verify block  
6. Block added to chain  
7. Process repeats endlessly


## Rewards and Incentives
Miners receive:
- Newly generated bitcoins (block reward)
- Transaction fees

This:
- Incentivizes miners
- Secures network
- Fairly distributes new bitcoins

Total supply of Bitcoin is **limited to 21 million**.


## Merkle Tree
Bitcoin stores transactions using **Merkle Trees**:
- Reduces storage requirements
- Enables fast verification
- Allows nodes to prune old data safely


## SPV (Simplified Payment Verification)
Users can verify transactions without downloading full blockchain.

They only need:
- Block headers
- Merkle proof

Result:
- Faster
- Lightweight wallets possible
- Suitable for normal users



## Privacy in Bitcoin
Bitcoin maintains privacy without hiding the blockchain.

- Users are identified by **public keys**, not names
- Recommended to use new address per transaction
- Public can see:
  - Amount
  - Transaction history
  - Wallet address

But identity is not directly revealed.

So Bitcoin is **pseudo-anonymous**, not fully anonymous.



## Security and Attacks
An attacker must:
- Control majority of network computing power
- Rewrite blockchain history
- Redo Proof of Work

As more blocks confirm a transaction, the chance of reversing it becomes nearly impossible.

Bitcoin is secure because of:
- Cryptography
- Decentralization
- Proof of Work
- Economic incentives



## Key Features of Bitcoin
- Decentralized
- Immutable
- Transparent
- Censorship-resistant
- Limited supply (21 million)
- Secure & Trustless



## Bitcoin in Real World
Bitcoin is used as:
- Digital gold
- Store of value
- International payments
- Hedge against inflation



## Bitcoin vs Traditional Bank Money

| Feature | Bitcoin | Bank Money |
|--------|--------|-----------|
| Control | Users | Banks |
| Supply | Fixed | Unlimited |
| Permission | Not required | Required |
| Transparency | Public | Private |
| Reversal | Not possible | Banks can reverse |



## One Line Summary
Bitcoin is a **secure, decentralized digital currency** that enables trustless, peer-to-peer payments using blockchain and Proof of Work.

---

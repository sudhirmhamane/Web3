# Transaction in BlockChain

## how banks do Auth

### In traditional banks, we have a username and password that are enough for we to 

* Look at our funds
* Transfer funds
* Look at your existing transactions

---


### For the transaction on the blockchain we required public and private key

* public key is used to see details of transactions.
* if i have a public key and someone wants to make transaction with me he can do by using the public key.

---

## Bits and Bytes

### What is Bit?

* A bit is the smallest unit of data in a computer and can have one of two values: 0 or 1.
Think of a bit like a light swithc that can be either off(0) or on (1).

### what is a Byte?

* A byte is a group of 8 bit.


### Decimal to Binary Conversion

| Division | Result | Remainder |
| -------- | ------ | --------- |
| 65 ÷ 2   | 32     | 1         |
| 32 ÷ 2   | 16     | 0         |
| 16 ÷ 2   | 8      | 0         |
| 8 ÷ 2    | 4      | 0         |
| 4 ÷ 2    | 2      | 0         |
| 2 ÷ 2    | 1      | 0         |
| 1 ÷ 2    | 0      | 1         |

---

### UintArray?

* UintArray is the Unsigned Integer Array
* It is an array that stores only positive whole numbers (0 and Above) in a fixed binary format.
* UintArray is an array of non-negativ integers in binary form.


### Common UintArray Types

| Bits   | Values   | Range          |
| ------ | -------- | -------------- |
| 8-bit  | 2⁸ = 256 | 0 – 255        |
| 16-bit | 2¹⁶      | 0 – 65535      |
| 32-bit | 2³²      | 0 – 4294967295 |

---

## Encryption

* Encryption is the process of converting plaintext data into an unreadable format, called ciphertext, using a specific algorithm and a key. The data can be decrypted back to its original form only with the appropriate key.

### Key Characteristics:

* **Reversible:** with the correct key, the ciphertext can be decrypted back to plaintext.
* **Key-dependent:** The security of encryption relies on the secrecy of the key.

### Two Main Types:

* **Symmetric Encryption:** The same key is used for both encryption and decryption.
* **Asymmetric encryption:** Different key are used for encryption(public key) and decryption(private key).

#### **Asymetric Encryption:**

* Asymmetric encryption also known as public key cryptography, is a type of encryption that uses a pair of keys: a public key and private key. The keys are mathematically related, but it is computationally infeasible to derive the private key from the public key.
* **common Asymmetric Encryption Algorithms:**
1. RSA- Rivest-Shamir-Adleman
2. ECC- Eliptic Curve Cryptography(ECDSA)- ETH and BTC
3. EdDSA- Edwards-curve Digital Signature Algorithms- SoL


---


## How to transactions work on the blockchain?

### User side
1. User first creates a 
public/private keypair
2. They create a 
transaction that they want to do (send Rs 50 to Alice).  The transaction 
includes all necessary details like the recipient's address, the amount and some blockchain 
specific parameters (for eg - latestBlockHash in case of solana)
3. They hash the 
transaction 
4. They 
sign the transaction using their private key
5. They send the 
raw transaction , 
blockchain.

### Miner
1. Hashes the original message to generate a 
hash
2. Verifies the 
signature using the users
public key and the 
hash generated in step 1
3. Transaction validation - The miner/validator checks additional aspects of the transaction, 
such as ensuring the user has sufficient funds
4. If everything checks out, adds the transaction to the block

---

## Hierarchical Deterministic (HD) Wallet

* Hierarchical Deterministic (HD) wallets are a type of wallet that can generate a tree of key 
pairs from a single seed.  This allows for the generation of multiple addresses from a single 
root seed, providing both security and convenience.


### Problem 
You have to maintain/store multiple 

### Solution - BIP-32
**Bitcoin Improvement Proposal**
public private keys if you want to have multiple wallets. 

* 32 (BIP-32) provided the solution to this problem in 2012. It was proposed by Pieter Wuilla, a Bitcoin Core developer, to simplify the recovery process of crypto wallets. 
* BIP-32 introduced a hierarchical tree-like structure for wallets that allowed you to 
manage multiple accounts much more easily than was previously possible. 
* It’s essentially a standardized way to derive private and public keys from a master seed.

---

## How to create a wallet

### Mnemonics

* A mnemonics phrase (or seed phrase) is a human-readable string of words used to generate a cryptographic seed.
* BIP-39 (Bitcoin Improvement Proposal 39) defines how mnemonic phrases are generated and converted into a seed.

---

## Seed Phrase

* The seed is a binary number derived from the mnemonic phrase.


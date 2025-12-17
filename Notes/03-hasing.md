# What is Hashing?

Hashing is a process of converting input data of any size into a fixed-length output using a mathematical function.

In Web3, hashing is used to ensure security, data integrity, and immutability.

---

## Properties of a Cryptographic Hash Function

* **Deterministic** – The same input always produces the same hash
* **Fixed length** – The output size is constant
* **One-way** – Original data cannot be derived from the hash
* **Collision resistant** – Two different inputs rarely produce the same hash
* **Avalanche effect** – A small change in input produces a completely different hash

---

## Common Hash Function in Web3

* **SHA-256**

SHA-256 is widely used in Bitcoin, Ethereum (internally), and many blockchain systems.

---

## Why Hashing is Important in Web3

### 1. Data Integrity

Hashing ensures that data has not been altered.
If data changes, its hash also changes.

**Use cases:**

* Transaction verification
* Smart contract code integrity

---

### 2. Blockchain Immutability

* Each block stores the hash of the previous block
* Changing one block changes all subsequent hashes

**Result:**

* The blockchain becomes tamper-proof

---

### 3. Block Linking

* The hash of the previous block is stored in the next block
* This creates a secure chain of blocks

This is why it is called a **blockchain**.

---

### 4. Proof of Work (Mining)

* Miners search for a hash that satisfies a difficulty condition
* This requires computational effort

**Purpose:**

* Network security
* Prevention of spam and attacks

---

### 5. Transaction Identification

* Every blockchain transaction has a unique hash
* Used to track and verify transactions

---

### 6. Smart Contract Security

* Smart contract bytecode is hashed
* Ensures deployed contracts cannot be secretly modified

---

## Hashing vs Encryption

| Hashing            | Encryption       |
| ------------------ | ---------------- |
| One-way            | Two-way          |
| Cannot be reversed | Can be decrypted |
| Used for integrity | Used for secrecy |

---

## Hashing in Simple Words

* Hashing is the digital fingerprint of data
* Any change in data changes its fingerprint
* Used to secure and verify information

---

## One-Line Summary

Hashing is the backbone of Web3 security, enabling data integrity, immutability, and trust without centralized control.

const binaryRepresentation = new TextEncoder().encode("h");

// new TextEncoder -> it is a class. here we initilizing new object from class.

// console.log(binaryRepresentation)

const binaryRepresentation2 = [104]

// const x = 0;
// console.log(x)

// const y = 202
// console.log(y)

// const bytes = [203, 233, 333, 432]
// console.log(bytes)
// bytes.reverse()
// console.log(bytes)


// hex to String converter

function arryToHex(byteArray){
    let hexString = '';
    for(let i=0; i<byteArray.length; i++){
        hexString += byteArray[i].toString(16).padStart(2,'0');
    }
    return hexString;
}

const str = "Hello"
const byteArray = new TextEncoder().encode(str)
// console.log(byteArray)
const hexString = arryToHex(byteArray);
// console.log(hexString)


// Base64 conversion

// This code converts raw binary bytes (Uint8Array) into a Base64-encoded string 
// so binary data can be safely stored or transmitted as text.

// 1️⃣ Buffer.from(uint8Array)

// Converts Uint8Array into a Node.js Buffer

// Buffer is used to handle binary data

// 2️⃣ .toString("base64")

// Takes the binary data

// Encodes it into Base64 format

// Base64 is a text-safe representation of binary data.

const uint8Array = new Uint8Array([72, 101, 108, 108]);

const base64Encoded = Buffer.from(uint8Array).toString("base64");
console.log(base64Encoded);
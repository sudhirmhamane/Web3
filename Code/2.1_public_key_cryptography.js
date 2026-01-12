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
console.log(hexString)



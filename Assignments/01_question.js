// find an input string that produce a hash starting with "00000"

const crypto = require('crypto');

function findHashWithPrefix(prefix) {
    let input = 0;
    while(true) {
        let inputstr = input.toString();
        let hash = crypto.createHash('sha256').update(inputstr).digest('hex');

        if(hash.startsWith(prefix)) {
            return {input: inputstr, hash: hash};

        }
        input++;
    }
}




const result = findHashWithPrefix('000000');
console.log(`Input: ${result.input}`);
console.log(`Hash: ${result.hash}`);
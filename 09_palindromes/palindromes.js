const palindromes = function (string) {
        const noPun = string.replace(/[!@#$%^&*_+=, ./?><]/g, "");
        const toLower = noPun.toLowerCase();
        const splt = toLower.split("");
        let length = toLower.length;
        for (let i = 0; i < length; i++) {
                if (splt[i] !== splt[length-i-1]) {
                        return false;
                }
        }
        return true;

};

// Do not edit below this line
module.exports = palindromes;

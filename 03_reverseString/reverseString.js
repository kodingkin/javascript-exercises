const reverseString = function(str) {
    let para = ''
    for (let i = str.length; i>0; i--) {
        para += (str[i-1]);
    }
    return para;

};

// Do not edit below this line
module.exports = reverseString;

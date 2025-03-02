const repeatString = function(str, num) {
    let para = ""
    if (num <0) {
        para += 'ERROR';
    }
    for (let i = 0; i<num; i++) {
        para += str;
    }
    return para;
};

// Do not edit below this line
module.exports = repeatString;

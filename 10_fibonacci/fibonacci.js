const fibonacci = function(num) {
    let arr  = [1, 1];
    num = parseInt(num);
    if (num < 0) {
        return "OOPS"
    }
    if (num === 0) {
        return 0;
    }
    if (num < 2) {
      return 1;
    }
    for (let i = 2; i < num; i++) {
        let number = arr[i-2] + arr[i-1];
        arr.push(number);
    }
    return arr[num-1];
};

// Do not edit below this line
module.exports = fibonacci;

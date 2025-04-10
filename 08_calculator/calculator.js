const add = function(a, b) {
	return(a+b);
};

const subtract = function(a, b) {
	return (a-b);
};

const sum = function(arr) {
  const sum = arr.reduce((sum, elm) => sum + elm, 0)
	return sum;
};

const multiply = function(arr) {
  const jake = arr.reduce((jake, elm) => jake * elm , 1)
  return jake;
};

const power = function(num, power) {
  let res = 1;
  for (let i = 0; i < power; i++) {
    res = res * num;
  }
  return res;
};

const factorial = function(num) {
  let res = 1;
  for (let i = 1; i < (num+1); i++) {
    res = res * i;
  }
	return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

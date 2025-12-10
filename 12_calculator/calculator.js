const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
  return n1 - n2;
};

const sum = function(arr) {
  return arr.reduce((current, next) => current + next, 0);
};

const multiply = function(arr) {
  return arr.reduce((current, next) => current * next, 1);
};

const power = function(n1, n2) {
	let result = 1;

  for (let i = 0; i < n2; i++){
    result *= n1;
  }

  return result;
};

const factorial = function(n) {
	let result = 1;

  for (let i = n; i <= n && i != 0; i--){
    result *= i;
  }

  return result;
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

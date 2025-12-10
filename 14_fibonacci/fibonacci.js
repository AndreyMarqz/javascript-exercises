const fibonacci = function (n) {
    let num = parseInt(n);

  if (num < 0) {
    return "OOPS";
  } else if (num === 0) {
    return 0;
  } else if (num === 1) {
    return 1;
  }

  let a = 0; // Represents F(i-2)
  let b = 1; // Represents F(i-1)
  let nextFib;

  for (let i = 2; i <= num; i++) {
    nextFib = a + b;
    a = b;
    b = nextFib;
  }
  return nextFib;
};

// Do not edit below this line
module.exports = fibonacci;

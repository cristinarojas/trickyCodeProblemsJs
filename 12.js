// Create a function that resolve sum of two numbers as sum(1,2) and sum(1)(2)

function sum(a, b) {
  console.log('arguments-->', arguments);
  console.log(a, b);

  if (arguments.length === 1) {
    return function(b) {
      return a + b;
    };
  }

  return a + b;
};

console.log('normal--->', sum(1, 3));
console.log('parenthesis-->', sum(3)(5));

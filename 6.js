// Function to know string
function isValid(str) {
  if (str.length <= 1) {
    return false;
  }

  let matchingOpeningBracket;
  let ch;
  let stack = [];

  let openingBrackets = ['[', '{', '('];
  let closingBrackets = [']', '}', ')'];

  for (let i = 0; i < str.length; i++) {
    ch = str[i];

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)];

      if (stack.length === 0 || (stack.pop() !== matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch);
    }
  }

  return stack.length === 0;
};

console.log(isValid("([)]")) // false
console.log(isValid("()")) // true
console.log(isValid("{}[]()")) // true
console.log(isValid("{[}]")) // false
console.log(isValid("{[}]")) // false
console.log(isValid("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")) // true
console.log(isValid("{}[]()")) // true

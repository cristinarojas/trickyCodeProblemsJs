// Convert this string to camelCase ab-cd-ef string
function strCamelCase(str) {

  const convertedStr = str.split('-');

  return convertedStr.map((characters) => {
    let upperChar = characters[0]+characters[1].toUpperCase();
    return upperChar;
  }).join('');
}

console.log(strCamelCase('ab-cd-ef'));

// Clousures
function wrapValue(n) {
  var localVariable = n;
  console.log('localVariable--->', localVariable);
  return function() {
    console.log('enter!');
    return localVariable;
  }
}

wrapValue(10); // This do not maintain the last value.


// This can maintain the return with all the function.
var first = wrapValue(20);
var second = first();

/* Being able to reference a specific instance of local Variables in an
enclosing function. A function that "closes over" some local variables
is called a closure

Ser capaz de hacer referencia a una instancia específica de Variables locales
en una función envolvente. Una función que "cierra sobre" algunas variables locales.
se llama un cierre
*/

function multiplier(factor) {
  return function(number) {
    return number * factor;
  }
}

// Freezing the 1 return code and save into the twice variable
// also freeze the factor parameter 2.
var twice = multiplier(2);
/*
ƒ (number) {
    return number * factor; ---> factor 2
  }
*/


console.log(twice(5));
// Here im executing the function that is save it in twice
// and Im passing 5 parameter as number.
/*
ƒ (5) {
    return 5 * 2; ---> 2
  }
*/

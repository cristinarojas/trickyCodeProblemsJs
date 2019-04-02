// Clousure
/*var addTo = function(passed) {
  console.log('passed->', passed)
  var inner = 2;
  return passed + inner;
}

console.log(addTo(3));*/// because im passing as a parameter.
////////////////////////

/*var passed = 3; // Clousures can acces to the outer scope

var addTo = function() { // Im not passing parameter here
  console.log('passed->', passed); // all the variables that are  declared OUTSIDE are available inside the functions
  var inner = 2;
  return passed + inner; // Im accesing to the outer variable here, and any function that use a variable outside the function are actually clousure.
}

console.log(addTo());*/

/////////////

/*var passed = 3; // Clousures can acces to the outer scope

var addTo = function() { // Im not passing parameter here
  var inner = 2;
  return passed + inner; // Im accesing to the outer variable here, and any function that use a variable outside the function are actually clousure.
}

console.log(addTo()); // first result 5
var passed = 8;
console.log(addTo()); // second result 10*/

/////////////
var addTo = function(passed) {
  console.log('passed->', passed);

  var add = function(inner) {
    console.log('clousure inner->', inner);
    console.log('clousure passed->', passed);
    return passed + inner;
  };

  return add;
};

//console.log(addTo(20)); // preserve the value.

// I can create another variable and save the function, because functions are objects.
var addThree = new addTo(3); // keep 3
var addFour = new addTo(4); // keep 4

console.log(addThree(1)); // because already have keeped 3
console.log(addFour(1)); // because already have keeped 4

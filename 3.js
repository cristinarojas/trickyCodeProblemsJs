// Detect the output of following code
(function(x) {
  console.log('first IFFE');
  return (function(y) { // Im returning this function that inside have the console with 1
    console.log(x); // is same as I insert return
  })(2); // IIFE as a parameter, but I'm not returning nothing with 2, just passing number 2 as a parameter
})(1); // IIFE with 1 as a parameter

// Output of x: 1

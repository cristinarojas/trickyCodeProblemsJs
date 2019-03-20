function test () {
  this.myProperty = 'javascriipt';

  this.printMyProperty = function() {
     return this.myProperty
  }
}
var a = new test();

//console.log(a.printMyProperty());

var b = a.printMyProperty; // I'm just passing the method by reference
                          // and this reference only have the method context.
                          // because only have the method context this.myProperty
                          // is doesn't defined there.

// Whats the output
console.log('Answer:', b()); // we can execute, but this will be undefined
                             // because the context of that method.
                             // and this that method doesn't know myProperty

// Answer:
// undefined

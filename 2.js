var myObject = {
    foo: "bar",
    func: function() {
                         // this -> {foo: "bar", func: ƒ}
        var self = this; // {foo: "bar", func: ƒ} I'm saving the context to use it wherever I want later.

        console.log("1 outer func:  this.foo = " + this.foo); // bar
        console.log("2 outer func:  self.foo = " + self.foo); // bar

        (function() {
          // self have {foo: "bar", func: ƒ} so I can use it here.

          console.log("3 inner func:  this.foo = " + this.foo); // undefined because in the IIFE context do not have foo variable.
          console.log("4 inner func:  self.foo = " + self.foo); // bar
        }());
    }
};

myObject.func();
// window.self, self --> read-only property returns the window itself
// each function have their own this context.

// 1 outer func: this.foo = bar
// 2 outer func: self.foo = bar
// 3 inner func: this.foo = undefined
// 4 inner func: self.foo = bar

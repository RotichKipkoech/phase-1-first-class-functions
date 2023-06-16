function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    function namedFunction() {
      // Function body
    }
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // Function body
    };
  }
  
  const chai = require("chai");
  const spies = require("chai-spies");
  chai.use(spies);
  
  const expect = chai.expect;
  
  describe("index", () => {
    describe("receivesAFunction(callback)", () => {
      it("receives a function and calls it", () => {
        const spy = chai.spy();
  
        receivesAFunction(spy);
  
        console.log("Spy called:", spy.__spy.called); // Display output using console.log
  
        expect(spy).to.have.been.called();
      });
    });
  
    describe("returnsANamedFunction()", () => {
      var fn;
  
      before(() => {
        fn = returnsANamedFunction();
      });
  
      it("returns a function", () => {
        console.log("Returned function:", fn); // Display output using console.log
  
        expect(fn).to.be.a("function");
      });
  
      it("returns a named function", () => {
        console.log("Function name:", fn.name); // Display output using console.log
  
        expect(fn.name).not.to.eql("");
      });
    });
  
    describe("returnsAnAnonymousFunction()", () => {
      var fn;
  
      before(() => {
        fn = returnsAnAnonymousFunction();
      });
  
      it("returns a function", () => {
        console.log("Returned function:", fn); // Display output using console.log
  
        expect(fn).to.be.a("function");
      });
  
      it("returns an anonymous function", () => {
        console.log("Function name:", fn.name); // Display output using console.log
  
        expect(fn.name).to.eql("");
      });
    });
  });
  
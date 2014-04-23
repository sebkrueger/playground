#!/usr/bin/env node

/*
    Examples of currying (partial application) in Javascript
 */

// Version 1: bind() method

// Define function with two arguments
var multiply = function(x, y) {
    // do the hard work of multiply
    return x*y;
}

console.log("Test multiply(2,10) : " + multiply(2, 10));

// Now fix parameter x with bind method to 3
// First argument of bind function is null object
// Second argument is fixed value for x
var multiplyWithThree = multiply.bind(null, 3);

// Try it
console.log("Test multiplyWithThree(10) : " + multiplyWithThree(10));
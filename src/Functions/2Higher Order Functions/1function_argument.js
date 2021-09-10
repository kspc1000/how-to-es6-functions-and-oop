/*
 * Higher order functions / first class functions: Functions that take other functions as arguments and/or return a new function
 * Read more at https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
 * Here's an example of taking a function as an argument
 */

// The builtin setTimeout and setInterval functions in javascript are examples of higher order functions
// Because they take in a function as an argument
function printHelloWorld() {
    console.log("hello world!");
}

setTimeout(printHelloWorld, 1000); // execute printHelloWorld() after 1 second


/* Quick tips */
// If you don't need to use the function else where, you can use an anonymous function
setTimeout(() => console.log("hello world!"), 1000);  // console.log("hello world!") after 1 second
 
// anonymous functions also make it easy to pass in a function with arguments
// e.g.:
function greeting(str) {
    console.log(`Good morning, ${str}`);
}
setTimeout(() => greeting("Mr Lee"), 2000);  // execute greeting("Mr Lee") after 2 seconds
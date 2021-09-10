/*
 * Higher order functions / first class functions: Functions that take other functions as arguments and/or return a new function
 * Read more at https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
 * Here's an example of returning a function inside a function
 */

function makeGenerator(number) {
    return function () { // also known as a closure https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#closures
        return ++number + " (╯°□°)╯︵ ┻━┻";
    }
}
// can be done with arrow functions as well: const makeGenerator = (number) => () => ++number;

const gen = makeGenerator(0);
console.log(gen()) // 1
console.log(gen()) // 2
console.log(gen()) // 3
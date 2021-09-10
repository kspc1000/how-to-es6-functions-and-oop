/* IIFE = Immediately Invoked Function Expression
 * https://developer.mozilla.org/en-US/docs/Glossary/IIFE
 */

// Surround the function expression with brackets
(function () {
    console.log("Immediately Called!");
})(); // then call it immediately by putting "()", therefore immediately invoking a function upon declaration

(() => console.log("➵ ➵ ➵"))();
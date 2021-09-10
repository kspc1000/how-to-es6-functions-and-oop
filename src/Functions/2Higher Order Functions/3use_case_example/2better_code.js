const fruits = {
    strawberry: "🍓",
    grapes: "🍇",
    mango: "🥭",
}

function makeGetFruitsFunction(fruit) { // Create a function that returns a function
    return function (quantity) { // returning function returns a string containing <quantity> number of the specific fruit
        return fruits[fruit].repeat(quantity);
    }
}

/* Calling makeGetFruitsFunction() for each fruit, and assigning the returned function to a variable.
These variables then become the function that is returned by makeGetFruitsFunction("fruit-name") */
const getStrawberries = makeGetFruitsFunction("strawberry");
const getGrapes = makeGetFruitsFunction("grapes");
const getMangoes = makeGetFruitsFunction("mango");

console.log(getStrawberries(5))
console.log(getGrapes(1))
console.log(getMangoes(3))
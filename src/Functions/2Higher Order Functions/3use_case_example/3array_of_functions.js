const fruits = {
    strawberry: "🍓",
    grapes: "🍇",
    mango: "🥭",
}

function makeGetFruitsFunctions(fruitNames) {
    const getFruitsFunctions = [];
    for (const name of fruitNames) { // <element> of <array>; ES6 feature https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
        getFruitsFunctions.push(function (quantity) { // push the entire function that returns a string containing <quantity> number of the specific fruit
            return fruits[name].repeat(quantity);
        })
    }
    return getFruitsFunctions; // return the array of functions
}

const [getStrawberries, getGrapes, getMangoes] = makeGetFruitsFunctions(Object.keys(fruits)); // ### desctructuring the array of functions
/* ### Same as:
const getFruitsFunctions = makeGetFruitsFunctions(Object.keys(fruits))
const getStrawberries = functions[0];
const getGrapes = functions[1];
const getMangoes = functions[2];
*/

console.log(getStrawberries(5))
console.log(getGrapes(1))
console.log(getMangoes(3))
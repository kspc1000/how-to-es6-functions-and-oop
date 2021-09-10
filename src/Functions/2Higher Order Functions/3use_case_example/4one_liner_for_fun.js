const fruits = {
    strawberry: "🍓",
    grapes: "🍇",
    mango: "🥭",
}

// One liner with array destructuring (may not be good for readability)
const [getStrawberries, getGrapes, getMangoes] = Object.keys(fruits).map(fruit => quantity => fruits[fruit].repeat(quantity));
// IIFE version: ((fruitNames) => fruitNames.map(v => (quantity) => fruits[v].repeat(quantity)))(Object.keys(fruits));

console.log(getStrawberries(5))
console.log(getGrapes(1))
console.log(getMangoes(3))
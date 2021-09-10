const fruits = { // object called fruits, contains fruit names as keys and corresponding emoji as values
    strawberry: "🍓",
    grapes: "🍇",
    mango: "🥭",
}

// Let's say we want to declare separate functions to retrieve <quantity> number of fruits for each fruit as a string
function getStrawberries(quantity) {
    return fruits["strawberry"].repeat(quantity) // returns a string containing <quantity> number of strawberries
}

function getGrapes(quantity) {
    return fruits["grapes"].repeat(quantity)
}

function getMangoes(quantity) {
    return fruits["mango"].repeat(quantity)
}

console.log(getStrawberries(5))
console.log(getGrapes(1))
console.log(getMangoes(3))
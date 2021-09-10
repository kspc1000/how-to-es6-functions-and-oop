/*
 * Function constructor
 * Classes are syntactic sugar (sweet syntax) for this functions and prototypal inheritance
 * Read more at https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
 */

function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.info = function () { // closure
        console.log(`Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`);
    }
}

const millie = new Person("Millie", 18, "female");

console.log(millie.age);
millie.info();

Person.prototype.introduction = function () {
    console.log(`Hi! I'm ${this.name}`);
}

millie.introduction();
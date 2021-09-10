class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    info() {
        console.log(`Name: ${this.name} \nAge: ${this.age} \nGender: ${this.gender}`);
    }
}

class Student extends Person { // Student inherits from Person
    constructor(name, age, gender, studentClass, course) {
        super(name, age, gender);
        this.class = studentClass;
        this.course = course;
    }
    info() {
        super.info();
        console.log(`Class: ${this.class} \nCourse: ${this.course}`)
    }
}

export class Lecturer extends Person { // Lecturer inherits from Person
    constructor(name, age, gender, school, salary) {
        super(name, age, gender);
        this.school = school;
        this.salary = salary;
    }
    info() {
        super.info();
        const { school, salary } = this; // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#object_destructuring
        console.log(`School: ${school} \nSalary: ${salary}`);
    }
}

const millie = new Student("Millie", 18, "female", "DAAA/2A/21", "Diploma in Applied AI & Analytics");
millie.info()

const john = new Lecturer("John", 41, "male", "Computing", 5000);
john.info();
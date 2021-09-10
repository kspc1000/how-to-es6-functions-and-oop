import { Lecturer } from './2class_inheritance.js'; // ES modules (introduced in ES6/ES2015) https://www.youtube.com/watch?v=qgRUr-YUk1Q
//* in real practice, always put your clasess in another file and export them, then import them in the files you need

class Principal {
    static name = "Soh Wai Wah";
    static lecturers = [ // database of lecturers
        new Lecturer("John", 41, "male", "Computing", 5000),
        new Lecturer("Emily", 38, "female", "Computing", 5100),
        new Lecturer("Cillian", 45, "male", "Business", 5250),
    ]

    static getAllLecturers() {
        console.table(this.lecturers);
    }
    static getAllLecturersFromSchool(school) {
        console.table(this.lecturers.filter(lecturer => lecturer.school === school));
    }
}

console.log(Principal.name);
Principal.getAllLecturers();
Principal.getAllLecturersFromSchool("Computing");
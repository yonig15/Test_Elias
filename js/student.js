import { person } from "./person.js";
// import * as Person from "./person.js";

class Student extends person {
  constructor(Fname, Lname, age, grade) {
    super(Fname, Lname, age);
    this.grade = grade;
  }
  printFname() {
    console.log(`name of Student is:  ${this.Fname}`);
  }
  printage() {
    console.log("age of Student:" + this.age);
  }
}

const student1 = new Student("yoni", "golan", 28, 95);
console.log(student1);
student1.printFname();
student1.printage();

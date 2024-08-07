//Q1: Implement a Basic Counter
//Problem statement : Create a TypeScript class Counter that manages a simple counter with the foollowing methods:
//1. increment():void - 
//1ncrement the counter by 1
//2. decrement ():void - 
//Decrement the counter by 1
//3. getValue():number -Returns the current value of the counter
//Answer
var Counter = /** @class */ (function () {
    function Counter() {
        this.value = 0;
        this.value = 0;
    }
    Counter.prototype.increment = function () {
        this.value += 1;
    };
    Counter.prototype.decrement = function () {
        this.value -= 1;
    };
    Counter.prototype.getValue = function () {
        return this.value;
    };
    return Counter;
}());
//Example usage
var counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.getValue());
counter.decrement();
console.log(counter.getValue());
//Qno2:  Implement a Simple Student Record
// Problem Statement: Create a TypeScript class Student to manage a student's name and grade. The class should have the following methods:
// setName(name: string): void - Sets the student's name.
// setGrade(grade: number): void - Sets the student's grade.
// getRecord(): { name: string; grade: number } - Returns an object with the student's name and grade.
//Answer
var Student = /** @class */ (function () {
    function Student() {
        this.name = "";
        this.grade = 0;
        this.name;
        this.grade;
    }
    Student.prototype.setName = function (name) {
        this.name = name;
    };
    Student.prototype.setGrade = function (grade) {
        this.grade = grade;
    };
    Student.prototype.getRecord = function () {
        return { name: this.name, grade: this.grade };
    };
    return Student;
}());
var student = new Student();
student.setName('Alice');
student.setGrade(90);
console.log(student.getRecord());

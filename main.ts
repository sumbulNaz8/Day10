//Q1: Implement a Basic Counter
//Problem statement : Create a TypeScript class Counter that manages a simple counter with the foollowing methods:
//1. increment():void - 
//1ncrement the counter by 1
//2. decrement ():void - 
//Decrement the counter by 1
//3. getValue():number -Returns the current value of the counter

//Answer

class Counter {
    
  private  value:number=0

    constructor(){
        this.value=0
    }
    increment():void{
        this.value +=1
    }

    decrement():void{
        this.value -=1
    }

    getValue():number{
      return   this.value 
   
    }


}
//Example usage
const counter=new Counter()
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
class Student {
         private   name:string=""
         private    grade:number=0

           constructor(){
            this.name
            this.grade
           }

    
    setName(name:string):void{
        this.name =name
    }

    setGrade(grade:number):void{
        this.grade=grade
    }

    getRecord():{ name:string; grade:number}{
        return {name:this.name,grade:this.grade}

    }
    
}

const student = new Student()
student.setName('Alice')
student.setGrade(90)
console.log(student.getRecord());

// echo "# Day10" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/sumbulNaz8/Day10.git
// git push -u origin main
class Course {
  constructor(title, lenght, price) {
    this.title = title;
    this.lenght = lenght;
    this.price = price;
    //2 Задание
  }
  calculation() {
    return this.lenght / this.price;
  }
  addShortSmurry() {
    console.log(
      `The title of course ${this.title}, price of course is ${this.price}$, the number of pages in course is ${this.lenght}`
    );
  }
}
//1 Задание
// const theFirst = new Course('Js', 1000, 4);
// const theSecond = new Course('Blender', 5000, 25);

// console.log(theFirst, theSecond);
// вывод второго задание
// console.log(theFirst.calculation(), theSecond.calculation());
// theFirst.addShortSmurry();
// theSecond.addShortSmurry();

class PracticalCourse extends Course {
  constructor(title,price,){
    super() 
    this practis = new Course();
    this.numOfExercises = numOfExercises
  }
}

class TheorethicalCourse extends Course {
    addTextTool(){
        console.log(`Well it write some text for new class`)
    }
}

const practis = 

console.log(practis);
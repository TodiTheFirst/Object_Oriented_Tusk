class Course {
//5 задание 
    #price
// 4 Задание если в любом классе ввести минус в цене он выдаст инвелид вэлью
  get price() {
    return "$" + this.#price;
  }
  set price(value) {
    if (value < 0) {
      throw "Invalid value!";
    }
    this.#price = value;
  }
  constructor(title, lenght, price) {
    this.title = title;
    this.lenght = lenght;
    this.price = price;
    //2 Задание
  }
  calculation() {
    return this.lenght / this.#price;
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

//3 задание
class PracticalCourse extends Course {
  constructor(title, lenght, price, numOfExercises) {
    super(title, lenght, price);
    this.numOfExercises = numOfExercises;
  }
}

class TheorethicalCourse extends Course {
  addTextTool() {
    console.log(`Well it write some text for new class`);
  }
}

const practis = new PracticalCourse("Js", 1000, 4, 20);
const practisV = new TheorethicalCourse("Course for chill", 200, 50);

console.log(practis);
practis.addShortSmurry();
practisV.addTextTool();
practisV.addShortSmurry();

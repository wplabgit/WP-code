class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }

  getAge() {
    console.log(`I am ${this.age} years old`);
  }
}

const p1 = new Person("Rahul", 22);
p1.greet();
p1.getAge();
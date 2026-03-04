const name = "Alice";
const age = 25;

const user = {
  name,        // shorthand property
  age,
  greet() {    // shorthand method
    console.log(`Hi, I'm ${this.name}`);
  }
};

user.greet();

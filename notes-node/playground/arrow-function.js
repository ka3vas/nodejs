var sqare = x => x * x;
console.log(sqare(3));

var user = {
  name: "Sebastian",
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}.`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}.`);
  }
};

user.sayHi();
user.sayHiAlt(1, 2, 3);

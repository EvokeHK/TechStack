//Arrow Function
function sayHello() {
  console.log("Hello");
}

const greet = (name) => console.log("Hello", name);
greet("SAM");
sayHello();

//Object

const user = {
  name: "Hari",
  email: "hari@gmail.com",
};

console.log(user.email);
console.log(user["name"]);

const { name: userName, email } = user;

console.log(email);
console.log(userName);

//Map Method

const userArray = [
  { name: "Sam", email: "Sam@email.com" },
  { name: "John", email: "John@email.com" },
];

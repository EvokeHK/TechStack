const a = [5, 6, 5, 4, 4, 5, 6, 4, 4, 46];
console.log(...a);

const obj1 = {
  name: "hari",
};

const obj2 = {
  hobby: ["Reading", "Gaming"],
};

const user = {
  ...obj1,
  ...obj2,
  email: "hari@gmail.com",
};

console.log(user);

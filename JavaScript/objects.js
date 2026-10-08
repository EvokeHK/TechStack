const user = {
  name: "Hari",
  email: "haridev@gmail.com",
};

console.log(user.email);
console.log(user["name"]);

const user2 = {
  name: "Sam",
  country: "US",
  email: "sam@gmail.com",
};

const { name, country, email } = user2;
console.log(name, country, email);

const { name: username } = user2;
console.log(username);

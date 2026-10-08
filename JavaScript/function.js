// function printLoop() {
//     for(var i =0; i < 3; i++) {
//         console.log(i)
//     }
//     console.log("OUTSIDE", i)
// }

const greet = () => {
  for (let i = 5; i > 0; i--) {
    console.log(i);
  }
};
// printLoop();
greet();

const hello = (lan) => console.log("Hello World", lan);

hello("Java");

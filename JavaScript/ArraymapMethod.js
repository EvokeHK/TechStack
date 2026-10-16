products = ["P1", "P2", "P3", "P4"];

// const productlist = products.map(function (items) {
//   return "<li>" + items + "</li>";
// });

// console.log(productlist);

const arrowProductList = products.map((x) => "<li>" + x + "</li>");
const arrowProductList1 = products.map((x) => `<li>${x}</li>`);
console.log(arrowProductList1);

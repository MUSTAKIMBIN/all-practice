let price = 6700;

if (price <= 6700) {
  //10% discount
  let discountPrice = (price * 10) / 100;
  let payAmount = price - discountPrice;
  //   console.log(`you got 10% discount.You will pay  ${payAmount}`);
} else {
  console.log(`you have to pay ${price}`);
}
// ternary operator
let age = 12;
age >= 18 ? console.log(`vot dite ja`) : console.log(`tor boyos hoi nai`);

let money = 450;
let isLeader = false;
money = isLeader === true ? (money = 0) : (money += 100);
console.log(money);

// for of loop
let forutes = ["am ", "jam", "kola", "mula"];
for (const frout of forutes) {
  console.log(frout);
}

// how many even odd
let number = 15;
let even = [];
let odd = [];
for (let i = 1; i <= number; i++) {
  if (i % 2 === 0) {
    even.push(i);
    // console.log(i);
  } else {
    odd.push(i);
  }
}
console.log("even" + even.length);
console.log("odd" + odd.length);

// find length of thos name less than 4 charecter
var names = ["Tom", "Alex", "John", "Al", "Rafi"];
let finalNames = [];
for (name of names) {
  if (name.length < 4) {
    finalNames.push(name);
  }
}
console.log(finalNames);

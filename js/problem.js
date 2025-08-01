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

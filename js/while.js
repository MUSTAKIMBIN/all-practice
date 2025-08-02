const commitment = `I will invest at least 6 hrs every single day for next 60 days!`;
let i = 1;
// while (i <= 60) {
//   console.log(commitment, i);
//   i++;
// }

let num = 61;
let sum = 0;
while (num <= 100) {
  if (num % 2 == 0) {
    console.log(num);
    sum += num;
  }

  num++;
}
console.log(sum);

let score = 1;
while (score <= 10) {
  console.log(score * 5);
  score++;
}

let time = 21;
while (time >= 15) {
  console.log(`` + time);

  time--;
}
console.log(parseFloat(time));

const gess = 1n + 2n;
console.log(gess);
const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];
for (let i = 0, j = 9; i <= j; i++, j--) {
  //                              ^
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}

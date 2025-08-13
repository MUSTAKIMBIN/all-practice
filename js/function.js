function firstFuction() {
  console.log("I want a developer job");
}
// firstFuction();

//Write a JavaScript function that reverses a number.
function reverseNumber(num) {
  num += "";
  return num.split("").reverse().join("");
}
// console.log(reverseNumber(123456));

// inch to fit

function inchToFit(inch) {
  return inch / 12;
}

const result = inchToFit(74);
// console.log(result);

function fitToInch(fit) {
  return fit * 12;
}
const inch = fitToInch(5.8);
// console.log(inch);

//find leap year

function findLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
const findLeap = findLeapYear(2000);
const findLeap0 = findLeapYear(2020);
const findLeap2 = findLeapYear(2200);
const findLeap3 = findLeapYear(1985);
// console.log(findLeap, findLeap0, findLeap2, findLeap3);

//odd average finder

function makeOddAverage(numbers) {
  let oddNumbers = [];
  let oddAveragenumbers = 0;
  for (let number of numbers) {
    if (number % 2 !== 0) {
      oddNumbers.push(number);
    }
  }
  for (let oddNumber of oddNumbers) {
    oddAveragenumbers += oddNumber;
  }
  return oddNumbers, oddAveragenumbers;
}

const oddAverage = makeOddAverage([
  11, 22, 55, 44, 66, 33, 88, 77, 111, 1236, 1, 589, 546,
]);
// console.log(oddAverage);

// unique array

function findUnique(array) {
  let myUnique = [];
  for (let items of array) {
    if (myUnique.includes(items) === false) {
      myUnique.push(items);
    }
  }
  return myUnique;
}
const people = ["bondhu", "ami", "toh", "balo", "bolo", "toh", "bondhu"];
const nums = [1, 4, 3, 1, 2, 5, 6, 8, 4, 2, 3, 5, 5, 85];
const uniqueWords = findUnique(people);
const uniqueNumbers = findUnique(nums);
console.log(uniqueWords);
console.log(uniqueNumbers);
for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}

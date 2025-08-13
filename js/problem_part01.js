// Task -1:
//Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137, 22];
let lowestNumber = heights2[0];
for (let height of heights2) {
  //   console.log(height);
  if (height < lowestNumber) {
    lowestNumber = height;
  }
}
// console.log(lowestNumber);

// Task -2:
// Find the friend with the smallest name.
const firends = ["rahim", "robin", "rafi", "ron", "rashed", "ri"];
const firendsLengths = [];
for (let friend of firends) {
  firendsLengths.push(friend.length);
}
let smallestName = firendsLengths[0];
for (let firendLength of firendsLengths) {
  if (firendLength < smallestName) {
    smallestName = firendLength;
  }
}
// console.log(smallestName);

// Task-3:
// Your task is to calculate the total budget required to buy electronics:
const laptop = 35000;
const tablet = 15000;
const mobile = 20000;
function calculateElectronicsBudget(laptop, mobile, tablet) {
  return laptop + mobile + tablet;
}
const totalMoney = calculateElectronicsBudget(laptop, tablet, mobile);
// console.log(totalMoney);

// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
const phones = [
  { model: "PhoneA", brand: "Iphone", price: 95000 },
  { model: "PhoneB", brand: "Samsung", price: 40000 },
  { model: "PhoneC", brand: "Oppo", price: 26000 },
  { model: "PhoneD", brand: "Nokia", price: 35000 },
  { model: "PhoneE", brand: "Iphone", price: 105000 },
  { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(phones) {
  let totalPhonPrice = 0;
  let phonLength = 0;
  for (let phone of phones) {
    // console.log(phone.price);
    totalPhonPrice += phone.price;
    phonLength++;
  }
  return totalPhonPrice / phonLength;
}
const averageOfPhons = findAveragePhonePrice(phones);
console.log(averageOfPhons);

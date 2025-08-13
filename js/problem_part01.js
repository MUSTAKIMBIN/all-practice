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
console.log(smallestName);

// Task-3:
// Your task is to calculate the total budget required to buy electronics:
const laptop = 35000;
const tablet = 15000;
const mobile = 20000;
function calculateElectronicsBudget(laptop, mobile, tablet) {
  return laptop + mobile + tablet;
}
const totalMoney = calculateElectronicsBudget(laptop, tablet, mobile);
console.log(totalMoney);

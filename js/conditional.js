/***
Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const burger = 500;
if (burger > 500) {
  console.log(`congratulation you got a free Coke`);
} else {
  console.log(`Your coke price: 30tk`);
}
/*** 
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/
const bmi = 50;
if (bmi < 18.5) {
  console.log(`You are underweight`);
} else if (bmi > 18.5 && bmi <= 24.9) {
  console.log(`You are normal`);
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log(`you are overweight`);
} else {
  console.log(`you are obese`);
}
/***

Grade Calculator

    Create a simple JavaScript program that
    takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
const mark = 65;
if (mark >= 90 && mark <= 100) {
  console.log(` A`);
} else if (mark >= 80 && mark <= 89) {
  console.log(` B`);
} else if (mark >= 70 && mark <= 79) {
  console.log(` C`);
} else if (mark >= 60 && mark <= 69) {
  console.log(` D`);
} else if (mark >= 0 && mark <= 59) {
  console.log(` F`);
} else {
  console.log(` Un valid mark`);
}
/***

you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */
const num1 = 50;
const num2 = 50;
if (num1 > num2) {
  console.log(`result: ${num1 * 2}`);
} else {
  console.log(`result: ${num1 + num2}`);
}

const result = num1 > num2 ? num1 * 2 : num1 + num2;
console.log(result);

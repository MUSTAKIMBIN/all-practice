//Access the golden rod color value in output.
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
console.log(colors["golden rod"]);

//For this object below add a property named passenger capacity with value 5
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};

car.passenger = 5;
console.log(car);

//Display the physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
console.log(student.physics.marks);

//Count the number of properties.
let student2 = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};

const length = Object.keys(student2).length;
console.log(length);

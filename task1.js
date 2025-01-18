
// task 1:  Access the golden rod color value in output.
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};

var golden_color = colors['golden rod'];
console.log(golden_color);


// Task-2
// For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

car.passengerCapacity = 5;//dot notation diye add
car['passengerCapacity'] = 5;//bracket notation diye add.
console.log(car);


// Task-3
// Display the physics marks as output.
const student2 = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};

const piss_property = Object.keys(student2.physics);
const marks_property = piss_property.find(prop => prop ==='marks');
console.log(marks_property);


// Task-4
// Count the number of properties.


let student1 = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
const keys = Object.keys(student1);
var student1_length = keys.length;
console.log(student1_length);
// node task1.js
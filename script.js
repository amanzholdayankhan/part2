// Task 6. Variables and data types
console.log("=== Task 6 ===");
const fullName = "Dayankhan Amanzhol"; // string
let age = 20;                        // number
const isStudent = true;              // boolean
let favoriteColor = "blue";          // string

console.log("fullName:", fullName, typeof fullName);
console.log("age:", age, typeof age);
console.log("isStudent:", isStudent, typeof isStudent);
console.log("favoriteColor:", favoriteColor, typeof favoriteColor);

favoriteColor = "green";
console.log("reassigned favoriteColor:", favoriteColor);
// Explanation: const is used for values that should not be reassigned.


// Task 7. Input and a greeting
console.log("=== Task 7 ===");
const userName = prompt("Enter your name:");
alert(`Hello, ${userName}!`);

const studentGroup = "MT-2506";
const greetingString = `Student: ${fullName}, Group: ${studentGroup}`;
console.log(greetingString);


// Task 8. Sum and arithmetic
console.log("=== Task 8 ===");
const num1Str = prompt("Enter first number:", "12");
const num2Str = prompt("Enter second number (non-zero):", "5");

const num1 = Number(num1Str);
const num2 = Number(num2Str);

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);
console.log("Quotient:", num1 / num2);
console.log("Remainder:", num1 % num2);

// Explanation: "12" + "5" concatenates strings to "125".
// Number() converts them to numbers, so + adds them (17).
console.log('"12" + "5" =', "12" + "5");
console.log("Number('12') + Number('5') =", Number("12") + Number("5"));


// Task 9. Strings
console.log("=== Task 9 ===");
const myName = fullName;
console.log("Length:", myName.length);
console.log("Uppercase:", myName.toUpperCase());
console.log("Lowercase:", myName.toLowerCase());
console.log("First 3 chars:", myName.slice(0, 3));

const part1 = "Learning JavaScript";
const part2 = "is interesting.";
console.log("Combined sentence:", part1 + " " + part2);


// Task 10. Increment and assignment operators
console.log("=== Task 10 ===");
let counter = 10;
console.log("Start:", counter);
counter++;
console.log("After ++:", counter);
counter--;
console.log("After --:", counter);
counter += 5;
console.log("After += 5:", counter);
counter -= 3;
console.log("After -= 3:", counter);
counter *= 2;
console.log("After *= 2:", counter);
counter /= 4;
console.log("After /= 4:", counter);


// Task 11. A calculation from the lecture
console.log("=== Task 11 ===");
let dogAge = 2;
let humanAge = (dogAge - 2) * 4 + 21;
console.log(`Dog age ${dogAge} is equal to ${humanAge} human years.`);

dogAge = 5;
humanAge = (dogAge - 2) * 4 + 21;
console.log(`Dog age ${dogAge} is equal to ${humanAge} human years.`);


// Task 12. Functions
console.log("=== Task 12 ===");
function greetUser(name) {
    console.log(`Hello, ${name}!`);
}

function calculateSum(a, b) {
    return a + b;
}

function calculateRectangleArea(width, height) {
    return width * height;
}

// Call 1
greetUser("Almas");
console.log("Sum (5, 10):", calculateSum(5, 10));
console.log("Area (4, 6):", calculateRectangleArea(4, 6));

// Call 2
greetUser("Baltas");
console.log("Sum (20, 30):", calculateSum(20, 30));
console.log("Area (10, 15):", calculateRectangleArea(10, 15));
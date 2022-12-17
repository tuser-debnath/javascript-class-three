// Comparison Operator
// == equal to
console.log(7 == "7");
console.log(7 == "7");

// === equal value and equal type
console.log(7 === 7);
console.log(7 === "7");

// != not equal
console.log(7 != 7);
console.log(7 != 8);

// !== not equal value or not equal type
console.log(7 !== 7);
console.log(7 !== "7");

// > greater than
console.log(7 > 7);
console.log(7 > 6);
console.log(7 > 9);

// < less than
console.log(7 < 7);
console.log(7 < 6);
console.log(7 < 9);

// >= greater than or equal to
console.log(7 >= 7);
console.log(7 >= 6);
console.log(7 >= 9);

// <= less than or equal to
console.log(7 <= 7);
console.log(7 <= 6);
console.log(7 <= 9);

// ? ternary

// Logical Operator

// && logical and

let x = 5;
let y = 2;
// console.log(x < 7);
// console.log(y > 5);
console.log(x < 7 && y > 5);

// || logical or

// console.log(x < 7);
// console.log(y > 5);
console.log(x < 7 || y > 5);

// ! logical not
console.log(!(x == y));

// Operator Precedence
// B O D M A S
console.log(7 + 5 - 2 * 2 + 81 / 9 + (3 - 2));

//12-4+9+1
//21-4+1
//18

// Template Litarels
let firstName = "Tuser";
let lastName = "Debnath";
let age = 23;
let job = "Web Developer";
let place = "Bangladesh";

console.log("I'm Tuser Debnath, 23 years old Web Developer!");
console.log(
  "I'm " + firstName + " " + lastName + ", " + age + " years old " + job + "!"
);

console.log("I'm Tuser Debnath, 23 years old Web Developer!");
console.log(`I'm ${firstName} ${lastName}, ${age} years old ${job}!`);
console.log(`${place} Is My Motherland`);

// Condition if/else statement

if (7 > 8) {
  console.log("It's True");
} else {
  console.log("Something Else");
}

let ritomAge = 7;

if (ritomAge >= 6) {
  console.log("He Can Go To School");
} else {
  console.log("He Can't Go To School");
}

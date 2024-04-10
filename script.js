// The initial numbers that must be verified.
const n1 = 20;
const n2 = 15;
const n3 = 10;
const n4 = 5;
// 1.Check if all numbers are divisible by 5.
const Divby5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0
console.log(Divby5); // true

// 2.Check if the first number is larger than the last.
if (n1 > n4) {
    console.log("n1 is larger"); // true
}

// 3.Subtract the first number from the second number.
console.log(15 - 20); // -5
//Multiply the result by the third number.
console.log(-5 * 10); //-50
//Find the remainder of dividing the result by the fourth number.
console.log(-50 % 5); // -0
//4.Change the way that isOver25 calculates so that we do not need to use the NOT operator (!)
// in other logic comparisons. Rename the variable as appropriate.
if (n1 < 25) {
    console.log(" n1 is less than 25"); //true
    }
if (n2 < 25) {
    console.log(" n2 is less than 25"); //true
    }
if (n3 < 25) {
    console.log(" n3 is less than 25"); //true
}
if (n4 < 25) {
    console.log(" n4 is less than 25"); //true
}
if (n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25) {
    console.log("All four numbers are valid according to the given criteria") // true
}

// Part-2 Practical Math

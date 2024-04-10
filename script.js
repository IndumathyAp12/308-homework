// The initial numbers that must be verified.
const n1 = 20;
const n2 = 15;
const n3 = 10;
const n4 = 5;
 // 1.Check if all numbers are divisible by 5.
 const Divby5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0
 console.log(Divby5); // true

 // Check if the first number is larger than the last.
 if (n1 > n4) {
 console.log("n1 is larger"); // true
 }

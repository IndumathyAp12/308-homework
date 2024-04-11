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
if (n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25) {
    console.log("All four numbers are valid according to the given criteria") // true
}

// Part-2 Practical Math
 let TotalDist = 1500;
 let speed1 = 55; let Dist1 = 30;
 let speed2 = 60; let Dist2 = 28;
 let speed3 = 75; let Dist3 = 23;
 let Budget = 175;
 let Cost = 3;

 //How many gallons of fuel will you need for the entire trip of Total Dist=1500. 
//scenario 1:let speed1 = 55; let Dist1 = 30;
console.log(TotalDist / Dist1); //50
//scenario 2: let speed2 = 60; let Dist2 = 28;
console.log(TotalDist / Dist2); //53.57
//scenario 3:let speed3 = 75; let Dist3 = 23;
console.log(TotalDist / Dist3); //65.21


//Will your budget be enough to cover the fuel expense when Budget =175.
//scenario 1: Gallons=50 ;cost=3 per gallon.
console.log( 50 * 3); //150
//scenario 2: Gallons=53.57 cost =3
console.log(53.57 * 3); //160.71
//scenario 3: Gallons=65.21 cost =3
console.log(65.21 * 3); //195.63


//How long will the trip take, in hours.
//scenario 1: let speed1 = 55; TotalDist =1500;
console.log(TotalDist / speed1); //27.27
//scenario 2: let speed2 = 60; TotalDist =1500;
console.log(TotalDist / speed2); //25
//scenario 2: let speed2 = 75; TotalDist =1500;
console.log(TotalDist / speed3); //20

//Compare the results when traveling at an average of 55, 60, and 75 miles per hour.
// Which makes the most sense for the trip?

const Budget1 = 150;
const Budget2 = 160.71;
const Budget3 = 195.63;

// when travelled at speed 55, budget is 150 so to calculate efficiency of this trip 
console.log( Budget1 / speed1); // price per gallon =2.72
// when travelled at speed 60 , budget is 160.71
console.log(Budget2 / speed2); // price per gallon =2.678
//when travelled at speed 75, budget is 195.63
console.log(Budget3 / speed3); // price per gallon = 2.608

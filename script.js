// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

let allDivisbleByFive = false;
if (n1 % 5 === 0 && n2 % 5 === 0 && n3 % 5 === 0 && n4 % 5 === 0) {
    allDivisbleByFive = true;
}

let isFirstLargerThanLast = false;
if (n1 > n4) {
    isFirstLargerThanLast = true;
}


const mathOpResult = ((n1 - n2) * n3) % n4;

let isLessOrEqualTo25 = n1 <= 25 && n2 <= 25 && n3 <= 25 && n4 <= 25;




// Finally, log the results.
console.log(`The four numbers are divided by five : ${allDivisbleByFive}.`);
console.log(`The first  numbers is larger then last number : ${isFirstLargerThanLast}.`)
console.log(`The result of math operator is : ${mathOpResult}.`)
console.log(`My result has  :  ${isLessOrEqualTo25}.`)


//  Trip Calculation

const dist = 1500;
const budget = 175;
const avgCost = 3;


let maxFuel = budget / avgCost;

const speed55 = 55;
const milesPerGallonSpeed55 = 30;

let timeTakenSpeed55 = dist / speed55;
let gallonRequiredSpeed55 = dist / milesPerGallonSpeed55;
let costWithSpeed55 = gallonRequiredSpeed55 * avgCost;
const budgetEnoughSpeed55 = budget >= costWithSpeed55 ? "Yes" : "No";

console.log("\n");
console.log(`Calculations completed for ${speed55} mph ${milesPerGallonSpeed55} miles per gallon`);
console.log(`How many gallons of fuel will you need for the entire trip? ${gallonRequiredSpeed55} gallons will be required`);
console.log(`Will your budget be enough to cover the fuel expense? ${budgetEnoughSpeed55} ; Cost ${costWithSpeed55} Within Budget ${budget}`);
console.log(`How long will the trip take, in hours? ${timeTakenSpeed55} hours required to travel ${dist} miles at speed of ${speed55} mph`);

const speed60 = 60;
const milesPerGallonSpeed60 = 28;

let timeTakenSpeed60 = dist / speed60;
let gallonRequiredSpeed60 = dist / milesPerGallonSpeed60;
let costWithSpeed60 = gallonRequiredSpeed60 * avgCost;
const budgetEnoughSpeed60 = budget >= costWithSpeed60 ? "Yes" : "No";
console.log("\n");
console.log(`Calculations completed for ${speed60} mph ${milesPerGallonSpeed60} miles per gallon`);
console.log(`How many gallons of fuel will you need for the entire trip? ${gallonRequiredSpeed60} gallons will be required`);
console.log(`Will your budget be enough to cover the fuel expense? ${budgetEnoughSpeed60} ; Cost ${costWithSpeed60} Within Budget ${budget}`);
console.log(`How long will the trip take, in hours? ${timeTakenSpeed60} hours required to travel ${dist} miles at speed of ${speed60} mph`);

const speed75 = 75;
const milesPerGallonSpeed75 = 23;

let timeTakenSpeed75 = dist / speed75;
let gallonRequiredSpeed75 = dist / milesPerGallonSpeed75;
let costWithSpeed75 = gallonRequiredSpeed75 * avgCost;
const budgetEnoughSpeed75 = budget >= costWithSpeed75 ? "Yes" : "No";
console.log("\n");
console.log(`Calculations completed for ${speed75} mph ${milesPerGallonSpeed75} miles per gallon`);
console.log(`How many gallons of fuel will you need for the entire trip? ${gallonRequiredSpeed75} gallons will be required`);
console.log(`Will your budget be enough to cover the fuel expense? ${budgetEnoughSpeed75} ; Cost ${costWithSpeed75} Within Budget ${budget}`);
console.log(`How long will the trip take, in hours? ${timeTakenSpeed75} hours required to travel ${dist} miles at speed of ${speed75} mph`);

let chosenSpeedForLeastTimeWithinBudget;
if (budgetEnoughSpeed75 == "Yes" && budgetEnoughSpeed60 == "Yes" && budgetEnoughSpeed55 == "Yes") {
    chosenSpeedForLeastTimeWithinBudget = Math.max(speed55, speed60, speed75);
} else if (budgetEnoughSpeed75 == "Yes" && budgetEnoughSpeed60 == "Yes") {
    chosenSpeedForLeastTimeWithinBudget = Math.max(speed60, speed75);
} else if (budgetEnoughSpeed75 == "Yes" && budgetEnoughSpeed55 == "Yes") {
    chosenSpeedForLeastTimeWithinBudget = Math.max(speed55, speed75);
} else if (budgetEnoughSpeed60 == "Yes" && budgetEnoughSpeed55 == "Yes") {
    chosenSpeedForLeastTimeWithinBudget = Math.max(speed55, speed60);
}
console.log("\n");
console.log("All calculation comparision completed !")
console.log(`${chosenSpeedForLeastTimeWithinBudget} mph speed makes most sense since it is in my ${budget} and takes least amount of time !`);
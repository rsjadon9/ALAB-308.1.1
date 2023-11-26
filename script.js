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


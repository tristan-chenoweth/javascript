//This variable is for my current age. 
let myAge = 25;
//This variable is for early years (will change cannot be const).
let earlyYears = 2;

earlyYears *= 10.5;

//This variable takes my age and subtracts 2 and assigns it to the variable later years
let laterYears = (myAge - 2);

//This line takes later years and calculates dog years and reassigns it to later years

laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//This line adds early years to later years
let myAgeInDogYears = earlyYears + laterYears;

let myName = 'Tristan'.toLowerCase();

//The following line is a test of the lower case method
//console.log(myName);

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
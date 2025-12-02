//Question1- String Concatenation

let firstName = 'Samuel';
let lastName = 'Sims';
let dealerName = firstName + ' ' + lastName;
let location = 'Mbarara';
let product = 'Tomatoes';

console.log(dealerName + ' ' + location + ' ' + product);


//Question2- Template literals

// let firstName = 'Samuel';
// let lastName = 'Sims';
// let dealerName = `${firstName} ${lastName}`;
// let location = 'Mbarara';
// let product = 'Tomatoes';

// console.log(`${dealerName} ${location} ${product}`);


//Question3- Type checking and conversion

//string to number and typeof

let age = '25';
console.log(Number(age));
console.log(parseInt(age), typeof parseInt(age));


//Number to string and typeof
let value = 45;
let score = value.toString();
console.log(score, typeof score);     


//Boolean to string and typeof

let isOld = true;
let string = String(isOld);
console.log(string, typeof string);

//string to boolean and typeof
let gender = 'female';
let isFemale = Boolean(gender);
console.log(isFemale, typeof isFemale);


//Question4 - String method

let message = ' hello world, welcome to JavaScript class! ';

console.log(message.toUpperCase()); //.toUpperCase

console.log(message.toLowerCase()); //.toLowerCase

//Trim
let trimmed = message.trim();  
console.log(trimmed);

//Split
let words = trimmed.split(" ");
console.log(words);

//Includes
console.log(message.includes("welcome")); // true
console.log(message.includes("python"));  // false

//Replace
let newMessage = trimmed.replace("JavaScript", "Programming");
console.log(newMessage);




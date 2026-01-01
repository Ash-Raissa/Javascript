//Part A - Variable declaration and Type checking
//Q1

const companyName = 'Karibu Groceries LTD';
const minimumTonnage = 100;
const isOperational = true;
let managerName
const closedBranches = null;

//Q2

console.log(typeof companyName);      
console.log(typeof minimumTonnage);       
console.log(typeof isOperational); 
console.log(typeof managerName);    
console.log(typeof closedBranches);    


//Q3

/*
  companyName is declared with const because
  the company name is fixed and should not change
  while the program is running.
*/

// minimumTonnage uses const because the required tonnage is a fixed business rule

// isOperational is const since the operational status is a fixed true/false state

// managerName uses let because it is declared first
// and will be assigned a value later in the program

/*
  closedBranches is const and set to null because
  it represents an intentional absence of data.
  The reference itself should not change.
*/



//Part B- String manipulation and validation

//Q4
let dealerNameInput = 'james BOND';

// Q5
let trimmedName = dealerNameInput.trim();

let cleanDealerName = trimmedName
  .toLowerCase()
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log(`Cleaned Dealer Name: ${cleanDealerName}`);

// Q6
if (cleanDealerName.length >= 2 && cleanDealerName !== "") {
  console.log("Valid dealer name");
} else {
  console.log("Invalid dealer name");
}


//Part C - conditional logic and Business rules

let userRole = 'Manager';
let procurementTonnage = 1500;
let produceType = 'Beans';
let costInUgx = '50000';


// Q8

// Rule 1
if (userRole === 'Sales Agent') {
  console.log('Sales agents are not allowed to record produce entries.');
} else {
  console.log("Proceeding with procurement validation");
}


// Rule 2- Check tonnage for individual dealers

let user = 'Dealer';

if (user === 'Dealer' && procurementTonnage >= 1000) {
  console.log("Tonnage requirement met.");
} else {
  console.log("Tonnage must be at least 1000kg.");
}


// Rule 3
// Convert cost to number
let costAmount = Number(costInUgx);

if (costAmount >= 10000) {
  console.log("Cost requirement met.");
} else {
  console.log("Cost must be at least 5 digits");
}


// Q9
// Single Boolean expression using logical AND
if (procurementTonnage >= 1000 && costAmount >= 10000) {
  console.log("Procurement record valid");
} else {
  console.log("Procurement record invalid");
}


//Q10
//Array

let kglProduce = ['Grain Maize', 'Cow Peas', 'G-nuts', 'Soybeans'];
console.log(kglProduce);

//Q11
//Adding to the end of the array

kglProduce.push('Green Peas');
console.log(kglProduce);

//Removing an item from the array

kglProduce.shift('Grain Maize');
console.log(kglProduce);

//checking an item in an array

let hasGNuts = kglProduce.includes('G-nuts');

console.log(hasGNuts);

//Logs the final array length

console.log(kglProduce);
console.log(kglProduce.length);

//Q12

let branch2Produce = ['Maize', 'Beans'];

let allProduce = kglProduce.concat(branch2Produce);

console.log(allProduce);


































































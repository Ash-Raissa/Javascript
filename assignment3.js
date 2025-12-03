//PART ONE

// Question1- Tonnage validatio
let procurementTonnage = 850; 
let meetsRequirement = procurementTonnage >= 1000;

console.log(meetsRequirement);


//Question2- Strictness check
let costStr = '5000';
let costNum = 5000;

let comparison = costStr == costNum;
console.log(comparison);

let comparison2 = costStr === costNum;
console.log(comparison2);

//The strict operator (===) is safer for KGL because it checks both the value and the data type.


//PART TWO

//Question3 - Complex Validation
let dealerName = "Sam";  
let costUgx = 15000; 

let isValid = (dealerName.length >= 2) && (costUgx >= 10000);
console.log(isValid);


//Question4- Date logging.
let saleDate = new Date();

let day = saleDate.getDate();
let month = saleDate.getMonth() + 1;
let year = saleDate.getFullYear();

console.log(`Sale on: ${day}/${month}/${year}`);















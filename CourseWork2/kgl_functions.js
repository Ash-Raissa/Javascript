// Part A: Function Implementation 
//Q1

function calculateProcurementCost(tonnageInKg, pricePerKg) {
  if (
    typeof tonnageInKg !== "number" || typeof pricePerKg !== "number" ||
    tonnageInKg < 0 || pricePerKg < 0
  ) {
    return "Invalid input";
  }

  return tonnageInKg * pricePerKg;
}

//Q2

let validateBuyerName = (buyerName) => {
  if (buyerName && buyerName.length >= 2) {
    return true;
  }
  return false;
};

// Q3

function checkUserAuthorization(role) {
  switch (role) {
    case "Manager":
      return "procurement_and_sales";
    case "Sales Agent":
      return "sales_only";
    case "Director":
      return "view_aggregations";
    default:
      return "unauthorized";
  }
}

// Part B: Object Creation and Manipulation
// Q4

function createSalesRecord(tonnage, buyerName, produceName, amountPaid) {
  return {
    id: Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000,
    produceName: produceName,
    tonnageInKgs: tonnage,
    buyerName: buyerName,
    amountPaid: amountPaid,
    saleDate: new Date(),
    isCreditSale: false
  };
}

// Q5

// Create a sales record using the function
let salesRecord = createSalesRecord(
  1500,
  "John Sewa",
  "Maize",
  2500000
);

// Add a new property using dot notation
salesRecord.branch = "Maganjo";

// Modify isCreditSale to true
salesRecord.isCreditSale = true;

// Add dueDate using bracket notation
salesRecord["dueDate"] = new Date("2026-01-31");

// Get all property names and log them
const propertyNames = Object.keys(salesRecord);
console.log(propertyNames);


// Q6
for (let key in salesRecord) {
  console.log(`Property: ${key}, Value: ${salesRecord[key]}`);
}


// Part C:  Loop Implementation and Data Processing 

// Q7

let weeklyTonnage = [1200, 1500, 980, 2000, 1100, 1800, 1300];

let totalTonnage = 0;

// Calculate total tonnage
for (let i = 0; i < weeklyTonnage.length; i++) {
  totalTonnage += weeklyTonnage[i];
}

// average daily tonnage
let averageTonnage = totalTonnage / weeklyTonnage.length;

console.log("Total Tonnage for the week:", totalTonnage);
console.log("Average Daily Tonnage:", averageTonnage);


// Q8

// Create an array of sales records
let salesRecords = [
  createSalesRecord(1200, "Josaiah", "Maize", 2000000),
  createSalesRecord(1500, "Eliezer", "Beans", 2500000),
  createSalesRecord(1000, "Azariah", "Rice", 1800000),
  createSalesRecord(1800, "Etienne", "Wheat", 3000000),
  createSalesRecord(1300, "Eve", "Maize", 2200000)
];

// Mark some sales as credit sales
salesRecords[1].isCreditSale = true;
salesRecords[3].isCreditSale = true;

let creditSalesCount = 0;

for (let record of salesRecords) {
  if (!record.isCreditSale) {
    continue;
  }
  creditSalesCount++;
}

console.log("Total credit sales: " + creditSalesCount);

// Q9

let inventory = [
  { name: 'Beans', tonnage: 500 },
  { name: 'Maize', tonnage: 0 },
  { name: 'G-nuts', tonnage: 300 }
];

for (let i = 0; i < inventory.length; i++) {
  if (inventory[i].tonnage === 0) {
    console.log(`Manager Alert: ${inventory[i].name} is out of stock`);
    break; 
  }
}


















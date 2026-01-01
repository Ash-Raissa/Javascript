// Part A: Higher Order Functions - Data Transformation
// Q1

let procurementRecords = [
  {
    id: 1,
    dealerName: "Green Valley Traders",
    produceType: "Maize",
    tonnageInKgs: 1500,
    costInUgx: 75000000,
    procurementDate: new Date("2024-01-15")
  },
  {
    id: 2,
    dealerName: "AgroLink Supplies",
    produceType: "Beans",
    tonnageInKgs: 1200,
    costInUgx: 60000000,
    procurementDate: new Date("2024-02-10")
  },
  {
    id: 3,
    dealerName: "Harvest Plus Ltd",
    produceType: "Rice",
    tonnageInKgs: 2000,
    costInUgx: 120000000,
    procurementDate: new Date("2024-03-05")
  },
  {
    id: 4,
    dealerName: "Farmers Union",
    produceType: "Sorghum",
    tonnageInKgs: 1800,
    costInUgx: 81000000,
    procurementDate: new Date("2024-03-20")
  },
  {
    id: 5,
    dealerName: "Golden Fields",
    produceType: "Millet",
    tonnageInKgs: 900,
    costInUgx: 36000000,
    procurementDate: new Date("2024-04-02")
  },
  {
    id: 6,
    dealerName: "Rural Growers Co-op",
    produceType: "Maize",
    tonnageInKgs: 2500,
    costInUgx: 125000000,
    procurementDate: new Date("2024-04-18")
  }
];

// Q2
const procurementWithCostPerKg = procurementRecords.map(record => {
  return {
    ...record,
    costPerKg: record.costInUgx / record.tonnageInKgs
  };
});

console.log(procurementWithCostPerKg);


// Q3
let largeProcurements = procurementRecords.filter(record => {
  return record.tonnageInKgs >= 1000;
});

console.log(largeProcurements);

console.log("Number of qualifying procurements:", largeProcurements.length);


// Q4

const totalTonnage = procurementRecords.reduce((sum, record) => {
  return sum + record.tonnageInKgs;
}, 0);

const totalCost = procurementRecords.reduce((sum, record) => {
  return sum + record.costInUgx;
}, 0);

console.log(`Total Tonnage Procured: ${totalTonnage} Kgs`);
console.log(`Total Cost Incurred: UGX ${totalCost}`);



// Part B: Sets for Unique Data Management

// Q5

function getUniqueDealers(procurementRecords) {
  const dealerSet = new Set(
    procurementRecords.map(record => record.dealerName)
  );

  return Array.from(dealerSet);
}

const uniqueDealers = getUniqueDealers(procurementRecords);
console.log("Unique Dealers:", uniqueDealers);


// Q6

const authorizedRoles = new Set(["Manager", "Director"]);

function isAuthorizedForProcurement(userRole) {
  return authorizedRoles.has(userRole);
}

console.log(`Manager authorized: ${isAuthorizedForProcurement("Manager")}`);
console.log(`Director authorized: ${isAuthorizedForProcurement("Director")}`);
console.log(`Sales authorized: ${isAuthorizedForProcurement("Sales")}`);
console.log(`Farmer authorized: ${isAuthorizedForProcurement("Farmer")}`);


// Part C: Maps for Price Management
// Q7

const kglPriceList = new Map();

kglPriceList.set("Beans", 5500);
kglPriceList.set("Grain Maize", 4800);
kglPriceList.set("Cow peas", 6000);
kglPriceList.set("G-nuts", 7200);
kglPriceList.set("Soybeans", 5800);

console.log("KGL Price List:", kglPriceList);

// Q8

function calculateSaleTotal(produceName, tonnageInKgs) {
  const pricePerKg = kglPriceList.get(produceName);

  if (pricePerKg === undefined) {
    return "Price not found";
  }

  return pricePerKg * tonnageInKgs;
}

console.log(`Beans (1000kg): UGX ${calculateSaleTotal("Beans", 1000)}`);
console.log(`Grain Maize (1500kg): UGX ${calculateSaleTotal("Grain Maize", 1500)}`);
console.log(`Soybeans (800kg): UGX ${calculateSaleTotal("Soybeans", 800)}`);
console.log(`Rice (500kg): ${calculateSaleTotal("Rice", 500)}`);

// Q9

for (const [produceName, price] of kglPriceList) {
  console.log(`Produce: ${produceName}, Price per Kg: ${price} UgX`);
}

const highestPrice = [...kglPriceList.values()].reduce((max, price) => {
  return price > max ? price : max;
}, 0);

console.log(`Highest Price per Kg: ${highestPrice} UgX`);
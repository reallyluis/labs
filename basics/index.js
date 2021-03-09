let names = ["Hat", "Boots", "Gloves"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);

let sumPrices = (...numbers) => numbers.reduce((total, val) =>
  total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

// let totalPrice = sumPrices(...prices);
let totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Combined Array Element: ${element}`));

totalPrice = sumPrices(100, 200, 300);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);
myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

let firstCity;
let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`);
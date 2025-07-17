// userScore = 12.345;
// totalAmount = 78.9;
// discountRate = 0.123;

// const chckinterger = Number.isInteger(userScore);
// console.log(chckinterger);

// const userScore1 = 12.345;
// const format = userScore1.toFixed(2);
// console.log(format);

// const totalAmount1 = 78.9;
// const convert = totalAmount1.toString();
// console.log(convert);

// const pricetag = 45.67;
// const convert1 = parseFloat(pricetag);
// console.log(convert1);

// const fruitInventory = "Amount: 123 apples";
// const convert3 = parseInt(fruitInventory.replace("Amount:", ""));
// console.log(convert3);

// const mutiply = (userScore + discountRate).toFixed(3);
// console.log(mutiply);
// const subtract = (discountRate - totalAmount).toFixed(1);
// console.log(subtract);

//MATH METHODS
// math min
// math max
// math pow
// math round
// trunc
// math pi
// math floor
// math ceil
// math random

const numberarray = [1, 2, 3, 4, 5, 6, 7, 8];

// PI
const valueOfApi = Math.PI;
console.log(valueOfApi);

//trunce
const truncMethod = Math.trunc(Math.PI);
console.log(truncMethod);

//pow
const powMethod = Math.pow(2, 5);
const powMethod2 = Math.pow(5, 3);
console.log(powMethod);
console.log(powMethod2);

//min
const minmethod = Math.min(...numberarray);
console.log(Math.min(1, 2, 3, 4, 5, 8, 4));
console.log(minmethod);

//max
const maxMethod = Math.max(...numberarray);
console.log(Math.max(2, 3, 4, 6, 7, 89, 8, 9));
console.log(maxMethod);

//round

const mathround = Math.round(...numberarray);
console.log(mathround);

const mathround2 = Math.round(Math.PI);
console.log(Math.round(5.7302392));

const mathround4 = Math.round(4.24884933);
console.log(mathround4);

//ceil
const ceiltmethod = Math.ceil(Math.PI);
ceilmethod2 = Math.ceil(8.9283883822);
console.log(ceiltmethod);
console.log(ceilmethod2);

const ceilmm = Math.ceil(Math.PI);
const ceilmm1 = Math.ceil(6.1231);
const ceilmm3 = Math.ceil(2.003282);

console.log("this is for ceilmath-1", ceilmm);
console.log("this is for ceilmath-2", ceilmm1);
console.log("this is for ceilmath-3", ceilmm3);

// floor
const floorMethod = Math.floor(Math.PI);
const floorMethod1 = Math.floor(6.7231);
const floorMethod3 = Math.floor(2.603282);

console.log("this is for floor-1", floorMethod);
console.log("this is for floor-2", floorMethod1);
console.log("this is for floor-3", floorMethod3);

//random
const defaultrandom = Math.random();
const mathrandom = Math.random() * 10;
//chaining with random
const chaimathrandom = Math.floor(Math.random() * 10) + 1;
console.log("1", defaultrandom);
console.log("2", mathrandom);
console.log("3", chaimathrandom);

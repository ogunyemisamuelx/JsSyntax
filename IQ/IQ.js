// const arr = [9, 13, 25, 2, 3, 6];

// const findSecondSmallest = (arr) => {
//   if (arr.length < 1) {
//     throw new error("Array should have at least two elements");
//   }
//   let min1 = Infinity;
//   let min2 = Infinity;
//   for (let num of arr) {
//     if (num < min1) {
//       min2 = min1;
//       min1 = num;
//     } else if (num < min2 && num !== min1) {
//       min2 = num;
//     }
//   }
//   return min2;
// };

// const secondsmallNum = findSecondSmallest(arr);
// console.log(secondsmallNum);

// const no = [20, 34, 56, 78, 89];

// const findSmallestNumber = (no) => {
//   if (no.length < 2) {
//     throw new error("Array should have ar least two elements");
//   }
//   let min1 = Infinity;
//   let min2 = Infinity;
//   for (let num of no) {
//     if (num < min1) {
//       min2 = min1;
//       min1 = num;
//     } else if (num < min2 && num !== min1) {
//       min2 = num;
//     }
//   }
//   return min2;
// };

// console.log(findSmallestNumber(no));

// const justsmallNum = [6, 10, 7, 11, 8, 25];

// const secondSmal = (justsmallNum) => {
//   if (justsmallNum.length < 2) {
//     throw new error("add one more element");
//   }
//   let minimum1 = 6;
//   let minimum2 = 7;
//   for (let num of justsmallNum) {
//     if (num < minimum1) {
//       minimum2 = minimum1;
//       minimum1 = num;
//     } else if (num < minimum2 && num !== minimum1) {
//       minimum2 = num;
//     }
//   }
//   return minimum2;
// };

// console.log(secondSmal(justsmallNum));
// const a = secondSmal(justsmallNum);

// const b = a;
// const c = b;
// const d = c;
// const e = d;
// const f = e;
// console.log(f);

// const number2 = [20, 24, 35, 75, 69, 90, 83];

// const f = (x, y) => {
//   const z = x.some((el) => {
//     return el === y;
//   });
//   if (z === true) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(f(number2));

// const oo = "palindrome";
// const isPalindrome = (oo) => {
//   const y = oo.split("").reverse().join("");
//   if (oo === y) {
//     return `${oo} is a palindrome`;
//   } else {
//     return `${oo} is not a palidrome`;
//   }
// };

// console.log(isPalindrome("dark"));

// const addupTo = (n) => {
//   let total = 0;
//   for (let i = 1; 1 <= n; i++) {
//     total += i;
//   }
//   return total;
// };

// let t1 = performance.now();
// addupTo(1000000000);
// let t2 = performance.now();
// console.log(`time elasped: ${(t22 - t1) / 1000} seconds`);

// const flastnest = [[1, 2], [3, 4], [5]];

// const Flatt = (flastnest) => {
//   return flastnest.flat();
// };

// console.clear();
// console.log(Flatt(flastnest));

///Make Money Points//////
///Make Money Points//////
///Make Money Points//////
///Make Money Points//////
///Make Money Points//////
///Make Money Points//////
///Make Money Points//////
///Make Money Points//////
///Make Money Points//////
console.clear();
const arr = [10, 20, 30];
for (let item of arr) {
  item += 1;
}

console.log(arr);

const obj1 = { a: 1 };
Object.freeze(obj1);
obj1.a = 42;
console.log(obj1.a);

const obj = {
  a: 1,
  b: function () {
    return this.a;
  },
};

const func = obj.b;
console.log(func);

const a = [1, 2];
const b = [1, 2];

console.log(a === b); //false
console.log(JSON.stringify(a) === JSON.stringify(b)); //true

console.log(0.1 + 0.2 === 0.3); //false
console.log(Math.abs(0.1 + 0.2 === 0.3) < Number.EPSILON); //true

let T = null;
console.log(T ?? "default");
console.log(T);

const x = { Key: "value" };
// console.log(x)
Object.preventExtensions(x);
x.newKey = "newKey";
console.log(x.newKey);

const Obj2 = { a: () => console.log(this) };
Obj2.a();

const arr1 = [1, 2, 3];
const copy = [...arr1];
console.log(arr1 === copy);

const obj3 = {
  a: 1,
  b: 2,
  getSum() {
    return this.a + this.b;
  },
};

const getSum = obj3.getSum;
console.log(getSum());

const arr4 = [1, 2, 3];
arr4.length = 1;
console.log(arr4);

console.log(typeof typeof 1);

const obj5 = {
  a: 1,
  b: { c: 2 },
};

const shallowCopy = { ...obj5 };
shallowCopy.b.c = 42;
console.log(obj5.b.c);

const d = [1, 2, 3].reduce((acc, curr) => acc + curr, 0);
console.log(d);

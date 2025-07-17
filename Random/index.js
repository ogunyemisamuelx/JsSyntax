// console.clear();

// //This method at returns the character indivisually if the index is specified in the searchString
// // const a = "cool";
// // const a1 = () => {
// //   return a.at(0);
// // };
// // console.log(a1());

// //This method charAt returns the character at the specified index position
// // const b = "cool";
// // const b1 = () => {
// //   return b.charAt(0);
// // };
// // console.log(b1());

// //This method charCodeAt returns the unicode value of the character that is specified indivisually using the index position
// // const c = "cool";
// // const c1 = () => {
// //   return c.charCodeAt(0);
// // };
// // console.log(c1());

// // This method codepointAt returns the codepoint value of utf-16 if the object is converted to a string when the index position of the chracter is specified if not found returns undefined
// // const d = "cool";
// // const d1 = () => {
// //   return d.codePointAt();
// // };
// // console.log(d1());

// //This method concat returns two or more String that has been concatenated in String
// // const e = "cool ";
// // const ee = "Tshirt";
// // const e1 = () => {
// //   return e.concat(ee);
// // };
// // console.log(e1());

// //This method returns true if index of the character Endwith with the sepcified substring in the searchString is found in the string otherwise returns false
// // const f = "cool";
// // const f1 = () => {
// //   return f.endsWith("l");
// // };
// // console.log(f1());

// // This method includes returns true if the variable value indecludes what is in the searchString if not found returns false
// // const g = "cool";
// // const gt = "clso";
// // const g1 = () => {
// //   return g.includes(gt);
// // };
// // console.log(g1());

// // console.clear();
// // while (x) {

// // }

// // let i = 6;

// // while (i > 5 === 20) {
// //   console.log("While", i);
// //   i++;
// // }
// // console.log(i);

// // let ii = 3;
// // while (i) {
// //   console.log("", i);
// //   i--;
// // }

// // console.log(ii);

// // let i = 100;
// // do {
// //   console.log(i);
// //   i--;
// // } while (i > 1);

// // for (let i = 100; i > 0; i--) {
// //   console.log(i);
// // }

// // let i = 0;

// // for (; i < 3; ) {
// //   console.log(i++);
// // }

// // const dk = null;
// // console.log(dk ?? "anonymous");
// // let user = "Samuel";

// // console.log(user ?? "anonymous");
// // for (;;) {}

// // let sum = 0;

// // while (true) {
// //   let value = +console.log("Enter a number", "");

// //   if (!value) break; // (*)

// //   sum += value;
// // }
// // console.log("Sum: " + sum);

// // let sum = 12;

// // while (true) {
// //   let value = +console.log("Enter a number");
// //   if (!value) break;

// //   sum += value;
// // }
// // console.log("Sum:" + sum);

// // for (let i = 0; i < 20; i++) {
// //   if (i % 2 === 0) continue;
// //   console.log(i);
// // }

// // for (let i = 0; i < 10; i++) {
// //   if (i % 2) {
// //     console.log(i);
// //   }
// // }

// // outer: for (let i = 0; i < 3; i++) {
// //   for (let j = 0; j < 3; j++) {
// //     let input = console.log(`Value at coords ${i},${j} `, "");
// //     if (!input) break outer;
// //   }
// // }
// // console.log("Done!");

// // let i = 0;
// // while (i < 3) {
// //   console.log(`number${i}`);
// //   i++;
// // }

// // for (let i = 0; i < 3; i++) {
// //   console.log(`number${i}`)
// // }

// ///Task 1
// // let i = 3;
// // while (i) {
// //   console.log(i--);
// // }

// //Task 2

// // let i = 0;
// // while (++i < 5) console.log(i);

// // let i = 0;

// // while (i++ < 20) {
// //   console.log(i);
// // }

// // let i = 20;

// // while (i) {
// //   console.log(i--);
// // }

// //Task 5
// // for (i = 0; i < 10; i++) {
// //   if (i % 2) {
// //     console.log(i);
// //   }
// // }

// // for (let i = 0; i < 5; i++) {
// //   console.log(i);
// // }

// // for (let i = 0; i < 5; ++i) {
// //   console.log(i);
// // }

// // for (let i = 0; i < 3; i++) {
// //   console.log(`number ${i}!`);
// // }
// // let i = 0;

// // while (i < 3) {
// //   console.log(`number ${i}!`);
// //   i++;
// // }

// let sum = 200;

// while (true) {
//   if (sum < 100) {
//     let value = console.log(`Input again !!`, "");

//     if (!value) break; //(*)

//     sum += value;
//   } else {
//     let value = console.log(`Number Entered Successfully`, "");

//     if (!value) break; //(*)

//     sum += value;
//   }
// }
// console.log("Sum:", sum);

// // let i = 0

// // for (let i = 1; i < 10; i++) {
// //   if (i % 5 > 3) {
// //     console.log(i);
// //   }
// // }
// // let n = console.log("Tell me the number");
// // for (let i = 2; i <= 10; i++) {
// //   let count = 0;
// //   for (let j = 2; j <= i; j++) {
// //     if (i % j == 0) ++count;
// //     if (count > 1) break;
// //   }
// //   if (count == 1) console.log(i);
// // console.log(i);
// // }

// // for (let i = 2; i <= 10; i++) {
// //   let count = 0;
// //   for (let j = 2; j <= i; j++) {
// //     if (i % j == 0) ++count;
// //     if (count > 1) break;
// //   }
// //   if (count == 1) console.log(i);
// //   // console.log(i);
// // }
// // for (let i = 2; i <= 10; i++) {
// //   let count = 0;
// //   for (let j = 2; j <= i; j++) {
// //     if (i % j == 0) ++count;
// //     // if (count > 1) break;
// //   }
// //   if (count == 1) console.log(i);
// // }

// // [...Array(100 - 2)]
// //   .map((x, i) => i + 2)
// //   .filter((x, i, a) => !a.slice(0, Math.sqrt(i)).some((y) => x % y === 0));

// // const isPrime = (x) =>
// //   x > 1 &&
// //   ![...Array(Math.floor(Math.sqrt(x)) - 1)].some((z, y) => x % (y + 2) === 0);

// // console.log(isPrime());
// console.clear();

// // let x = "ni";
// // const y = () => {
// //   return x.split("").join("").replace("i", "u");
// // };

// // console.log(y());

// // let x = ["ab ", "c"];

// // const y = () => {
// //   return x.join("").replace("c", "_");
// // };

// // console.log(y());

// // const isOdd = (num) => {
// //   return num & 1;
// // };

// // const solution = (str) => {
// //   let arr = str.match(/.{1,2}/g);

// //   if (str.length == 0) {
// //     return [];
// //   } else if (isOdd(str.length) == 1) {
// //     let x = str + "_";
// //     return (arr = x.match(/.{1,2}/g));
// //   } else {
// //     return arr;
// //   }
// // };
// // console.log(isOdd());

// // let x,
// //   y,
// //   z = (x = 5);
// // y = 6;
// // z = x + y;
// // console.log(z);

// // let x = (5 + 7) * 11;
// // console.log(x);

// // const x = "ogunyemi" + "samuel";
// // console.log(x) ;

// // let _ = "f";
// // console.log(_);

// // let lastname, lastName;
// // lastName = "sam";
// // lastname = "me";
// // x = lastName + lastname;
// // console.log(x);

// // let x = 5;
// // let y = x + 2;
// // console.log(y);

// // x = 5;
// // y = 6;
// // z = x + y;
// // console.log(z);

// // const price1 = 5;
// // const price2 = 6;

// // let x = price1 + price2;
// // console.log(x);

// // let x =  x + y
// // console.log(x)
// // x = x + 5;
// // console.log(x);

// // let person = "samuel",
// //   carname = "ferrari",
// //   price = "1millliondollars$";

// // console.log(person, carname, price);

// // let x = 2 + 3 + "5";
// // console.log(x);

// // {
// //   // var x = 10
// //   let x = 10;
// //   console.log(x);
// // }
// // console.log(x);

// // carname = "volvo";
// // var carname;

// // const cars = ["Volvo", "ferrari", "GLE"];

// // cars.unshift("audi");
// // console.log(cars);

// // cars[0] = "new";

// // console.log(cars);

// // const cars = { me: "sam", car: "rolls royce", color: "red" };

// // cars.color = "green";
// // cars.me = "samuel";
// // cars.owner = "mr sam";
// // console.log(cars);

// // let a2 = 3;
// // let x = (100 + 50) * a2;
// // console.log(x);

// // let x = 10;
// // x += 5;
// // console.log(x);

// // const text1 = "A";
// // const text2 = "Y";
// // const x = text1 > text2;
// // console.log(x);
// // console.log("This is text1", text1.charCodeAt(0));
// // console.log("This is text2", text2.charCodeAt(0));

// //MemoryLocation Unicode value
// // let text1 = "10";
// // let text2 = "5";
// // let x = text1 < text2;
// // console.log("This is text1", text1.charCodeAt(0));
// // console.log("This is text2", text2.charCodeAt(0));
// // console.log(x);

// // const text1 = "Ogunyemi ";
// // const text2 = "samuel";
// // let x = text1 + "" + text2;
// // console.log(x);

// // let text1 = "What a very ";
// // text1 += "nice day";
// // console.log(text1);

// // let x = 5 + 5;
// // let y = "5" + 5;
// // let z = "Hello" + 5;
// // console.log(x, y, z);

// // let x = 5 & 1;
// // let x = 5 | 1;
// // let x = ~5;
// // let x = 5 ^ 1;
// // let x = 5 << 1;
// // let x = 5 >> 1;
// // let x = 5 >>> 1;
// // console.log(x);

// // let x = 5 ^ 1;
// // console.log(x);

// // const x = 4;
// // console.log(x.toFixed().charCodeAt(0));

// // let x = 8;
// // x++;
// // let y = x / 3;
// // console.log(y);

// // const a = 2;
// // let x = (100 + 50) * a;
// // console.log(x);

// // let x = "A";
// // let y = "b";

// // z = y > x;
// // console.log(z);

// // let x = 8;
// // x++;
// // let y = x / 3;
// // console.log(y);

// // let x = 5;
// // let y = 2;
// // let z = x - y;
// // console.log(z);

// // let x = 5;
// // let y = 2;
// // let z = x * y;
// // console.log(z);

// // let x = 9;
// // let y = 2;
// // let z = x % y;
// // console.log(z);

// // let x = 5;
// // let z = x ** 3;
// // console.log(z);

// // let g = 5 * 5 * 5 * 5;
// // console.log(g);

// // let x = 5;
// // let z = Math.pow(x, 3);
// // console.log(z);

// // let x = (100 + 50) * 3;
// // console.log(x);

// // let x = 100 + 50 - 3;
// // console.log(x);

// // let x = (100 / 50) * 3;
// // console.log(x);

// // let t = "A";
// // let D = "B";
// // let x = t > D;
// // console.log(t.charCodeAt(0));
// // console.log(D.charCodeAt(0));
// // console.log(x);

// // let test1 = "30";
// // let test2 = "2";
// // let x = test1 > test2;
// // console.log(test1.charCodeAt(0));
// // console.log(test2.charCodeAt(0));
// // console.log(x);

// // let x = 10;
// // x **= 2;
// // console.log(x);

// // let y = 10 * 1000;
// // console.log(y);

// // let x = 10;
// // x %= 5;
// // console.log(x);

// // {
// //   let x = 10;
// //   x /= 5;
// //   console.log(x);
// // }

// // let x = -100;
// // x <<<= 5;
// // console.log(x);

// // let x = -100;
// // x >>= 5;
// // console.log(x);

// // const isOdd = (num) => {
// //   return num & 1;
// // };

// // const solution = (str) => {
// //   let arr = str.match(/.{1,2}/g);

// //   if (str.length == 0) {
// //     return [];
// //   } else if (isOdd(str.length) == 1) {
// //     let x = str + "_";
// //     return (arr = x.match(/.{1,2}/g));
// //   } else {
// //     return arr;
// //   }
// // };
// // console.log(solution());

// // let str = "me";
// // let arr = str.match(/.{1,2}/g);
// // console.log(arr);

// // let x = 4;
// // x += 3;
// // x *= 4;
// // x++;
// // console.log(x);

// // for (let i = 1; i <= 100; i++) {
// //   if (i % 2) {
// //     console.log("Fizz");
// //   } else if (i % 3) {
// //     console.log("Buzz");
// //   } else {
// //     console.log(i);
// //   }
// // }
// // i[0]++;
// // i[1]++;
// // i[2]++;
// // console.log(i);

// // let i = [
// //   {
// //     myDetails: [20, 30, 40],
// //   },
// //   {
// //     hisOwn: {
// //       id: [50, 60, 70],
// //     },
// //   },
// // ];

// // const addUpNumber$1 = i.filter((el) => {
// //   return el.myDetails;
// // });

// // console.log(addUpNumber$1);
// // for (let item of i) {
// //   item += i + 1;
// // }
// // console.log(i);

// // const GG = Math.floor(Math.random() * 10000) + 10;
// // console.log(GG);

// // let x = Students.map((el) => {
// //   let get = el;

// //   return get;
// // });

// // let h = Math.floor(Math.random() * Students.length);

// // console.log(h);

// // const people = [
// //   { name: "Alice", hobbies: ["Reading", "Swimming", "Hiking"] },
// //   { name: "Bob", hobbies: ["Cycling", "Movies", "Gaming"] },
// //   { name: "Alice", hobbies: ["Writing", "Chess", "Dancing"] },
// // ];

// // const random1 = () => {
// //   let f = people[Math.floor(Math.random() * f.length)];
// //   return {
// //     name: f.name,
// //     hobby: f.hobbies[Math.floor(Math.random() * f.hobbies.length)],
// //   };
// // };

// // console.log(random1());

// // const people = [
// //   { name: "Alice", hobbies: ["Reading", "Swimming", "Hiking"] },
// //   { name: "Bob", hobbies: ["Cycling", "Movies", "Gaming"] },
// //   { name: "Charlie", hobbies: ["Writing", "Chess", "Dancing"] },
// // ];

// // const getRandomPersonAndHobby = () => {
// //   const person = people[Math.floor(Math.random() * people.length)];
// //   return {
// //     name: person.name,
// //     hobby: person.hobbies[Math.floor(Math.random() * person.hobbies.length)],
// //   };
// // };
// // console.log(getRandomPersonAndHobby());

// // console.log(getRandomPersonAndHobby());
// // const r = random1();
// // console.log(r);

// // const Students = [
// //   {
// //     name: "samuel",
// //     Hubby: "Swimming",
// //   },
// //   {
// //     name: "elry",
// //     Hubby: "Skating",
// //   },
// // ];

// // const x = () => {
// //   let g = Students[Math.floor(Math.random() * Students.length)];
// //   return {
// //     name: g.name,
// //     Hubby: g.Hubby,
// //   };
// // };

// // console.log(x());

// // let word = "this is the day the lord has made";

// // let con = () => {
// //   let str = word.split(" ");
// //   return str[0][0].toUpperCase().concat(str[0].slice(1));
// // return wrd[0][0].touppercase().concat(wrd[0].slice(1));
// // };

// // console.log(con());

// // let Array1 = [1, 2, 2, 2];
// // let Array2 = [2];

// // const ArrayDiff = (Array1, Array2) => {
// //   return Array1.filter((el) => {
// //     return !Array2.includes(el);
// //   });
// // };
// // console.log(ArrayDiff(Array1, Array2));

// // const flastnest = [[1, 2], [3, 4], [5]];

// // const Flatt = (flastnest) => {
// //   return flastnest.flat();
// // };

// // console.clear();
// // console.log(Flatt(flastnest));

// // let list = [
// //   [1, 2, 3, 4],
// //   [5, 6, 7, 8],
// // ];

// // const FlatArray = (list) => {
// //   return list.flat();
// // };

// // console.log(FlatArray(list));

// /*Return A new string value consist of the 16 code utf-8 located at the specified index */
// {
//   let x = "Nice";
//   console.log(
//     "THis is at sring method it returns the the string value that consist of the utf-16 code >>>>:",
//     x.at(0)
//   );
// }
// /* (at) String Method */

// console.log("");
// console.log("");
// console.log("");

// {
//   let x = "nice";
//   console.log(
//     "CharAt Returns the Character of the specified Index >>>>:",
//     x.charAt(1).toUpperCase()
//   );
// }

// console.log("");
// console.log("");
// console.log("");
// console.log("");

// {
//   let x = "niceOneNigga";
//   console.log(
//     "This is CharCodeAt This method returns the unicode Value of the Specified character index in the search String >>>>:",
//     x.charCodeAt(0)
//   );
// }
// console.log("");
// console.log("");
// console.log("");
// console.log("");

// // {
// //   let x = "onlYFriend KK";

// //   const K = () => {
// //     let y = x.split(" ");

// //     return y[0][0].toUpperCase().concat(y[0].slice(1));
// //   };
// //   console.log(K());
// // }

// {
//   let x = "niceOne";
//   console.log(
//     "This method codepointAt Returns the code point value of the 16 utf-8 code starting at the string element if not found returns undefined >>>>:",
//     x.codePointAt(0)
//   );
// }
// console.log("");
// console.log("");
// console.log("");
// console.log("");

// {
//   let x = "GreatOne";
//   let y = "Friend";
//   console.log(
//     "This method concat joins two or more string into one String >>>>:",
//     x.concat(" ").concat(y)
//   );
// }
// console.log("");
// console.log("");
// console.log("");
// console.log("");

// {
//   let x = "Friend";
//   console.log(
//     "This method endsWith returns true if the speciified character in the search is corresponding with the variable value otherwise returns false",
//     x.endsWith("d")
//   );
// }

// console.log("");
// console.log("");
// console.log("");
// console.log("");

// {
//   let x = "kids";
//   console.log(
//     "This method includes returns true if the element in the matches with searchstring substring of the object been converted to a string if not found otherwise returns false >>>>:",
//     x.includes("k")
//   );
// }

// console.log("");
// console.log("");
// console.log("");
// console.log("");

// {
//   let x = "This";
//   console.log("This Method indexof", x.indexOf("i").toString().toUpperCase());
// }
// console.log("");
// console.log("");
// console.log("");
// console.log("");
// console.log("");

// // {
// //   let x = ["$", "+", "%"];
// //   let xx = "Sa$mu+e%l";

// //   const Holder = () => {
// //     let y = xx.split("");
// //     return y
// //       .filter((el) => {
// //         return !x.includes(el);
// //       })
// //       .join("");
// //   };
// //   console.log(Holder());
// // }

// {
//   let x = "Hero";
//   console.log(
//     "This method lastIndexOf returns true if the specified Character exist in the variable value that is been passed in the searchstring as sub string if not found otherwise returns false >>>>:",
//     x.lastIndexOf("o")
//   );
// }

// console.log("");
// console.log("");
// console.log("");
// console.log("");

// {
//   let x = "Trying";
//   console.log(
//     "This method Length Returns the full character Length position",
//     x.length
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// /* How to use localComapare String method
// // {
// //   let x = "GetThere";
// //   let y = "fm";
// //   console.log(x.localeCompare(x, y));
// // }
// */

// {
//   let x = "WonderFUl";
//   console.log(
//     "This is Method match return a array of the character that is been matched in the SearchString >>>>:",
//     x.match(/[W, o,n,d,e,r]/g)
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "MyFriends";
//   console.log(
//     "This method MatchALl it kindof similiar to match but it works differently by returning the array containing the regular expression string and interator of the string passed in the SearchString >>>>:",
//     x.matchAll(/[M,F]/g)
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// /* How to use normalize String Method
// // {
// //   let x = "Boss";
// //   console.log(x.normalize("NFC"));
// // }
// */

// /* How to use padEnd
// // {
// //   let x = "Green";
// //   console.log(x.padEnd(5, "Green"));
// // }
// */

// /* How to use padStart
// // {
// //   let x = "Green";
// //   console.log(x.padEnd(5, "Green"));
// // }
// */

// {
//   let x = "This";

//   console.log(
//     "This method repeat repeats the string value base on the the index specified in the searchString >>>>: ",
//     x.replace("s", "s ").repeat(8)
//   );
// }

// console.log("");
// console.log("");
// console.log("");
// console.log("");

// {
//   let x = "Passion";
//   console.log(
//     "This method replace replaces the the string character specified in the searchString as substring >>>>:",
//     x.replace("n", "ns")
//   );
// }
// console.log();
// console.log();
// console.log();
// console.log();

// /* how to use ReplaceAll
// // {
// //   let x = "Darling"
// //   console.log(x)
// // }
// */

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "Today";
//   console.log(
//     "This method Search permit search in the objects and returns the index position of the the string in the searchString >>>>:",
//     x.search("d")
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "ButterFly";
//   console.log(
//     "This method slice slices the character portion from the start to the end when the index position is specified >>>>: ",
//     x.slice(0, 2)
//   );
// }

// {
//   let x = "Light";
//   console.log(
//     "This method string Converts a String to an array and returns it in an array of string >>>>:",
//     x.split(" ")
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "Box";
//   console.log(
//     "This method startWith returns true if the specified chracter in searchString contains what in the string if not found returns false >>>>:",
//     x.startsWith("B")
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "trial";
//   console.log(
//     "This method substring returns the character when the the element index postion is targeted and and the end count character index postion as been specified >>>>:",
//     x.substring(0, 5)
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "BeastInCoding";
//   console.log(
//     "This method tolocaleLowerCase Converts all alphabet in a string to a lowerCase >>>>:",
//     x.toLocaleLowerCase()
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "BeastInCoding";
//   console.log(
//     "This method tolocaleUpperCase Converts all alphabet in a string to a UpperCase >>>",
//     x.toLocaleUpperCase()
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "Time";
//   console.log(
//     "This method toLowerCase Converts all Alphabetic chracters in a string to a lowerCase >>>>:",
//     x.toLowerCase()
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "Time";
//   console.log(
//     "This method toUpperCase Converts all Alphabetic chracters in a string to a toUpperCase >>>>:",
//     x.toUpperCase()
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "Html";
//   console.log(
//     "This method Tostring returns a string representation of a string >>>>:",
//     x.toString("")
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = " Trace ";
//   console.log(
//     "This method trim removes the white spaces from start to end in a string >>>>:",
//     x.trim()
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// {
//   let x = " Trace ";
//   console.log(
//     "This method trimStart removes the white spaces from start in a string >>>>:",
//     x.trimStart()
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = " Trace ";
//   console.log(
//     "This method trimEnd removes the white spaces from end in a string >>>>:",
//     x.trimEnd()
//   );
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = "KnowWhoYouare";
//   console.log(
//     "This method valueOf returns the value of the variable base on the dataType >>>>:",
//     x.valueOf()
//   );
// }

// console.clear();

// // let objct1 = { a: 5 };
// // Object.freeze(objct1);
// // objct1.a = 25;
// // console.log(objct1);

// // const arr = [10, 20, 30];
// // for (let item of arr) {
// //   item += 1;
// //   console.log(item);
// // }

// // let b = [1, 2];
// // b = [1, 2];
// // console.log(b === b);

// // {
// //   let a = [1, 2];
// //   let b = [1, 2];
// //   console.log(JSON.stringify(a) === JSON.stringify(b));
// // }

// // let Obj = { a: 1 };
// // Object.freeze(Obj);
// // Obj.a = 45;
// // console.log(Obj);
// // {
// //   let x = null;
// //   console.log(x ?? "Anonymous");
// // }

// // {
// //   let x = { key: "value" };
// //   Object.preventExtensions(x);
// //   x.newkey = "NewValue";
// //   console.log(x.newkey);
// // }

// // const x = { Key: "value" };
// // // console.log(x)
// // Object.preventExtensions(x);
// // x.Key = "newKey";
// // console.log(x.Key);

// //OS >>>> Js iQ/QuiZ
// // {
// //   let x = [];
// //   y = x.push("How", "are");
// //   z = x.unshift("Not", "Welcome");
// //   t = x.push("you", "Doing!", "Today ", "Not");
// //   x[6] += "Friend";
// //   a = x.pop("");
// //   r = x.shift("");
// //   console.log(x);
// // }
// //Comment and Like//

// // console.clear();

// // let x = "Thank U Ma";
// // console.log(x.repeat(100));

// console.clear();

// // let x;
// // x ??= 5;
// // console.log(x);

// // let x = 5;
// // x ||= 10;
// // console.log(x);

// // let x = 16 + "volvo";
// // console.log(x);

// // let x = "volvo" + 16;
// // console.log(x);

// // let x = 123e5;
// // let z = 123e-5;
// // console.log(x);
// // console.log(z);

// // let x = BigInt(12345678901234567890123456789);
// // console.log(x);

// // let x = 5;
// // let y = 5;
// // let r = 6;
// // let cal = x == y;
// // // x == r;
// // console.log(cal);

// // let x = "s";
// // g = typeof x;
// // console.log(g);

// // {
// //   let x = 2;
// //   let z = 3;
// //   const multi = (x, z) => {
// //     return x + z;
// //   };
// //   console.log(multi(x, z));
// // }

// // let x = 2;
// // let y = 3;

// // let x = 2;
// // let u = 3;

// // const myfunc = (x, u) => {
// //   return x * u;
// // };

// // console.log(myfunc(x, u));

// // const tocelsius = (fahrenheit) => {
// //   return (5 / 9) * (fahrenheit - 32);
// // };

// // let value = tocelsius(77);
// // console.log(value);

// // let x = 9 / 5;
// // console.log(x);

// // let value = ferit(77);
// // console.log(value);

// // let xx = ["i", "e", "o", "O"];
// // let x = "This website is for losers LOL!";

// // const removeVowels = () => {
// //   let xr = x.split("");
// //   return xr
// //     .filter((el) => {
// //       return !xx.includes(el);
// //     })
// //     .join("");
// // };

// // console.log(removeVowels());

// // const removeVowels = () => {

// // }

// // let firstn = [14, 30, 5, 7, 9, 11, 15];

// // firstn += 1;
// // console.log(firstn);

// // let x = { name: "Samuel", phone: "samsung" };

// // x.phone = "new";
// // console.log(x);

// // let person = {
// //   name: "samuel",
// //   class: "sss1",
// //   school: "victory",
// //   age: 10,
// // };

// // let person = {
// //   name: "hhd",
// //   class: "233",
// // };

// // // let x = "nm";
// // // let y = "kk";
// // let u = person["class"];
// // console.log(u);
// // const x = person;

// // x.age = 9;

// // person.age = 12;
// // person.newone = "nice";
// // console.log(person);
// // console.log(x);

// //OS >>>> JS IQ/Quiz
// // {
// //   let x = ["$", "#", "%", "*", "&"];
// //   let xx = "To%d$ay Wi#*l#l b%e gr#e&*at";

// //   const y = () => {
// //     let z = xx.split("");
// //     return z
// //       .filter((el) => {
// //         return !x.includes(el);
// //       })
// //       .join("");
// //   };
// //   console.log(y());
// // }
// //Like and Comment

// // console.clear();

// // const person = {
// //   name: "KK",
// // class: "11",
// //   nn: function () {
// //     return this.class + this.name;
// //   },
// //   tool: {
// //     hammer: "tierhammer",
// //     tape: "white",
// //   },
// // };

// // person.tool["hhaa"] = "aa";
// // delete person.class;
// // delete person["name"];
// // let test = person.nn();
// // console.log(test);

// // let x = {
// //   name: "gg",
// //   me: "hhh",
// // dk: function () {
// //   return this.me + this.name;
// // },
// // };

// // function person(name, last) {
// //   this.firstname = name;
// //   this.lastname = last;
// //   // this.nationality = nation;
// // }
// // let myfather = new person("smm", "me", "nG");
// // let myfrend = new person("sarah", "dkk", "NG");
// // person.prototype.nationality = "English";
// // console.log(myfather);
// // person.prototype.nationality = "friend";
// // let h = q.nationality;
// // console.log(h, j);

// // console.log(x);
// // let y = JSON.stringify(x);
// // console.log(y);

// // const tk = Object.values(x);
// // // let f = x.dk();

// // console.log(tk);

// // function person(name, surname, Class) {
// //   (this.FirstName = name), (this.LastName = surname);
// //   this.ClassPosition = Class;
// //   this.combine = function add() {
// //     return this.FirstName + this.LastName;
// //   };
// // }
// // let MyFirstName = new person("Samuel", "Ogunyemi", "SS3");

// // MyFirstName.ChangeName = function (Changename) {
// //   return (this.FirstName = Changename);
// // };
// // MyFirstName.ChangeName("KK");
// // console.log(MyFirstName.FirstName);

// // let y = MyFirstName.combine();

// // console.log(y);

// // MyFirstName.chamgename = function (name) {
// //   this.newName = name;
// // }

// //Object literal|
// {
//   let car = { carName: "porsch", model: 340, color: "white" };

//   console.log(car);
// } //|
// //
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// // add a new property name and value to the object name using dot notation
// {
//   const x = {};
//   x.FirstName = "samuel";
//   x.LastName = "Ogunyemi";
//   console.log(x);
// }

// //
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// //Adding a new property to the object using new Object() to add the properties name and = value
// {
//   const person = new Object();

//   person.Name = "samuel";
//   person.Class = "ss3";
//   person.Surname = "Ogunyemi";
//   console.log(person);
// }

// //
// console.log();
// console.log();
// console.log();
// console.log();

// //using method which is a functiond efinition stored as property value
// {
//   let x = {
//     firstName: "Samuel",
//     lastname: "Ogunyemi",
//     addTwoName: function () {
//       return this.lastname + " " + this.firstName;
//     },
//   };
//   console.log(x.addTwoName());
// }
// //
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// //javascript properties can be written using primitive values,function and other objects
// {
//   //Primitive values are immutable
//   // u can change value element but not the variable value
//   // const x = 23;
//   // x = 98;
//   // console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();

// //Javascript Object are mutable because it allows refrence to change the variable value using another variable name
// {
//   let person = {
//     LastName: "Ogunyemi",
//     FirstName: "samuel",
//     age: 12,
//   };
//   // let x = person;
//   // x.FirstName = "Joe";
//   let x = person;
//   x.age = 5;
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// //Objects are unordered list in javascript they can be deleted added and changed some are read Only
// {
//   let person = {
//     firstName: "Samuel",
//     LastName: "Ogunyemi",
//     age: 12,
//   };
//   //using objectname. to access propertyname value
//   let age = person.age;
//   let FirstName = person.firstName;
//   console.log(FirstName);
//   console.log(age);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// //

// {
// }

// // let x = 3

// // if ( 2 < 3) {
// //   console.log("Finished")
// // }else if ( 2 > 3) {
// //   console.log(console.log(""))
// // }

// // const bin2dec = (bin) => {
// //   return parseInt(bin, 2).toString(10);
// // };
// // console.log(bin2dec());

// // //OS >>>> Js IQ/Quiz
// // {
// //   function tocelsius(fahrenheit) {
// //     return (5 / 9) * (fahrenheit - 32);
// //   }

// //   let value = tocelsius(77);
// //   console.log(value);
// // }
// // //Comment and Like

// {
//   //you can access the objectname.propety with a new varibale name
//   let x = {
//     firstName: "samuel",
//     lastName: "kkk",
//   };

//   let lastname = x.lastName;
//   console.log(lastname);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// //
// {
//   //you can access the objectproperty with objectname array["value"]
//   let x = {
//     firstName: "Ogunyemi Hy",
//     Lastname: "Samuel",
//   };
//   let fN = x["firstName"] + " " + x["Lastname"];
//   console.log(fN);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //

// {
//   //you can access the objectName to the propertyName value using regular expression
//   // regularExpression
//   let person = {
//     firstName: "sammy",
//     lastName: "lee",
//   };
//   let y = "firstName";
//   let x = "lastName";
//   let firstn = person[y] + " " + person[x];
//   console.log(firstn);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// //
// {
//   let person = {
//     firstName: "Samuel",
//     LastName: "Ogunyemi",
//   };

//   person.new = "English";
//   delete person["firstName"];
//   console.log(person);
// }

// console.log();
// console.log();
// console.log();
// console.log();

// //

// {
//   let person = {
//     firstName: "Samuel",
//     lastName: "Ogunyemi",
//     new: {
//       car1: "Gle",
//       car2: "Toyota",
//     },
//   };
//   // person.new.car1;
//   let g = person.new;
//   console.log(g);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //

// {
//   let person = {
//     Firstname: "Samuel",
//     LastName: "Ogunyemi",
//     new: {
//       car1: "Ferrari",
//       car2: "Lambogini",
//     },
//   };
//   let f = "car1";
//   let u = person.new[f];
//   console.log(u);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //

// {
//   let person = {
//     firstName: "Samuel",
//     LastName: "Ogunyemi",
//     new: {
//       car1: "Lexus",
//       car2: "Porsch",
//     },
//   };
//   let g = "new";
//   let y = "car1";
//   let u = person[g][y];
//   console.log(u);
//   // let x = person["new"];
//   // console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //

// {
//   //accessing a method in a object using regular expression
//   let person = {
//     Name: "Samuel",
//     lastName: "Ogunyemi",
//     jk: function () {
//       return this.Name + this.lastName;
//     },
//   };
//   let x = person.jk();
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //

// {
//   //adding a method to the object as a new property value using regular expression
//   let person = {
//     firstName: "Samuel",
//     LastName: "Ogunyemi",
//   };

//   person.newMethod = function () {
//     return this.firstName + this.LastName.toUpperCase();
//   };
//   let y = person.newMethod();
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// //

// {
//   let person = {
//     name: "Samuel",
//     city: "lagos",
//     department: "science",
//   };
//   let x = person.name + "," + person.city + "," + person.department;
//   console.log("regular eXp", x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //

// {
//   //you can access the objectname property value using the loop method
//   let person = {
//     name: "Sammy",
//     city: "Abia",
//     class: "ss1",
//   };
//   let text = "";
//   for (let x in person) {
//     text += person[x] + " ";
//   }
//   console.log("Loop Method:", text);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //
// {
//   //using the object.value to display the property value in array of strings
//   let person = {
//     name: "Samuel",
//     city: "Owerri",
//     game: "Codm",
//   };
//   const objVlau = Object.values(person);
//   console.log("Object.values:", objVlau);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// //

// {
//   //using object.entries to access the objectname which is person and creating a new element to represent the propertyName and value for it to display in string
//   let person = {
//     name: "Sammy",
//     city: "Lagos",
//     class: "SS3",
//   };

//   let text = "";

//   for (let [perso, value] of Object.entries(person)) {
//     text += perso + ":" + value + " ";
//   }
//   console.log(text);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //you can convert a propertyName and the value to a string using json.stringify then the objectname
//   let person = {
//     name: "Samuel",
//     City: "Abj",
//     studied: "Science",
//     me: function () {
//       return this.name + " " + "Lives in " + this.City;
//     },
//   };

//   let x = JSON.stringify(person.me());

//   // let x = JSON.stringify(person);
//   console.log(x);
// }
// //

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //
// {
//   //using the objectname.newproperty name to create propertyname and value in the objectName
//   function person(firstName, lastName, city, Class) {
//     (this.FirstName = firstName),
//       (this.LastName = lastName),
//       (this.City = city),
//       (this.Cllas = Class);
//   }
//   let x = new person("Samuel", "Ogunyemi", "Lagos", "SS3");
//   // person.prototype.new = "eng";
//   // x.new;
//   x.new = "jjk";
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //
// {
//   //using method function to add the two property value
//   function person(firstName, lastName, City) {
//     this.FirstName = firstName;
//     this.LastName = lastName;
//     this.CTTT = City;
//     this.NewOne = function () {
//       return this.FirstName + this.LastName;
//     };
//   }
//   let x = new person("Samuel", "Ogunyemi", "Lagos");
//   let y = x.NewOne();
//   console.log(y);
//   // console.log(person());
// }
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// //
// {
//   function person(fn, ln, ct) {
//     (this.FirstN = fn), (this.LastN = ln), (this.cTY = ct);
//   }
//   let x = new person("Me", "me", "lagos");
//   x.new = function () {
//     return this.FirstN;
//   };
//   let h = x.new();
//   console.log(x);
//   console.log(h);
// }
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// //OS js >>>> IQ/Quiz
// {
//   let person = {
//     FirstName: "ogunyemi",
//     Lastname: "samuel",
//     city: "san Francisco",
//   };
//   let x = "";
//   for (let [perso, value] of Object.entries(person)) {
//     x +=
//       perso +
//       ":" +
//       value.charAt(0).toUpperCase().concat(value.slice(1).replace("y", "m")) +
//       " ";
//   }
//   console.log(x);
// }
// //Comment and like

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// // {
// //   let x = 5;
// //   let y = "5";
// //   console.log(x === y);
// //   console.log(x == y);
// // }
// // you can create a new object inside the objectname using the method func definition///

// //OS Js >>>> IQ/Quiz
// {
//   function personDetails(frst, lst, cty) {
//     (this.firstname = frst), (this.lastname = lst), (this.Cty = cty);
//   }
//   let x = new personDetails("Ogunyemi", "samuel", "Lagos");
//   x.nes = function (frst) {
//     this.firstname = frst;
//   };
//   let y = new x.nes("Davis");
//   console.log(y);

//   // (A) {firstname:Ogunyemi,lastname:samuel,Cty:Lagos}

//   // (B) {firstname:Davis}

//   // (C) reference Error

//   // (D) All
// }
// //Comment and like

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// // //OS Js >>>> IQ/Quiz
// // {
// //   outer: for (let i = 0; i < 3; i++) {
// //     for (let j = 0; j < 3; j++) {
// //       let input = console.log(`Value at coords ${i},${j} `, "");
// //       if (!input) break outer;
// //     }
// //   }
// //   console.log("Done!");

// //   //(A) Value at cords 0,0
// //  //(B) Error
// //  //(C) Value at cords 0,0 Done!
// //  //(D) Done!
// // }
// // //Comment and Like and Follow For More

// {
//   for (let i = 2; i <= 10; i++) {
//     let count = 0;
//     for (let j = 2; j <= i; j++) {
//       if (i % j == 0) ++count;
//       if (count > 1) break;
//     }
//     if (count == 1) console.log(i);
//     // console.log(i);
//   }
// }

// {
//   for (let i = 2; i <= 10; i++) {
//     for (let j = 2; j <= i; j++) {
//       // console.log()
//     }
//     break;
//     console.log("This is I:", i);
//   }
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method push add new element to the endin of an array
//   const x = ["A", "B", "C"];
//   let y = x.push("D");
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// {
//   //this element pop removes the last element in an array
//   const x = ["A", "B", "C"];
//   let y = x.pop("");
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// {
//   //This method shift removes the first element in the begining of an array
//   let x = ["A", "B", "C"];
//   let y = x.shift("");
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method unshift adds a element in the begining of an array
//   let x = ["A", "B", "C"];
//   let y = x.unshift("a");
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method reverse reverses the order elemnt in the array
//   let x = ["A", "B", "C"];
//   let y = x.reverse();
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// {
//   //This method slice slices the element in the array from the start index to the end index
//   let x = ["A", "B", "C"];
//   let y = x.slice(0, 1);
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let u = ["D"];
//   let x = ["A", "B", "C"];
//   let y = x.concat(u);
//   console.log(y);
// }
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// {
//   let x = ["A", "B", "C"];
//   let y = x.join("").split("");
//   console.log(y);
// }
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method Sort sorts the array in ascending order from the smallest number to the biggest
//   let x = [11, 2, 22, 1];
//   let y = x.sort((a, b) => {
//     return a - b;
//   });
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method Splice splice the array element from the start delete and add
//   let x = [1, 2, 3, 4];
//   let y = x.splice(4, 0, 5);
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method indexof returns the first character index position of the specified character element in the searchString
//   let x = ["A", "B", "C", "A"];
//   let y = x.indexOf("A");
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method lastIndexOF returns the index position of the last character element specified in the searchString
//   let x = ["A", "B", "C", "D", "A"];
//   let y = x.lastIndexOf("D");
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method Fill fills the array with the specified interger starting with the value start position from the right and end position
//   let x = [1, 2, 3, 4, 5];
//   let y = x.fill(10, 2, 5);
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = [10, 5, 8, 20, 45];
//   let y = x.copyWithin(3, 4, 5);
//   console.log(x);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   // const priceGenerator = (amount) => {
//   //   const finalPrice = amount.toLocaleString();
//   //   const duration = setInterval(() => {
//   //     console.log(`₦${finalPrice} is your charges`);
//   //   }, 5000);
//   //   return { duration };
//   // };
//   // console.log("Price Generator:......", priceGenerator(1000000));
// }

// //OS Js >>>> IQ/Quiz
// {
//   for (let i = 2; i <= 10; i++) {
//     let count = 0;
//     for (let j = 2; j <= i; j++) {
//       if (i % j == 0) ++count;
//       if (count > 1) break;
//     }
//     if (count == 1) console.log(i);
//   }

//   //(A) Error
//   //(B) 2 3 4 5 6 7 8 9 10
//   //(C) 2 3 5 7
//   //(D) 1 2 3 4 5 6 7 8 9 10
// }
// //Comment and Like and Follow

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// //HighOrder Method
// {
//   //This method map creates a new array by applying a callback func for each of the element in the original array
//   let x = ["A", "B", "C"];
//   const maPPing = x.map((el) => {
//     return el;
//   });
//   console.log(maPPing);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method Filter create a new array for each of the element that passes the test
//   let x = ["A", "B", "C"];
//   const Filtring = x.filter((el) => {
//     return el;
//   });
//   console.log(Filtring);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// //OS Js >>>> IQ/Quiz
// // {
// //   function person(name, surname, department) {
// //     (this.xn = name), (this.xy = surname);
// //     this.ClassPosition = department;
// //     this.combine = function add() {
// //       return this.xn + this.xy;
// //     };
// //   }
// //   let MyFirstName = new person("Larry", "Page", "Science");
// //   let MyLastName = new person("Benard", "Felix", "Art");

// //   MyFirstName.ChangeName = function (Changename) {
// //     return (this.FirstName = Changename);
// //   };

// //   MyLastName.ChangeName = function (Changename) {
// //     return (this.LastName = Changename);
// //   };

// //   let u = MyLastName.ChangeName("Bidden");

// //   MyFirstName.ChangeName("Joe");
// //   console.log(MyFirstName.FirstName, MyLastName.LastName);

// //   //(A)  Larry Page
// //   //(B) Joe Bidden
// //   //(C) Error
// //   //(D) Benard Felix
// // }
// //Comment and Like and follow for more
// console.clear();
// {
//   //This method map creates a nw array for each of the element from the original array
//   let x = [1, 2, 3];
//   const y = x.map((el) => {
//     return el + 1;
//   });
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method filter creates a new array for the element that passes the test implemented in the callBack Func
//   let x = ["A", "B", "C", "D"];
//   let y = x.filter((el) => {
//     return el === "C";
//   });
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method findIndex returns the index postion of the element in the array when the value is implemented in the callback
//   let x = ["D", "D", "A", "S"];
//   const y = x.findIndex((el) => {
//     return el === "S";
//   });
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //How to use foreach
//   let x = ["A", "B", "C"];
//   const y = x.forEach((el) => {
//     return el;
//   });
//   console.log("How to use foreach", y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();
// {
//   //This method includes check if the element in the arrays contains what in the search string
//   let x = [1, 2, 3, 4];
//   let y = x.includes(2);
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method indexOf returns the index position of the array when when it specified int the searchString
//   let x = ["A", "B", "C"];
//   let y = x.indexOf("C");
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //this method FindIndex returns the index position of the elememt when it specified in callback Func
//   let x = ["A", "B", "C"];
//   let y = x.findIndex((el) => {
//     return el == "C";
//   });
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method Find Returns the character in the array when speciifed with the character in te callback func if not found returns undefined
//   let x = ["A", "B", "C"];
//   let y = x.find((el) => {
//     return el == "B";
//   });
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method lastIndexOf returns the index position of the last occurence in an array when sepcified in the SearchString if not found returns -1
//   let x = ["A", "B", "C"];
//   let y = x.lastIndexOf("C");
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //This method reduce reduces the array to single value by applying the callback function against the accumulator it add the element in the array from left to right and returns the total sum
//   let x = [1, 2, 3];
//   let y = x.reduce((a, b) => {
//     return a + b;
//   });
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   //How to use reduce Right
//   let x = ["A", "B", "C"];
//   let y = x.reduceRight((el) => {
//     return el === "C";
//   });
//   console.log("How to use reduce right:", y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = ["A", "B", "C"];
//   let y = x.every((el) => {
//     return el;
//   });
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();

// {
//   let x = ["A", "B", "C"];
//   let y = x.some((el) => {
//     return el === "A";
//   });
//   console.log(y);
// }
// console.clear();
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   // let setCounter = () => {
//   //   let count = 10;
//   //   const timer = setInterval(() => {
//   //     console.log(count);
//   //     if (count === 0) {
//   //       console.log("Time up!");
//   //       clearInterval(timer);
//   //       const clearing = setInterval(() => {
//   //         clearInterval(clearing);
//   //         console.clear();
//   //       }, 5000);
//   //     }
//   //     count--;
//   //   }, 1000);
//   // };
//   // setCounter();
// }
// console.clear();

// {
//   // const x = [","];
//   // const func = (money) => {
//   //   const x = setInterval(() => {
//   //     console.log(money.toString());
//   //     clearInterval(x);
//   //   }, 1000);
//   // };
//   // func(10000);
//   // console.log(func(10000));
// }

// //
// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   // let x = 'This is Nice "is it not" yeah';
//   // console.log(x);
//   // let y = "HH";
//   // let x = new String("HH");
//   // console.log(y === x);
//   // let x = new String("John");
//   // let y = new String("John");
//   // console.log(JSON.stringify(x) === JSON.stringify(y));
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// // {
// //   let setCounter = () => {
// //     let count = 10;
// //     const timer = setInterval(() => {
// //       console.log(count);
// //       if (count === 0) {
// //         console.log("Time up!");
// //         clearInterval(timer);
// //         const clearing = setInterval(() => {
// //           clearInterval(clearing);
// //           console.clear();
// //         }, 5000);
// //       }
// //       count--;
// //     }, 1000);
// //   };
// //   setCounter();
// // }

// // {
// //   let x = "Hey Hit Me up";
// //   const y = () => {
// //     let g = x.slice(4, 7).concat(x);
// //     return g;
// //   };
// //   console.log(y());
// // console.log(x.at(-5));
// // }

// {
//   // let text = "Apple, Banana, Kiwi";
//   // let part = text.substring(6, 13);
//   // let str = "Apple, Banana, Kiwi";
//   // let part = str.substring(7, 6);
//   // console.log(part);
// }

// console.clear();
// console.log();
// {
//   // let x = "this is nice this";
//   // let y = x.replaceAll(/this/g, "dog");
//   // console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// {
//   // let text = "Please locate where 'locate' occurs!";
//   // let h = text.length;
//   // let index = text.lastIndexOf("c");
//   // console.log(index);
//   // console.log(h);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// // //OS Js >>>> IQ/Quiz
// // {
// const x = { Key: "Changed value" };
// Object.preventExtensions(x);
// x.Key = "value Changed";
// x.y = "new Value";
// console.log(x);

// //   //(A)reference error
// //   //(B){Key:'Changed value'}
// //   //(C){Key:'new value'}
// //   //(D){Key:value:'Changed'}
// // }
// // //Comment like and follow for more

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// // {
// //   let x = "nice this nice is great";
// //   let y = x.indexOf("c", 9);
// //   console.log(y);
// // }

// console.log();
// console.log();
// console.log();
// console.log();
// console.log();

// {
//   // let y = "us we arent this";
//   // let x = y.match(/this/g);
//   // console.log(x);
//   // let myfirstName = "samuel";
//   // let mylastName = "ogunyemi";
//   // let y = `
//   // ${myfirstName}
//   // ${mylastName}`;
//   // console.log(y);
//   // let price = 10;
//   // let vat = 0.2;
//   // let y = `${price * (1 + vat).toFixed(2)}`;
//   // // let g = 1 + vat * price;
//   // console.log(y);
//   // let x = (0.2 * 10 + 0.1 * 10) / 10;
//   // console.log(x);
//   // let x = "100";
//   // let y = "10";
//   // let z = x - y;
//   // console.log(z);
//   // let x = 100 / "Apple";
//   // console.log(x)
//   // let x = 100 / "10";
//   // console.log(x);
//   // let x = 100 / "Apple";
//   // isNaN(x);
//   // console.log(x);
//   // let x = NaN;
//   // let y = "5";
//   // let z = x + y;
//   // console.log(z);
//   // let d = NaN;
//   // typeof NaN;
//   // console.log(d);
//   // let myNumber = 2;
//   // // Execute until Infinity
//   // while (myNumber != Infinity) {
//   //   myNumber = myNumber * myNumber;
//   //   console.log(myNumber);
//   // }
//   // let x = 2 / 0;
//   // let y = -2 / 0;
//   // console.log(x);
//   // let y = NaN;
//   // let g = typeof y;
//   // console.log(g);
//   // let x = new Number(500);
//   // let y = new Number(500);
//   // console.log(x == y);
//   // let x = BigInt(999999999999999);
//   // let type = typeof x;
//   // console.log(type);
//   let y = Number(new Date("1970-01-01"));
//   console.log(y);
// }

// console.log();
// console.log();
// console.log();
// console.log();

// // {
// //   // const aboutJSII = "it also is the engine of your web application";
// //   const firstName = "KENNY";
// //   const lastName = "GIFT";
// //   const at = "@";
// //   const company = "CodelabOrganization";
// //   const domain = ".com";

// //   console.log(
// //     firstName
// //       .concat(lastName)
// //       .concat(at)
// //       .concat(company)
// //       .concat(domain)
// //       .toLowerCase()
// //   );
// // }

// //OS Js >>>> IQ/Quiz
// {
//   // let x = "Hey Hit Me up";
//   // const y = () => {
//   //   let z = x[0].toLowerCase().concat(x.slice(1).at(-8));
//   //   return z;
//   // };
//   // console.log(y());
//   //(A) hey Hit me up
//   //(b) Error
//   //(c) hi
//   //(d) Hey Hit me up
//   //(e) hit
// }
// //Comment like and follow for more
// console.log();
// console.log();
// console.log();
// console.log();
// console.clear();

// //OS Github >>>> IQ/Quiz
// {
//   `What happens when you push code directly to the main branch without reviewing it `;

//   //(A) Everything works perfectly, first try
//   //(B) you become the team's hero
//   //(C) you spend the next 3 hours fixing unexpected issues
//   //(D) you become the branch master
// }
// //Comment like and follow for more

// //

// {
//   // let x = 2;
//   // x = x + 1;
//   // console.log(x);
//   // let x = 2;
//   // x++;
//   // console.log(x);
//   // let x = 5;
//   // x -= 3;
//   // console.log(x);
//   // let y = 25;
//   // console.log("temperture:" + y + " C");
//   // let x = 25;
//   // if (x > 20) {
//   //   console.log("it warm " + x);
//   // } else {
//   //   console.log("it not warm");
//   // }
//   // console.log(x);
//   // let dice = Math.floor(Math.random() * 6) + 1;
//   // console.log("you rolled a:", dice);
//   // if (dice === 6) {
//   //   console.log("You got 6!🥳");
//   // } else {
//   //   console.log("try again");
//   // }
//   // let userPassword = "";
//   // if (userPassword === "code") {
//   //   console.log("Welcome! back user:" + userPassword);
//   // } else {
//   //   console.log("Incorrect password: " + userPassword);
//   // }
//   // let age = 12;
//   // if (age > 17) {
//   //   console.log("you an adult");
//   // } else {
//   //   console.log("u not an adult yet");
//   // }
// }

// console.clear();

// // //OS Js >>>> IQ/Quiz
// // {
// //   let age = 16;
// //   if (age >= 20) {
// //     console.log("you an adult:", age);
// //   } else if (age >= 18) {
// //     console.log("you close to be an adult:", age);
// //   } else if (age >= 14) {
// //     console.log("you an teenager:", age + 1);
// //   } else if (age >= 10) {
// //     console.log("You a child:", age);
// //   } else if (age >= 5) {
// //     console.log("you an infant:", age);
// //   } else {
// //     console.log("you not born:", age);
// //   }
// //   //(A) you a child: 16
// //   //(B) you an teenager: 17
// //   //(C) you close to be an adult: 18
// //   //(D) you an infant: 5
// //   //(E) you an teenager: 16
// //   //(F) none of the Above
// // }
// //Comment like and follow for more

// console.log();
// console.log();
// console.log();
// console.log();
// console.clear();

// // {
// //   let gorecies = [100, 400, 200];

// //   for (
// //     let i = 0;
// //     i <
// //     gorecies.reduce((a, b) => {
// //       return a + b;
// //     });
// //     i++
// //   ) {
// //     console.log(i);
// //   }
// // }

// {
//   // let dice = Math.ceil(Math.random() * 6) + 1;
//   // console.log(dice);
//   // let count = 1;
//   // while (dice != 6) {
//   //   dice = Math.ceil(Math.random() * 6);
//   //   console.log(dice);
//   //   count += 1;
//   // }
//   // console.log("you got 6!");
//   // console.log("you rolled", count, "times");
//   // console.log(453 == );
// }

// console.log();
// console.log();
// console.log();
// console.clear();

// // //OS Js >>>> IQ/Quiz
// // {
// //   let list_Of_Names = ["Elon", "Bezoz", "Zuckerberg", "John"];

// //   for (let i = 0; i < list_Of_Names.length; i++) {
// //     console.log(list_Of_Names[i]);
// //     if (list_Of_Names[i] === "Zuckeberg") {
// //       console.log("Found Zukerberg!😅");
// //     } else if (list_Of_Names[i] === "Zuckerberg") {
// //       console.log("Found Zukerberg!🙂");
// //       break;
// //     }
// //   }

// //   // (A) //Elon Bezoz Zuckerberg Found Zukerberg!😅

// //   // (B) //Elon Bezoz Zuckerberg Found Zukerberg!🙂 John

// //   // (C) //Elon Bezoz Zuckerberg Found Zukerberg!😅 John

// //   // (D) //Elon Bezoz Zuckerberg Found Zukerberg!🙂

// //   //(E)Bezoz Zukerberg!  Zuckerberg Found Elon John
// // }
// // //Comment like and follow for more

// console.log();
// console.log();
// console.log();
// console.log();
// console.clear();
// {
//   // let dice = Math.ceil(Math.random() * 6);
//   // console.log(dice);

//   // let dice = Math.ceil(Math.random() * 6);
//   // console.log(dice);
//   // let count = 1;
//   // while (dice != 6) {
//   //   dice = Math.ceil(Math.random() * 6);
//   //   console.log(dice);
//   //   count += 1;
//   // }
//   // console.log("Rolled !6");
//   // console.log("Rolled ", count, "times");

//   let numExperiement = 1000;
//   let totalRolls = 0;

//   for (let i = 0; i < numExperiement; i++) {
//     let count = 0;
//     while (true) {
//       let dice = Math.floor(Math.random() * 6) + 1;
//       count++;
//       if (dice === 6) {
//         break;
//       }
//     }
//     totalRolls += count;
//   }
//   console.log("Doing", +numExperiement + "expirements");
//   console.log("Average rolls to get 6:", totalRolls / numExperiement);
// }

// console.log();
// console.log();
// console.log();
// console.log();
// console.clear();

// // {
// //   let x = ["Baba", "Jess", "ket", "One"];

// //   for (let i = 4; i > x.length; i--) {
// //     console.log(x[i]);
// //     if (x[i] === "Jess") {
// //       console.log("Found Jess!");
// //       break;
// //     }
// //   }
// // }

// console.clear();
// //OS Js >>>> IQ/Quiz
// {
//   // const Array_Numbers = [1, 2, 9, 4, 3, 5, 6, 7, 8, 2, 10];
//   // const xy = () => {
//   //   const x = Array_Numbers.filter((el) => {
//   //     return el % 7 === 2;
//   //   });
//   //   return x.reverse();
//   // };
//   // console.log(xy(Array_Numbers));
//   //(A) [2,2,9]
//   //(B) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   //(B) [ 9,2,2]
//   //(C) [2, 4, 6, 8, 10]
//   //(E) [2,9,2]
// }
// //Comment like and follow for more

// console.clear();

// //OS Js >>>> IQ/Quiz
// {
//   `What year was the var keyword used in Javascript code from ___ to ___ and the const and let keyword was added ___`;

//   //(A) from 1995 to 2015 const and let was added 2015

//   //(B) from 1985 to 2016 const and let was added 2016

//   //(C) from 1995 to 2016 const and let was added 2016

//   //(D) from 1995 to 2015 const and let was added 2016
// }
// //Comment like and follow for more

// console.clear();

// {
//   // let x = ["Samm", "HH", "jjk"];
//   // x[0] = "kk";
//   // let g = x.push("H");
//   // console.log(x);
//   //   let x = { me: "ahhaa", us: "yeah", we: "wow" };
//   //   x.me = "k";
//   //   x.newone = "hhhhhahhaah";
//   //   console.log(x);
//   //
// }
// console.clear();

// // //OS Js >>>> IQ/Quiz
// // {
// //   let x = "49";
// //   let y = "5";
// //   let xy = !y > x;
// //   console.log(xy);

// //   //(A) true
// //   //(B) none of the above
// //   //(C) false
// //   //(D) refrenceError
// // }
// // //Comment like and follow for more
// console.clear();

// // {
// //   let x = 6 * 6 * 6 * 6;
// //   console.log(x);
// // }
// // console.log();
// // {
// //   let x = 4;
// //   let y = 6;
// //   let xy = y ** x;
// //   console.log(xy);
// // }

// console.log();

// {
//   // let x = 3;
//   // x &&= 2;
//   // console.log(x);
//   // let x = undefined;
//   // console.log(x ?? "annonymous");
//   //   let x = 0;
//   //   x ||= 3;
//   //   console.log(x);
//   //
//   // let x = new Date("2025-03-26");
//   // console.log(x);
//   // let x;
//   // x = 3;
//   // x = "hello";
//   // console.log(x);
//   // let x = functiiii(4, 3);
//   // function functiiii(a, b) {
//   //   return a * b;
//   // }
//   // console.log(x);
//   // let value = toCelsius(77);
//   // function toCelsius(fahrenheit) {
//   //   return (5 / 9) * (fahrenheit - 32);
//   // }
//   // console.log(value);
//   // let person = {
//   //   name: "Samuel",
//   //   id: 21,
//   //   city: "lagos",
//   // };
//   // let x = "name";
//   // let y = "id";
//   // console.log(person[x] + " id is", person[y]);
// }

// console.clear();

// //OS Js >>>> IQ/Quiz
// // {
// // let x = 10;
// // let y = 2;
// // let z = y <= x;
// // let zy = 4;
// // let xy = x / zy;
// // let ox = y ** xy;
// // console.log(ox.toFixed());

// //(A) 1
// //(B) 1024
// //(C) refrenceError
// //(D) 6
// // }
// //Comment like and follow for more

// console.clear();
// {
//   // let y = [
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   //   false,
//   // ];
//   // let x = false;
//   // console.log(x);
//   // for (let i = 0; i < y.length; i++) {
//   //   console.log(y[i]);
//   // }
//   // let x = !10  1;
//   // console.logx)
//   // consoll ??;() !
//   // 2 == "2
//   // "
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // )
//   // ;
// }

// console.clear();
// {
//   // let x = [2.7244, 4.523, 5.322, 6.322, 7.232];
//   // const xy = () => {
//   //   let y = Math.max(...x).toFixed();
//   //   return y / 2;
//   // };
//   // console.log(xy());
//   // const numberarray = [1, 2, 3, 4, 5, 6, 7, 8];
//   // const minmethod = Math.max(...numberarray);
//   // console.log(minmethod);
//   // const floorMethod1 = Math.floor(6.7231);
//   // console.log(floorMethod1);
// }

// console.clear();

// //OS Js >>>> IQ/Quiz
// {
//   // let staffrole = "administrator" || "employee";
//   // const securityaccess =
//   //   staffrole !== "employee" && "administrator"
//   //     ? console.log("you have acess as an administrator")
//   //     : console.log("you not an admin so no access");
//   // console.log(securityaccess ?? "Login");
//   //(A) you not an admin so no access
//   //(B) refrenceError
//   //(C) you have acess as an administrator Login
//   //(D) you not an admin so no access Login
//   //(E) Login
//   //(F) you have acess as an administrator Login
// } //Comment like and follow for more

// console.clear();

// //OS Js >>>> IQ/Quiz
// {
//   // let x = 5n;
//   // let y = new Number(x) / 2;
//   // console.log(y);
//   //(A) 3
//   //(B) Error
//   //(C) 2
//   //(D) 2.5
// }
// //Comment like and follow for more

// console.clear();

// // //OS Js >>>> IQ/Quiz
// // {
// //   const CarsForSaleDealer = {
// //     name: "Soichiro",
// //     lastName: "Honda",
// //     Cars: [{ name: "Accord", models: ["LX Sports", "EX", "EX-L"] }],
// //   };

// //   let x = "";
// //   for (let i in CarsForSaleDealer.Cars) {
// //     x += " " + CarsForSaleDealer.Cars[i].name + " ";
// //     for (let j in CarsForSaleDealer.Cars[i].models) {
// //       x += CarsForSaleDealer.Cars[i].models[j] + " ";
// //     }
// //   }
// //   console.log(x);

// //(A) Soichiro LX Sports EX EX-L
// //(B) refrenceError
// //(C) LX Sports EX EX-L
// //(D) Accord LX Sports EX EX-L
// //(E) Accord
// // }
// //Comment like and follow ➕ for more

// //OS Js >>>> IQ/Quiz
// {
//   // let points = [30, 25, 100, 40];
//   // const x = () => {
//   //   let xy = points.length;
//   //   let y = Infinity;
//   //   while (xy--) {
//   //     if (points[xy] < y) {
//   //       y = points[xy];
//   //     }
//   //   }
//   //   return y;
//   // };
//   // console.log(x());
//   //(A) 100
//   //(B) 40
//   //(C) 25
//   //(D) 30
//   //(E)error
// }
//Comment like and follow ➕ for more
console.clear();
console.clear();

// {
//   let text;
//   if (Math.random() < 0.5) {
//     text = "<a href='https://w3schools.com'>Visit W3Schools</a>";
//   } else {
//     text = "<a href='https://wwf.org'>Visit WWF</a>";
//   }
//   console.log(text);
//   // console.log(hour);
// }

// {
//   let x, y, z;
//   (x = 5), (y = 6), (z = x + y);
//   console.log(z);
// }

// const marketplace = [
//   {
//     client: {
//       id: 101,
//       name: "Jessica Felix",
//       email: "jessicafelix@codelab.com",
//       location: "New York, USA",
//     },
//     products: [
//       {
//         id: 1,
//         name: "Laptop",
//         price: 1200,
//         category: "Electronics",
//         stock: 50,
//       },
//       {
//         id: 2,
//         name: "Smartphone",
//         price: 800,
//         category: "Electronics",
//         stock: 30,
//       },
//       { id: 3, name: "Tablet", price: 450, category: "Electronics", stock: 20 },
//     ],
//   },
//   {
//     client: {
//       id: 102,
//       name: "Daniel George",
//       email: "danielgeorge@codelab.com",
//       location: "Los Angeles, USA",
//     },
//     products: [
//       {
//         id: 4,
//         name: "Headphones",
//         price: 150,
//         category: "Accessories",
//         stock: 100,
//       },
//       {
//         id: 5,
//         name: "Keyboard",
//         price: 70,
//         category: "Accessories",
//         stock: 150,
//       },
//       { id: 6, name: "Mouse", price: 50, category: "Accessories", stock: 200 },
//     ],
//   },
//   {
//     client: {
//       id: 103,
//       name: "Charlie Openda",
//       email: "charlieopenda@codelab.com",
//       location: "Chicago, USA",
//     },
//     products: [
//       { id: 7, name: "Chair", price: 300, category: "Furniture", stock: 10 },
//       { id: 8, name: "Desk", price: 500, category: "Furniture", stock: 5 },
//       { id: 9, name: "Lamp", price: 100, category: "Furniture", stock: 25 },
//     ],
//   },
// ];

// let x, y, z;
// x = 10;
// y = 20;
// z = x + y;
// console.log(z);

// {
//   let x = 1;
//   b = 2;
//   c = 3;
//   z = x + b + c;
//   console.log(z);
// }

{
  // let x;
  // x = (5 + 2) * 10;
  // console.log(x);
  // let x, y;
  // x = 5 + 6;
  // y = x * 10;
  // console.log(y);
  // x = 5;
  // y = 6;
  // z = x + y;
  // console.log(z);
  // var hey = 5;
  // var hey = 6;
  // y = hey + hey;
  // console.log(y);
  // let x = 6;
  // let y = "5";
  // z = x - y;
  // console.log(z === 1, z);
  // let $$ = 23;
  // _To_Add = 2;
  // $_Sum_$ = $$ + _To_Add;
  // console.log($_Sum_$);
  // var hey = 2;
  // {
  //   var hey = 23;
  //   console.log(hey);
  // }
  // console.log(hey);
  // let PI = 3.28288282;
  // PI = 23;
  // console.log(PI);
  // const cars = ["zero", "box", "freez"];
  // cars[0] = "tt";
  // cars.push("yellow");
  // console.log(cars);
  // const cars = {
  //   name: "hey",
  //   test: "haha",
  // };
  // cars.name = "ksks";
  // cars.new = "hiw";
  // cars["yea"] = "nooo";
  // console.log(cars);
  // let x = 3;
  // let o = (100 + 10) * x;
  // console.log(o);
  // let x = 10;
  // x += 3;
  // console.log(x);
  // let x = "A";
  // let y = "B";
  // let u = x > y;
  // console.log(u);
  // let x = "a very nice";
  // x += " day";
  // console.log(x);
}

{
  // const  dontBlock = (time) => {
  //     console.log("i am running...");
  // }
  //setimeout
  // setTimeout(() => {
  //   console.log("Task");
  //   clearTimeout();
  // }, 2000);
  //setinterval
  // setInterval(() => {
  //   console.log("task");
  // }, 2000);
  //
  // let dateTime = new Date().getTime();
  // console.log(dateTime);
  // const readTime = (time) => {
  //   while (new Date(time).getTime() < dateTime + time) {
  //     console.log("first");
  //   }
  // };
  // readTime(1000);
  // for (let i = 0; i <= 10; i++) {
  //   console.log(i);
  // }
  // for (let i = 10; i >= 0; i--) {
  //   console.log(i);
  // }
  // let data = [1, 5, 7, 10];
  // for (let i = 0; i <= data.length - 1; i++) {
  //   console.log(i);
  // }
  // let data2 = { name: "peter", score: 9 };
  // for of
  // for (let i of data2) {
  //     console.log(i)
  // }
  //for in
  // for (let i in data2) {
  //   console.log(i);
  // }
  // for (let i in data2) {
  //   console.log(data2[i]);
  // }
  // let reverse = (word) => {
  //   let wrd = word.split("").reverse().join("");
  //   return wrd;
  // };
  // console.log(reverse("Amaka"));
  // let wrd = "";
  // for (let i = 0; i < 2; i++) {
  //     console.log(word[i]);
  //     wrd = word [i].concat(wrd);
  //     return {
  //     }
  // }
  // const main = (cb) => {
  //   return cb();
  // };
  // main(() => {
  //   console.log("i am cb ");
  // });
  // const prompt = require("prompt-sync")();
  // let input = prompt("please enter your name:");
  // setTimeout(() => {
  //   console.log(`welcome back ${input}`);
  //   clearTimeout();
  // }, 3000);
  // console.log("welcome back ", input);
  // to us not node mone node index
  //word ======> wo-r**d!!!
  // const { TfiRuler } = require("React-icons/tfi");
  // let x = ["*", "-", "!"];
  // let xx = "wo-r-**d!!!";
  // let wx = xx.split("");
  // let w = "*";
  // console.log(
  //   wx
  //     .filter((el) => {
  //       return !x.includes(el);
  //     })
  //     .join("")
  // );
}

{
  // var y;
  // let x;
  // x = 5;
  // y = 6;
  // let z = x + y;
  // console.log(z);
  // let x = 5 + 6;
  // x *= 10;
  // console.log(x);
  // let x = 2;
  // x += +5;
  // x -= 1;
  // x *= 2;
  // x /= 2;
  // h = x - 2;
  // s = x > 2;
  // console.log(h, x, s);
  // let x = "";
  // console.log(x);
  // let carname;
  // console.log(carname);
  // let a = 3;
  // let x = (100 + 50) * a;
  // console.log(x);
  // let x = "20";
  // let b = "90";
  // console.log(x.charCodeAt(), b.charCodeAt(), x < b);
  // let x = 10;
  // let y = x % 5;
  // console.log(y);
  // let x = 3;
  // x++;
  // console.log(x);
  // let x = 5;
  // g = x ** 4;
  // console.log(g);
  // let x = 5;
  // f = Math.pow(x, 2);
  // console.log(f);
  // let x = 100 + 50;
  // let g = x * 3;
  // console.log(g);
  // let x;
  // console.log(x ?? "ss");
  // let y = 0.0002e-5;
  // let x = 1266253e5;
  // console.log(x, y);
  // let u = 10000;
  // const x = {
  //   surname: "M",
  //   name: "jason",
  //   car: "G wagon",
  //   costOfCar: `$${u}`,
  //   id: 21,
  //   main: function () {
  //     return this.surname + " " + this.name;
  //   },
  // };
  // console.log(x.main());
  // const perso = {
  //   name: "sameul",
  //   surName: "ogunyemi",
  //   age: "20",
  // };
  // perso.b = function () {
  //   return this.name + " " + this.surName;
  // };
  // console.log(perso.b());
  // next >  //Object DisPlay
  // function Person(first, last, age, eye) {
  //   this.firstName = first;
  //   this.LastName = last;
  //   this.Ageing = age;
  //   this.eyeColor = eye;
  //   // this.fullName = function () {
  //   //   return this.firstName + " " + this.LastName;
  //   // };
  // }
  // const cob = new Person("me", "her", "this", "us");
  // Person.prototype.x = function (name) {
  //   this.LastName = name;
  // };
  // cob.x("jeres");
  // console.log(cob.LastName);
  // let x = 'we are so called "vikings" yes we are';
  // let xr = "it's alright";
  // let y = "THe character \\ is called backlash";
  // let x =   // "ABCDEFGHIJKLMNOPQURTUVWXYZ";
  // let x = "5 Mic and  Mic 5";
  // console.log(x.split(","));
  // let x = "Having fun?";
  // console.log(x.slice(7, 10));
  // console.log(x.substring(7, 9));
  // console.log(x.substr(7, 10));
  // let x = "ABCDEFGHIJKLMNOPQURTUVWXYZ";
  // let x = "Please locate where 'locate' occurs!";
  // let x = "I love cats. Cats are very easy to love. Cats are very popular.";
  // let x = "Hello world, welcome to the universe";
  // let x = "Hello world";
  // console.log(x.indexOf(""));
  // let x = "Jonnys";
  // let f = "ss";
  // console.log(`${x}, ${f}`);
  // let price = 10;
  // let Vat = 0.25;
  // let total = `Total: ${(price * (1 + Vat)).toFixed(4)}`;
  // console.log(total);
  // let g = 1 + 0.25;
  // let h = 10;
  // let q = 0.25;
  // let a = h * (q + 1);
  // console.log(g * 10, a.toFixed(2));
  // for (let i = 0; i <= 500; i++) {
  //   // console.clear();
  //   console.log("gritandglory,");
  // }
  // let x = (0.2 * 10 + 0.1 * 10) / 10;
  // console.log(x);
  // let g = NaN;
  // let u = "5";
  // console.log(typeof NaN);
  // let mynumber = 2;
  // while (mynumber != Infinity) {
  //   mynumber = mynumber * mynumber;
  // }
  // console.log(mynumber);
  // let x = 2 / 0;
  // let y = 0xa;
  // console.log(y);
  // let mynumber = 32;
  // console.log(mynumber.toString(32));
  // console.log(mynumber.toString(16));
  // console.log(mynumber.toString(12));
  // console.log(mynumber.toString(10));
  // console.log(mynumber.toString(8));
  // console.log(mynumber.toString(2));
  // let mynumber = 2;
  // while (mynumber != Infinity) {
  //   mynumber = mynumber * mynumber;
  //   console.log(mynumber);
  // }
  // // let x = 999999999999;
  // // let y = 99999999999999999n;
  // let x = 1234567890123456789012345n;
  // let y = BigInt(1234567890123456789012345);
  // console.log(x, y);
  // let yu = BigInt(99999999999);
  // console.log(typeof yu);
  // let x = 5n;
  // let y = Number(x) / 2;
  // console.log(y);
  // let x = Number.MAX_SAFE_INTEGER;
  // let y = Number.MIN_SAFE_INTEGER;
  // console.log(x, y);
  // let u = Number.isInteger(10);
  // let q = Number.isSafeInteger(9007199254740991);
  // console.log(u, q);
  // let x = 123;
  // x.toString();
  // (123).toString();
  // (100 + 23).toString();
  // console.log(x);
  // let x = 9.656;
  // let s = x.toExponential(1);
  // let u = x.toExponential(4);
  // let g = x.toExponential(6);
  // console.log(s, u, g);
  // let x = 123;
  // console.log(Number.parseInt("10"));
  // let x = 100 / "apple";
  // console.log(x);
  // let x = [];
  // x[0] = Date.now();
  // x[1] = myfunction;
  // x[2] = myfunction;
  // const fruits = [];
  // fruits["firstname"] = "johnn";
  // fruits["lastname"] = "doe";
  // fruits["age"] = 46;
  // let g = fruits.length;
  // let y = fruits[0];
  // console.log(fruits, g, y);
  // const g = [];
  // g[0] = 2;
  // console.log(g instanceof Array);
  // const ob = {
  //   name: "John",
  //   age: 30,
  //   cars: [
  //     { name: "ford", models: ["firestdd", "ssjs", "ddds"] },
  //     { name: "bmw", models: ["dfddiddrest", "ssjs", "s"] },
  //     { name: "fiat", models: ["firdddddedsddt", "sdsdsdddjs", "sdssssss"] },
  //   ],
  // };
  // let x = "";
  // for (let i in ob.cars) {
  //   x += "" + ob.cars[i].name + "";
  //   for (let j in ob.cars[i].models) {
  //     x += ob.cars[i].models[j];
  //   }
  // }
  // console.log(x);
  // const fruits = ["banana", "kiwi", "ss", "apple", "new"];
  // let g = fruits.slice(2);
  // console.log(g);
  // const fruits = [4, 9, 16, 25, 29, 67];
  // let first = fruits.findLastIndex((x) => x > 16);
  // console.log(first);
  // let f = ["ap", "or", "ma"];
  // console.log(f.indexOf("or"));
  // function x(v, i, a) {
  //   return v > 18;
  // }
  // console.log(first);
  // const x = ["Jan", "Feb", "Mar", "April", "May"];
  // x.toSorted();
  // x.toReversed();
  // console.log(x);
  // const x = [40, 100, 1, 5, 25, 10];
  // const g = () => {
  //   let u = x.sort(() => {
  //     return 0.5 - Math.random();
  //   });
  //   return u;
  // };
  // console.log(g());
  // d.sort(function (a, b) {
  //   return b - a;
  // });
  // console.log(d);
  // for (let i = d.length - 1; i > 0; i--) {
  //   let j = Math.floor(Math.random() * (i + 1));
  //   let k = d[i];
  //   d[i] = d[j];
  //   d[j] = k;
  // }
  // console.log(d);
  // let arr = [40, 100, 1, 5, 25, 10];
  // function myarrayMax(arr) {
  //   let len = arr.length;
  //   let max = -Infinity;
  //   while (len--) {
  //     if (arr[len] > max) {
  //     }
  //   }
  //   return max;
  // }
  // console.log(myarrayMax(arr));
  // function myArrayMin(arr) {
  //   let len = arr.length;
  //   let min = Infinity;
  //   while (len--) {
  //     if (arr[len] < min) {
  //       min = arr[len];
  //     }
  //   }
  //   return min;
  // }
  // console.log(myArrayMin(arr));
  // const h = (s) => {
  //   let f = s.length;
  //   let a = Infinity;
  //   while (f--) {
  //     if (s[f] < a) {
  //       a = s[f];
  //     }
  //     return a;
  //   }
  // };
  // console.log(h(arr));
  // const a = () => {
  //   const h = Math.max.apply(null, d);
  //   return h;
  // };
  // console.log(a());
  // const y = () => {
  //   const f = d.sort((a, b) => {
  //     return b - a;
  //   });
  //   return f[0];
  // };
  // console.log(y());
  // const cars = [
  //   { type: "volvo", year: 2016 },
  //   { type: "Saab", year: 2001 },
  //   { type: "BMW", year: 2010 },
  // ];
  //    cars.sort((a, b) => {
  //     let r = a.type.toLowerCase;
  //     let q = b.type.toLowerCase;
  //     if (r < q) {
  //       return -1;
  //     }
  //     if (q > r) {
  //       return 1;
  //     }
  //     return 0;
  // });
  // const g = () => {
  //   let u = cars.sort((a, b) => {
  //     return a.year - b.year;
  //   });
  //   return u;
  // };
  // console.log(g());
  // const cars = [
  //   { type: "Volvo", year: 2016 },
  //   { type: "Saab", year: 2001 },
  //   { type: "BMW", year: 2010 },
  // ];
  // // displayCars();
  // function myFunction() {
  //   let g = cars.sort(function (a, b) {
  //     let x = a.type.toLowerCase();
  //     let y = b.type.toLowerCase();
  //     if (x < y) {
  //       return -1;
  //     }
  //     if (x > y) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  //   // displayCars();
  //   return g;
  // }
  // function displayCars() {
  //   let g =
  //     cars[0].type +
  //     " " +
  //     cars[0].year +
  //     "<br>" +
  //     cars[1].type +
  //     " " +
  //     cars[1].year +
  //     "<br>" +
  //     cars[2].type +
  //     " " +
  //     cars[2].year;
  //   return g;
  // }
  // console.log(myFunction());
  // const myArr = [
  //   { name: "X00", price: 100 },
  //   { name: "X01", price: 100 },
  //   { name: "X02", price: 100 },
  //   { name: "X03", price: 100 },
  //   { name: "X04", price: 110 },
  //   { name: "X05", price: 110 },
  //   { name: "X06", price: 110 },
  //   { name: "X07", price: 110 },
  //   { name: "X08", price: 120 },
  //   { name: "X09", price: 120 },
  //   { name: "X10", price: 120 },
  //   { name: "X11", price: 120 },
  //   { name: "X12", price: 130 },
  //   { name: "X13", price: 130 },
  //   { name: "X14", price: 130 },
  //   { name: "X15", price: 130 },
  //   { name: "X16", price: 140 },
  //   { name: "X17", price: 140 },
  //   { name: "X18", price: 140 },
  //   { name: "X19", price: 140 },
  // ];
  // const u = () => {
  //   let g = myArr.sort((p1, p2) => {
  //     if (p1.price < p2.price) return -1;
  //     if (p1.price > p2.price) return 1;
  //     return 0;
  //   });
  //   return g;
  // };
  // console.log(u());
  // const qe = [45, 4, 9, 16, 25];
  // let sum = qe.reduce(myfunction, 100);
  // function myfunction(t, v) {
  //   return t + v;
  // }
  // console.log(sum);
  // const numbers = [1, 2, 3, 4, 5, 6];
  // const numbers = [49, 4, 9, 16, 25];
  // const q = numbers.flatMap((x) => [x, x * 10]);
  // console.log(q);
  // const g = () => {
  //   let f = numbers.every((v, i, a) => {
  //     return v > 18;
  //   });
  //   return f;
  // };
  // console.log(g());
  // let hh = Array.from("ABCDEFG");
  // console.log(hh);
  // const fruits = ["Banana", "Orange", "Apple", "Mango"];
  // const keys = fruits.entries();
  // let text = "";
  // for (let x of keys) {
  //   text += x + "";
  //   console.log(text);
  // }
  // let txt = "";
  // numbers.forEach(x);
  // function x(v, i, a) {
  //   txt += v + "";
  // }
  // console.log(txt);
  // const cars = ["Sab", "Volvo", "bmw"];
  // cars[0] = "toyota";
  // cars.push("audi");
  // console.log(cars);
  // cars = ["sab", "volvo", "bmw"];
  // var cars;
  // console.log(cars);
  // var cars = ["saab", "volvo", "bmw"];
  // // const cars = [""];
  // {
  //   var cars = ["toyota", "volvo", "bmw"];
  //   // const cars = ["hsh", "sjs"];
  //   console.log(cars);
  // }
  //ISO date inputs international standard
  // const d = new Date("2015-03-25T00:00-06:00");
  // console.log(d);
  // //Short dates
  // const d1 = new Date("03/25/2015");
  // console.log(d1);
  // //Long dates
  // const d2 = Date.parse("March, 25, 2012");
  // console.log(d2);
  // const f = new Date("2024");
  // console.log(f);
  // const a = new Date();
  // // console.log(a.getSeconds());
  // // let i = 0;
  // for (let i = a; i <= a; i++) {
  //   console.log(i.getSeconds());
  // }
  // const months = [
  //   "January",
  //   "February",
  //   "March",
  //   "April",
  //   "May",
  //   "June",
  //   "July",
  //   "August",
  //   "September",
  //   "October",
  //   "November",
  //   "December",
  // ];
  // {
  // const oo = "palindrome";
  // const isPalindrome = (oo) => {
  //   const y = oo.split("").reverse().join("");
  //   if (oo === y) {
  //     return `${oo} is a palindrome`;
  //   } else {
  //     return `${oo} is not a palindrome`;
  //   }
  // };
  // console.log(isPalindrome("dark"));
  // ES >>> Js Quiz
  //(A) emordnilap
  //(B) white is a palindrome
  //(C) dark is not a palindorme
  //(D) palindrome is a palindorme
  //(E) Syntax error
  // }
  // const d = new Date();
  // let month = months[d.getMonth()];
  // console.log(month);
  // // let f = (month[4] = 4);
  // // console.log(f);
  // let f = new Date();
  // console.log(f.getDay());
  // const dateWeek = [
  //   "Monday",
  //   "Tuesday",
  //   "Wednessday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  //   "Sunday",
  // ];
  // {
  //   //Es Js >>>> Quiz
  //   let x = 6;
  //   let y = 3;
  //   let z =
  //     (x == 5 || x == 5) +
  //     " " +
  //     (x == 6 || y == 0) +
  //     " " +
  //     (x == 0 || y == 3) +
  //     " " +
  //     (x == 6 || y == 3);
  //   console.log(z);
  //   //(A) true true true true
  //   //(B) false true false true
  //   //(C) true true false false
  //   //(D) false true true true
  //   // like comment and follow ➕ for more
  // }
  // const xd = new Date();
  // let g = dateWeek[xd.getDay()];
  // console.log(g);
  // let fr = Date.now();
  // console.log(fr);
  // const minute = 1000 * 60;
  // const hour = minute * 60;
  // const day = hour * 24;
  // const year = day * 365;
  // let years = Math.round(Date.now() / year);
  // console.log(years);
  // let x = Math.floor(Math.random() * 10) + 1;
  // console.log(x);
  // const ram = (min, max) => {
  //   return Math.floor(Math.random() * (max - min) + min);
  // };
  // console.log(ram(0, 10));
  // {
  //Es Js >>>> Quiz
  // let x = 10 / "ten";
  // console.log(Boolean(x));
  // //(A) true
  //(B) NaN
  //(C) false
  //(D) syntax Error
  //(E) 1
  // Like comment and follow ➕ for more
  // }
  // let x = false;
  // console.log(Boolean(x));
  // let x = -0;
  // console.log(Boolean(x));
  // console.log(Boolean(10 > 9));
  // let x = 3;
  // let y = 6;
  // let f = !(y === x);
  // let a = !(y > x);
  // console.log(f, a);
  // let voteable;
  // let age = 1;
  // if (isNaN(age)) {
  //   voteable = "Input is not a number";
  // } else {
  //   voteable = age < 18 ? "Too young" : "Old enough";
  // }
  //   {
  //   // Es Js >>>> Quiz
  //   let votable;
  //   let age = 17;
  //   if (isNaN(age)) {
  //     votable = "input a number";
  //   } else {
  //     votable =
  //       age <= 16 + 1
  //         ? "Too young"
  //         : "Old enough to vote" || age <= 18 - 1
  //         ? "wait until one year to vote"
  //         : "not ready to vote at all";
  //   }
  //   console.log(votable);
  //   //(A) Old enough to vote
  //   //(B) wait until one year to vote
  //   //(C) Too young
  //   //(D) not ready to vote at all
  //   // like comment and follow ➕ for more
  // }
  // console.log(voteable);
  // let name = null;
  // let text = "missing";
  // console.log(name ?? text);
  // const car = { type: "fiast", model: "500", color: "wite" };
  // let x = car?.name;
  // console.log(x);
  // let x = 10 / "ten";
  // console.log(x);
  // let clockTime = 11;
  // if (clockTime < 11) {
  //   console.log("Still in the morning");
  // } else if (clockTime == 11) {
  //   console.log("about to enter 12 noon");
  // } else {
  //   console.log("now it NOON");
  // }
  // let numbers = [];
  // numbers = new Proxy(numbers, {
  //   // (*)
  //   set(target, prop, val) {
  //     // to intercept property writing
  //     if (typeof val == "number") {
  //       target[prop] = val;
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // });
  // numbers.push(1); // added successfully
  // numbers.push(2); // added successfully
  // console.log("Length is: " + numbers.length); // 2
  // numbers.push("test"); // TypeError ('set' on proxy returned false)
  // console.log(numbers.push(3));
  // console.log("This line is never reached (error in the line above)");
  // let day;
  // switch (new Date().getDay()) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  // }
  // console.log(day);
  // let text;
  // switch (new Date().getDay()) {
  //   case 6:
  //     text = "Today is Saturday";
  //     break;
  //   case 0:
  //     text = "Today is Sunday";
  //     break;
  //   default:
  //     text = "Looking forward to the weekend";
  // }
  // console.log(text);
  // let text2;
  // switch (new Date().getDay()) {
  //   default:
  //     text2 = "Looking forward to weekend";
  //     break;
  //   case 6:
  //     text = "Today is saturday";
  //     break;
  //   case 0:
  //     text = "today is sunday";
  // }
  // console.log(text2);
  // {
  // // Es Js >>>> Quiz
  // let day;
  // switch (new Date().getDay()) {
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  // }
  // console.log(day);
  //(A) Saturday
  //(B) Friday
  //(C) Wednesday
  //(D) Sunday
  //(E) Monday
  //(F) Thursday
  //(G) TuesDay
  //(H) Syntax Error
  //like comment and follow ➕ for more
  // }
  // let text3;
  // switch (new Date().getDay()) {
  //   case 4:
  //   case 5:
  //     text3 = "Soon it weekend";
  //     break;
  //   case 0:
  //   case 6:
  //     text3 = "its is weekend";
  //     break;
  //   default:
  //     text3 = "looking forward to weekend";
  // }
  // console.log(text3);
  // let text7;
  // let x = "Off";
  // switch (x) {
  //   case 0:
  //     text7 = "Off";
  //     break;
  //   case 1:
  //     text7 = "On";
  //     break;
  //   default:
  //     text7 = "no value found";
  // }
  // console.log(text7);
  // let listOFnames = ["Samuel", "Jesmi", "Mariam", "Oray", "Dan", "env"];
  // let STtring = "";
  // for (let i = 0; i < listOFnames.length; i++) {
  //   let x = STtring + listOFnames[i] + " ";
  //   console.log(x);
  // }
  // let xr = "";
  // for (let i = 0; i < 5; i++) {
  //   xr += "The number is " + i + " ";
  // }
  // console.log(xr);
  // {
  //   //Es Js >>>> Quiz
  //   let Colors = ["Gray", "Blue", "Green", "Red", "Black", "Purple"];
  //   let x = Colors.length;
  //   let i = 2;
  //   let str = "";
  //   for (; i < x; i++) {
  //     let y = str + Colors[i] + " ";
  //     console.log(y);
  //   }
  //   //(A) Gray Blue Green Red Black Purple
  //   //(B) Blue Gray Blue Green Red Black Purple
  //   //(C) Green Red Black Purple
  //   //(D) Blue Green Red Black Purple
  //   //(E) Syntax Error
  //   //Comment like and follow ➕  for more
  // }
  // let cars = ["lexus", "corolla", "Camry"];
  // for (let i = 0, len = cars.length, text = ""; i < len; i++) {
  //   let s = text + cars[i] + "";
  //   console.log(s);
  // }
  // let i1 = 0;
  // let r = "";
  // for (; i1 < cars.length; ) {
  //   let d = r + cars[i1] + "";
  //   i1++;
  //   console.log("D:", d);
  // }
  // {
  //   //Es Js >>>> Quiz
  //   let i,
  //     x = "";
  //   for (i = 0; i <= 5; i++) {
  //     x += i;
  //   }
  //   console.log(x);
  //   //(A) 1234
  //   //(B) 12345
  //   //(C) 01234
  //   //(D) 012345
  //   //(E) Syntax Error
  //   // like comment and follow ➕ for more
  // }
  // const person = { fname: "John", Lname: "Dim", age: 28 };
  // let text = "";
  // for (x in person) {
  //   text += person[x];
  // }
  // console.log(text);
  // const Numbs = [9, 4, 5, 6, 64];
  // let textT = "";
  // for (let x in Numbs) {
  //   textT += Numbs[x];
  // }
  // console.log(textT);
  // const numbs = [45, 6, 7, 8, 8];
  // let txt = "";
  // numbs.forEach(myf);
  // function myf(val, idx, arry) {
  //   txt += val;
  // }
  // console.log(txt);
  // const cars = ["BMW", "Volvo", "Mini"];
  // let txt = "";
  // for (let x of cars) {
  //   txt += x;
  //   console.log(x);
  // }
  // let languages = "Javascript";
  // let txt = "";
  // for (let x of languages) {
  //   txt += x;
  // }
  // console.log(txt);
  // const fruits = ["Apple", "Bannana", "Orange"];
  // for (x of fruits) {
  //   console.log(x);
  // }
  // {
  //   // OS Js >>>> Quiz
  //   const GovernmentForces = ["NaVal", "AirForce", "ArmY", "Police"];
  //   let i = 0;
  //   let x = "";
  //   for (; GovernmentForces[i]; ) {
  //     x += GovernmentForces[i];
  //     i++;
  //   }
  //   console.log(x[0], x[5], x[2], x[16]);
  //   //(A) N a V a l
  //   //(B) A i r F o r ce
  //   //(C) N A V Y
  //   //(D) A r m Y
  //   //(E) P o l i c e
  //   //(F) Syntax Error
  //   //like comment and follow ➕ for more
  // }
  // let i = 0;
  // let text = "";
  // while (i < 10) {
  //   text += "The number is " + i;
  //   i++;
  // }
  // {
  //   //OS Js >>>> Quiz
  //   let i = 15,
  //     x = "";
  //   do {
  //     x += "NO." + i;
  //   } while (i < 10);
  //   console.log(x);
  //   //(A) NO.10 NO.11 NO.12 NO.13 NO.14
  //   //(B) NO.15
  //   //(C) ""
  //   //(D 25
  //   //(E) Syntax Error
  //   //like comment and follow ➕ for more
  // }
  // {
  //   // OS Js >>>> Quiz
  //   const Planets = ["Earth", "Mars", "Pluto", "Jupiter"];
  //   let text = "";
  //   list: {
  //     text += Planets[0] + " ";
  //     text += Planets[1] + " ";
  //     break list;
  //     text += Planets[2] + " ";
  //     text += Planets[3] + " ";
  //   }
  //   console.log(text);
  //   //(A) Earth Mars Pluto Jupiter
  //   //(B) Earth Mars
  //   //(C) Mars Pluto Jupiter
  //   //(D) Pluto Jupiter
  //   //(E) Syntax Error
  //   //like comment and follow ➕ for more
  // }
  // console.log(text);
  // do {
  //   text += "The number is " + i;
  //   i++;
  // } while (i < 10);
  // console.log(text);
  //Next > Js Loop While
  // const cars = ["bmw", "volvo", "Saab", "Ford"];
  // let i = 0;
  // let text = "";
  // while (cars[i]) {
  //   text += cars[i];
  //   i++;
  // }
  // let text = "";
  // for (let i = 0; i < 10; i++) {
  //   if (i === 3) {
  //     continue;
  //   }
  //   text += "The number is " + i + "";
  // }
  // console.log(text);
  // {
  //   //OS Js >>>> Quiz
  //     const list = new Map([
  //     ["Man", 20],
  //     ["Woman", 100],
  //     ["Children", 50],
  //   ]);
  //   let f = list.keys((props) => {
  //     return props[0];
  //   });
  //   let y = "";
  //   for (const x of f) {
  //     y += x + " ";
  //   }
  //   console.log(y);
  //   //(A) Man,20,Woman,100,Children,50
  //   //(B) 20,100,50
  //   //(C) Man Woman Children
  //   //(D) Man,20
  //   //(E) Syntax Error
  //   //like comment and follow ➕ for more
  // }
  // const list = new Map([
  //   ["Man", 20],
  //   ["Woman", 100],
  //   ["Children", 50],
  // ]);
  // let f = list.keys((props) => {
  //   return props[0];
  // });
  // let y = "";
  // for (const x of f) {
  //   y += x + " ";
  // }
  // console.log(y);
  // function myNumber() {
  //   let n = 0;
  //   return {
  //     next: function () {
  //       n += 10;
  //       return { value: n, done: false };
  //     },
  //   };
  // }
  // const n = myNumber();
  // n.next();
  // n.next();
  // n.next();
  // console.log(n.next().value);
  // myNumbers = {};
  // myNumbers[Symbol.iterator] = function () {
  //   let n = 0;
  //   done = false;
  //   return {
  //     next() {
  //       n += 10;
  //       if (n == 100) {
  //         done = true;
  //       }
  //       return { value: n, done: done };
  //     },
  //   };
  // };
  // let text = "";
  // for (const num of myNumbers) {
  //   text += num + "";
  // }
  // console.log(text);
  // Next > Sets
}

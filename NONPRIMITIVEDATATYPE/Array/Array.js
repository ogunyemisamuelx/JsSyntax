// // let nameOfArray = [];

// //Ordered List of Shopping items
// // 1. bag
// // 2. fruits
// // 3. chcicken
// // 4. youghurt

// // const arryOfStrings = [
//     //     "mijay",
// //     "isreal",
// //     "kcee",
// //     "kenny",
// //     "gift",
// //     "sixtus",
// //     "praise",
// // ];
// // console.log(arryOfStrings[6][2]);
// // console.log(arryOfStrings[6]);

// // const arrOfNumber = [6,5,700,25,10,30,56,22,100];
// // const arrOfBoolean = [true,false];
// // const arrOfundefined = [undefined]

// const matrixArray = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9,10],
//         [11,12,13,14],

// ];

// console.log(matrixArray[3][3]);

// // const arrOfNumber = [6,5,700,25,10,20,56,22,100];
// // console.log(arrOfNumber[2]);

// // const arrOfString = [
//     //     "ogunyemi",
//     //     "samuel",
// //     "esckles",
// //     "richard",
// //     "bigboy",
// //     "zeus",
// //     "codm",
// //     "freefire",
// // ];

// // console.log(arrOfString[2]);

// // const arrOfBoolean = [
//     //     true,
//     //     false,
//     // ];

//     // console.log(arrOfBoolean[1]);

//     // const arrOfNumber =
//     //     [2,5,6,7,8,0,1,10,22,49,839,9393,93933,9939,9292,292,93,93,93]

// // console.log(arrOfNumber[2])

// // const arrOfString = [
//     //     "mr okoro",
//     //     "mr apako",
//     //     "mr kcee",
//     // ];

//     // console.log(arrOfString[0])

//     // const  arrOfString = [
//         //     "head",
//         //     "eyes",
// //     "hands",
// // ];

// // console.log(arrOfString[0][3]

// // );

// // let newArray = [
//     //     [1,2,3,["hello","hi"],4,5,["hundgrey"],]
//     // ];
//     // console.log(newArray[0][6][0]);

//     // let newArray =[
//         //     [123]
//         // ]

// //         const apiData = {
// //                 fruits: [
// //                         "Apple",
// //                         "Banana",
// //                         "Cherry",
// //                         "Date",
// //         "Elderberry",
// //         "Fig",
// //         "Grape",
// //         "Honeydew",
// //         "Indian Fig",
// //         "Jacketfruit",
// //         {
// //                 favouriteArtist: "Taylor Swift",
// //                 favouriteSong: "Love story",
// //             },

// //         ],
// //         user: {
// //         name: "John Doe",
// //         email: "john.doe@example.com",
// //         age: 30,
// //         preferences: {
// //                 color: "Blue",
// //                 genre: "Pop",
// //                 isActive: true,

// //             },
// //             playlist: [
// //                     {
// //                 name: "Chill Vibes",
// //                 songs: [
// //                         {
// //                                 title: "Ocean Eyes",
// //                                 artist: "Billie Eilish",
// //                                 duration: 3.2,
// //                                 isFavourite: true,

// //                             },
// //                             {
// //                                     title: "Shape of You ",
// //                                     artist: "Ed Sheeran",
// //                         duration: 4.24,
// //                         isFavourite: false,

// //                     },

// //                 ],

// //             },
// //             {
// //                     name: "Workout Mix",
// //                     songs: [
// //                             {
// //                                     title: "Eye of the Tiger",
// //                                     artist: "Survivor",
// //                                     duration: "4.04",
// //                                     isFavourite: true,
// //                                 },
// //                     {
// //                         title: "Lose Yourself",
// //                         artist: "Eminem",
// //                         duration: 5.2,
// //                         isFavourite: false,
// //                     },
// //                 ],
// //             },
// //         ],
// //     },
// // };

// // console.log(apiData.fruits[9]);
// // console.log(apiData.fruits[10].favouriteArtist);
// // console.log(apiData.fruits[10].favouriteSong);
// // console.log(apiData.user.name);
// // console.log(apiData.user.email)
// // console.log(apiData.user.age)
// // console.log(apiData.user.preferences.color);
// // console.log(apiData.user.preferences.isActive);
// // console.log(apiData. user.playlist[0].songs[0].duration);
// // console.log(apiData.user.playlist[0].songs[1].isFavourite);
// // console.log(apiData.user.playlist[1].name);
// // console.log(apiData.user.playlist[1].songs[1].title);

// const traveApi = {
//     destination: [
//         {
//             locationName: "Paris",
//             popularAttractions: ["Effiel Tower", "Louvre Museum"],
//             tours: [
//                 {
//                 tourName: "City Highlights",
//                 duration: "3 days",
//                 price: 500,
//             },
//             {
//                 tourName: "Romantic Getaway",
//                 duration: "5 days",
//                 price: 1000,
//             },
//             ],
//         },
//         {
//             locationName: "Tokyo",
//             popularAttractions: ["Tokyo Tower", "Shibuya Crossing"],
//             tours: [
//                 {
//                     tourName: "Cultural Experience",
//                     duration: "4 days",
//                     price: 700,
//                 },
//                 {
//                     tourName: "Food adventure",
//                     duration: "3 days",
//                     price: 600,

//                 },
//             ],
//         },
//     ],
// };

// const locationName = traveApi.destination[0].locationName;

// const upperCaseLocationName = locationName.toUpperCase();

// const extractedCharacter = upperCaseLocationName.substring(0,5);
// console.log(extractedCharacter);

// const tourName = traveApi.destination[0].tours[1].tourName;

// console.log(tourName);
// traveApi.destination[0].tours[1].tourName = "luxury escapes";
// console.log(traveApi.destination[0].tours[1].tourName.toLowerCase());

// const duration = traveApi.destination[1].tours[0].duration;
// const extract =  duration.slice(0,2);
// const coveto = extract.toUpperCase();
// console.log(coveto.length)

// console.log(traveApi.destination[0].locationName);
// console.log(traveApi.destination[0].locationName.toUpperCase());
// console.log(traveApi.destination[0].locationName.toUpperCase().slice(0,5));

// console.log(traveApi.destination[0].tours[1].tourName);
// console.log(traveApi.destination[0].tours[1].tourName.replace("Romantic Getaway","Luxury Escape"));

// console.log(traveApi.destination[1].tours[0].duration)
// console.log(traveApi.destination[1].tours[0].duration.slice(0,1));
// console.log(traveApi.destination[1].tours[0].duration.slice(0,1).toUpperCase());

// console.log(traveApi.destination[1].locationName);
// console.log(traveApi.destination[1].locationName.repeat(3));
// console.log(traveApi.destination[1].locationName.repeat(3).replaceAll("Tokyo", "The Capital City"));

// console.log(traveApi.destination[1].locationName.repeat(3).replaceAll("Tokyo", "The Capital City").slice(0, 40))

// console.log(traveApi.destination[0].tours[0].tourName);
// console.log(traveApi.destination[0].tours[0].tourName.toUpperCase());
// console.log(traveApi.destination[0].tours[0].tourName.toUpperCase().slice(6,14));

// console.log(traveApi.destination[0].locationName);
// console.log(traveApi.destination[0].locationName.trim());
// console.log(traveApi.destination[0].locationName.trim().includes("Paris"));
// console.log(traveApi.destination[0].locationName.trim().charAt(4));

// console.log(traveApi.destination[1].tours[1].price);
// console.log(traveApi.destination[1].tours[1].price.toString());
// console.log(traveApi.destination[1].tours[1].price.toString().concat("USD,"));
// console.log(traveApi.destination[1].tours[1].price.toString().concat("USD,".replace(",", ".")));

// const foodstuffs = ["Rice", "Beans", "Beef", "Salad", "Corn", "Bread", "Turkey", "Chicken"];

// const brandNewCar = [
//     {
//         make:"Mercedes Benz",
//         model:"C-Class",
//         year:"2020",
//         features: [
//             ""
//         ]

//     }
// ]

// let fruits = ["apple",
//     "banana",

// ];
// // fruits.push("orange");
// console.log(fruits)

// const myself = "i love eating alot and i dont get fat";
// me =  "why ain't i getting fat am just sad about it it gets me upsets alot of times";
// console.log(myself.charAt(12))

// const getout = myself.replace("i love","i hate");
// console.log(getout.concat(me).trim());

// const mealone = "i want to be something different like coding freak and i want to be fast and very smoot when coding "

// console.log(mealone.includes("coding "))

// const fullname = "Prince John";
// fullname.charAt(0)+fullname.charAt(fullname.indexOf("")+1)
// console.log(fullname)

// const myself = "i love eating alot and i dont get fat";
// me =  "why ain't i getting fat am just sad about it it gets me upsets alot of times";

// console.log(myself.charAt(0));
// console.log(myself.charCodeAt(0))
// console.log(myself.concat(me))
// console.log(myself.endsWith("fat"))
// console.log(myself.includes("I"))
// console.log()

// const company =
// "set10Organization"
// const at = "@"
// const email = ""
// const com = "com"
// console.log(company.split().shift().concat(at).concat(email).concat(com).toLowerCase())

// create A dynamic company emailfor staff

// let x = {
//     id: "1",
//     app: "esckle",
//     rating: "⭐",
// }

// const maybe = x.rating.repeat(3);
// console.log(maybe)

// const me = {
//    about: [
//     {
//         name: "samuel",
//         surname: "ogunyemi",
//     },
//     {
//       secndme:  [
//         {
//             thingilike: "food",
//             thingidisklike: "girls",
//         },
//         {
//             account: 100000,
//             shy: true,

//         }

//         ],
//     },

//     ],
// };
// console.log(me.about[1].secndme[0].thingidisklike)

// const meagain = {
//     myself: [
//         {
//             theonlyandonlyloveofmylife: "God",
//             thingsilove: "coding",

//         }
//     ]
// }

// const life = [
//     {
//         bad: "lifeisbadsometimes",
//         good: "itgoodsometimes",

//         all: {
//             pains: "alot of pains in life",
//             only: "if u can escape it would be fun",
//         },
//         only: {
//             if: "you belive it will manifest in your life ",
//             and: " all you desire shall come to pass",
//         },

//     },
//     {
//         GOD: {
//             He: "He is good all the times",
//             He2: "He never fails anytime",
//             always: "always present all the times",
//         },

//     },

// ];

// console.log(life[0].bad)

// const students = [
//     {
//         name: "Alice",
//         Age: " 22",
//         scores: {math: 85, english: 92, science: 88},
//         courses: ["Math", "English", "Science"],

//     },
//     {
//         name: "Bob",
//         age:24,
//         scores: {math: 78, english: 85, science: 90}
//         courses: ["Math", "History", "Science"],

//     }

// ]

// const students = [
//   {
//     name: "Alice",
//     age: 22,
//     scores: { math: 85, english: 92, science: 88 },
//     courses: ["Math", "Englis", "science"],
//   },
//   {
//     name: "Bob",
//     age: 24,
//     scores: { math: 78, english: 85, science: 90 },
//     courses: ["Math", "History", "Science"],
//   },
//   {
//     name: "Charlie",
//     age: 23,
//     scores: { math: 92, english: 88, science: 95 },
//     courses: ["Math", "English", "Art"],
//   },
//   {
//     name: "David",
//     age: 25,
//     scores: { math: 95, english: 82, science: 80 },
//     courses: ["Math", "English", "Science", "Art"],
//   },
// ];

// const overallAverage = students.reduce((acc,student)=> {
//    const scores = [student.scores.math,student.scores.english,student.scores.science];
//    return acc + scores.reduce((a,b)=> a + b) / scores.length;
// })
// console.log(overallAverage)

//every

// const allever = students.every((ha)=> {
//   return ha.age > 20;
// })

// console.log(allever)

//some
// const o = students.some((student)=> {
//   const y = student.name === "Charlie"
//   return y

// })
// console.log(x)

//correction some and filter
// const x = students.some ((student)=> {
//   return student.age <= 25 ;
// })

// const z = students.filter((student)=> {
//   const courses = students.some((cours)=> {

//     return courses.course === "Art"
//   })
// })
// console.log(x)

// reduce correction

// const numers = [1,2,3,4,5,6,7,8];
// const get = numers.reduce(( accumulator, currentval)=> {
//   return  accumulator + currentval
// })

// console.log(numers)

// const getmax = numers.reduce((total, currenval)=> Math.max(total,currenval), -Infinity)
// console.log(getmax)

// const getTotal = students.reduce((total,currenval,index,)=> {
//   console.log(`${getTotal}`)
//   return total + currenval + index;
// })

// const getscinece = students.findIndex((props)=> {
//   const hello = props.courses.findIndex((el)=> {
//     return el[2] === "Science"
//   });
//   return hello

// })
// console.log(getscinece)

// // const alphabets = ["40","56","55","93","201","3341"];

// const get = students.map((hold)=> {
//     return {
//         name:hold.name,scores:hold.scores,courses:hold.courses,
//     }
// })

// console.log(get)

// let x = "YXZ"
// let user = "XYZ"

// const ourFunction = (x,y) => {

// let xSplit = x.split("")
// let userSplit = y.split("");
// let resultUser = userSplit.sort().join("")

// }

//  let obj = {name: "samuel", height:6,score: 20}
// let a = [1,2,3,7,11,19,15];

//  console.log(a.fill((el)=> {
//         return el !== 1;
//      }))

// const remove = (arr,id)=> {
//     let a = arr.filter((el)=> {
//         return el.id !==id;
//     });
// }

// console.log(remove(entry,1));

// const students = [
//       {
//     name: "Alice",
//     age:22,
//     scores: {math:100,}
//    },
//    {
//     name: "Bob",
//     age:24,
//     scores: {math: 100,},

//    },
//    {
//     name: "Charlie",
//     age:23,
//     scores: {math:100,},

//    },
// ]

// const access =  students.map((ha)=>
// {
//     return {
//         name:ha.name,age:ha.age,scores:ha.scores
//     }

// })

// console.log(access)

// let x = "YXZ";
// let users = "XYZ"
// const ourFunction = (x,y) =>
//     {
//     let xSplit = x.split("");
//     let userSplit = y.split("")
//     let resultUser = userSplit.sort().join("").toUppercase()
//     let resultx = xSplit.sort().join("".toLocaleUpperCase())
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

// const get = marketplace.map((x)=> {
//   return x.products.filter((y)=> {
//     return x.
//   })
// })
// console.log(get)
//9
// const get = marketplace.map((x)=> {
//   return console.log(x.client.location)

// })

// const get = marketplace.map((x)=> {
//   return x.products.map((y)=> {
//     return console.log(y.category)
//   })
// })

//8
// const get = marketplace.map((x)=> {
//   return x.products.map((y)=>{
//     return
//   })
// })

//7
// const get = marketplace.map((x)=> {
//   return x.products.map((y)=> {
//     return y.category
//   })
// })
// console.log(get)

//6
// const get = marketplace.map((x)=> {
//   return x.products.map((y)=> {
//     return y.stock
//   })
// })
// console.log(get)

//5
// const get = marketplace.map((x)=> {
//   return x.products.map((y)=> {
//     return y.price
//   })
// })
// console.log(get)

//4
// const get = marketplace.map((ha)=> {
//   return ha.products.map((go)=> {
//     return go.id
//   })

// })
// console.log(get)

//3
// const get = marketplace.map((ha)=> {
//   return ha.client.name
// })
// console.log(get)

//2
// const get = marketplace.map((el)=> {
//   return el.client.email
// })
// console.log(get)

//1
// const get = marketplace.map((recieve)=> {
//   return recieve.client.id
// })
// console.log(get)

// //(1)
// const accessone = marketplace.map((market) => {
//     return market.products.map((market) => {

//       console.log(market.name)
//     })
// })

// //(2)

// const acesstwo = marketplace.map((market)=> {
//     return market.products.map((el)=>{
//        console.log( el.price);

//     })
// })

// //(3)
// const acessthree = marketplace.map((market)=> {
//   return market.products.map((market)=> {

// console.log(market.category)
//   })
// })

// //(4)
// const accessfour = marketplace.map((market)=> {
//   return market.products.map((market)=> {
//     console.log(market.stock)
//   })
// })

// //(5)
// const accessfive = marketplace.map ((market)=> {
//   return market.products.map ((market)=> {
//     console.log(market.id)
//   })
// })

// //six(6)
// const accesssix = marketplace.map ((market)=> {
//   return market.products.map((give)=> {
//     return give

//   })
// })

// console.log(accesssix.map ((el) => {
//   return el.length
// }))

// // seven(7)
// const accessseven = marketplace.map ((market)=> {
//   return market.products.map((market)=> {
//     return market.price*market.stock;
//   });

// })
// console.log(accessseven)

// const acesseight = marketplace.filter((market)=> {
//     return market.client
// })

// const get = marketplace.map((x)=> {
//   return x.products.map((x)=> {
//     return console.log(x.price*x.stock)
//   })
// })

// let entry = [
//   {
//     id: 1,
//     name: "Mije",
//     age: 20,
//   },
//   {
//     id: 2,
//     name: "Gift",
//     age: 10,
//   },
//   {
//     id: 5,
//     name: "Gift",
//     age: 15,
//   },
//   {
//     id: 4,
//     name: "Gift",
//     age: 7,
//   },
//   {
//     id: 3,
//     name: "John Doe",
//     age: 30,
//   },
// ];

const marketplace = [
  {
    client: {
      id: 101,
      name: "Jessica Felix",
      email: "jessicafelix@codelab.com",
      location: "New York, USA",
    },
    products: [
      {
        id: 1,
        name: "Laptop",
        price: 1200,
        category: "Electronics",
        stock: 50,
      },
      {
        id: 2,
        name: "Smartphone",
        price: 800,
        category: "Electronics",
        stock: 30,
      },
      { id: 3, name: "Tablet", price: 450, category: "Electronics", stock: 20 },
    ],
  },
  {
    client: {
      id: 102,
      name: "Daniel George",
      email: "danielgeorge@codelab.com",
      location: "Los Angeles, USA",
    },
    products: [
      {
        id: 4,
        name: "Headphones",
        price: 150,
        category: "Accessories",
        stock: 100,
      },
      {
        id: 5,
        name: "Keyboard",
        price: 70,
        category: "Accessories",
        stock: 150,
      },
      { id: 6, name: "Mouse", price: 50, category: "Accessories", stock: 200 },
    ],
  },
  {
    client: {
      id: 103,
      name: "Charlie Openda",
      email: "charlieopenda@codelab.com",
      location: "Chicago, USA",
    },
    products: [
      { id: 7, name: "Chair", price: 300, category: "Furniture", stock: 10 },
      { id: 8, name: "Desk", price: 500, category: "Furniture", stock: 5 },
      { id: 9, name: "Lamp", price: 100, category: "Furniture", stock: 25 },
    ],
  },
];
// const d = marketplace.map((el) => {
//   return el.client.email;
// });

// console.log(d);
// console.log(marketplace)

// const higher = 20;
// const lower = 10;

// if (higher == 20) {
//   console.log("your are a big boy");
// } else if (19 < 20) {
//   console.log("you be small pikin");
// }

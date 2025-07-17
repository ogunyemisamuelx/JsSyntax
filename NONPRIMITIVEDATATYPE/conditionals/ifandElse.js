// let outsidetemperature = 36;
// if (outsidetemperature < 36) {
//   console.log("it pretty cold today ooo");
// } else {
//   console.log("today hot die");
// }

// let isRaining = true;

// if (isRaining) {
//   console.log("Rain dey fall oh");
// } else {
//   console.log("its not raining currently");
// }

// 3
// let age = 12;
// if (age >= 20) {
//   console.log("your are officially an adult");
// } else if (age < 20 && age >= 15) {
//   console.log("you are a teenager");
// } else if (age < 15 && age >= 10) {
//   console.log("you are still in purberty");
// } else if (age < 10) {
//   console.log("your are a toddler");
// } else {
//   console.log("you are currently dead");
// }

// console.clear();

// const username = "davidsamzzywilliams@gmail.com";
// const password = "Hello12345";
// if (username && password) {
//   if (username === "davidsamzzywilliams@gmail.com") {
//     console.log("corret we have seen your email ${username}");
//   } else {
//     console.log("incorrect email");
//   }
// } else {
//   console.log("error, there is no email and password");
// }

const student = [
  {
    studentName: "Alice",
    studentHasSubmitted: true,
    sumibttedSubject: "Math",
    studentMembership: "gold",
  },
  {
    studentName: "Bob",
    studentHasSubmitted: false,
    sumibttedSubject: "English",
    studentMembership: "silver",
  },
  {
    studentName: "Charlie",
    studentHasSubmitted: true,
    sumibttedSubject: "Science",
    studentMembership: "platinum",
  },
  {
    studentName: "David",
    studentHasSubmitted: false,
    sumibttedSubject: "History",
    studentMembership: "none",
  },
  {
    studentName: "Eve",
    studentHasSubmitted: true,
    sumibttedSubject: "Math",
    studentMembership: "Bronze",
  },
  {
    studentName: "Frank",
    studentHasSubmitted: true,
    sumibttedSubject: "English",
    studentMembership: "silver",
  },
  {
    studentName: "Grace",
    studentHasSubmitted: false,
    sumibttedSubject: "Science",
    studentMembership: "silver",
  },
  {
    studentName: "Heidi",
    studentHasSubmitted: true,
    sumibttedSubject: "History",
    studentMembership: "gold",
  },
  {
    studentName: "Ivan",
    studentHasSubmitted: false,
    sumibttedSubject: "Math",
    studentMembership: "bronze",
  },
  {
    studentName: "Judy",
    studentHasSubmitted: true,
    sumibttedSubject: "Science",
    studentMembership: "platinum",
  },
];

// const d = student.map((el) => {
//   return {
//     student: el.studentName,
//   };
// });

// console.log(d);
// if (student[0].studentHasSubmitted){
//   return (`${}`)
// }
// const d = student.map((el) => {
//   return {
//     studentHasSubmitted: el.studentHasSubmitted,
//   };
// });
// console.log(d);
// const d = student.map((el) => {
//   return {
//     studentName: el.studentName,
//   };
// });
// console.log(d);

// const get = student.find((el) => {
//   return el.studentName
// })
// console.log(get)
// 1
// const access = [...student];
// console.log(access);

// if (student[0].studentHasSubmitted) {
//   console.log(
//     ` ${student[0].studentHasSubmitted} that alice has submitted her assignment`
//   );

// 2
// } else {
//   console.log("alice has not submitted");
// }

3;
// if (
//   student[1].studentMembership === "gold" ||
//   student[1].studentMembership === "platinum"
// ) {
//   console.log(`${student[1].studentName} has priority grading`);
// } else {
//   console.log(`${student[1].studentName} has standard grading`);
// }

//4
// if (student[2].sumibttedSubject === "Math") {
//   console.log(`${student[2].studentName} is Math genius`);
// } else if (student[2].sumibttedSubject === "Science") {
//   console.log(`${student[2].studentName} is a science star`);
// } else {
//   console.log(`${student[2].studentName}, keep up the good work`);
// }

// 5

// if (student[3].studentHasSubmitted) {
//   console.log(
//     `david membership(${student[3].studentMembership} is reduce by one tier)`
//   );
// } else {
//   console.log(`David has no penalty`);
// }

// 6

// if (
//   student[4].sumibttedSubject === "Math" &&
//   (student[4].studentMembership === "silver" ||
//     student[4].studentMembership === "platinum")
// ) {
//   console.log(`${student[4].student} student get extra credit`);
// } else {
//   console.log(`no extra credit for ${student[4].studentName}`);
// }

// 7

// if (
//   student[5].sumibttedSubject === "Science" &&
//   (student[5].studentMembership === "silver" ||
//     student[5].studentMembership === "gold" ||
//     student[5].studentMembership === "platinum")
// ) {
//   console.log(`${student[5].studentName} is eligible for the science fair`);
// } else {
//   console.log(
//     `${student[5].studentName} is not  eligible for the science fair`
//   );
// }

// 8
// if (student[6].studentHasSubmitted) {
//   console.log(`${student[6].studentName}earn a gold badge`);
// } else {
//   console.log(`${student[6].studentName} does not earn a badge`);
// }

// if (
//   (student[7].sumibttedSubject === "History" &&
//     student[7].studentMembership === "gold") ||
//   student[7].studentMembership === "platinum"
// ) {
//   console.log(`${student[7].studentName} get a detailed feedback`);
// }

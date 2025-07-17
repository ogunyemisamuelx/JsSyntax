// ternary operator
//example 1
// let ageTovote = 18;
// const yourCanVote =
//   ageTovote >= 18
//     ? console.log("you can vote")
//     : console.log("you can not vote, not age legal");

//example 2

// let staffrole = "administrator";
// const securityaccess =
//   staffrole === "administrator"
//     ? console.log("you have as an administrator")
//     : "you not an admin so no access";

const schoolScore = [
  { name: "Chinedu Okafor", subject: "Mathematics", score: 85 },
  { name: "Amina Abubakar", subject: "English", score: 92 },
  { name: "Emeka Nwosu", subject: "Science", score: 78 },
  { name: "Folake Adeyemi", subject: "History", score: 88 },
  { name: "Ifeanyi Eze", subject: "Mathematics", score: 95 },
];

const result = schoolScore.find(
  (student) => student.name === "Chinedu Okafor " && student.score > 80
);

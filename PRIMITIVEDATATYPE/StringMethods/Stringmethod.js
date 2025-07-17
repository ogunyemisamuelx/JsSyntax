// const email = "Student.Name@ShoolDomain.com";
// const username = "student.Name@";
// console.log (email.substring(18,25).toLowerCase());
// console.log(email.substring(0,12).toLocaleUpperCase());
// console.log(username.toUpperCase().concat(email.substring(18,25)));

// const messyString = "Too many spaces here";
// console.log(messyString.trim().length);
// console.log(messyString.substring(5,15));

// const prey = "The quick brown fox jumps over the lazy dog ";
// console.log (prey.replace("lazy","brown"));

// const firstName = "Jane";
// const middleName = "Marie";
// const lastName = "Smith";
// console.log(firstName.concat(middleName).concat(lastName).toUpperCase());

// const phrase = "i like to code in Javascript. Javascript is fun!"
// console.log(phrase.replace("Javascript", "JS"));
// "javascript is a programming language used to build interative web applications ";
// console.log(phrase.replaceAll("Javascript", "JS").toUpperCase());
// console.log(phrase.substring(15,30));

// const text = "programming is highly rewarding";
// console.log(text.charAt(10));
// console.log(text.charCodeAt(10));
// console.log(text.replaceAll("8","103"));
// console.log(text.slice(8,28));

// const myself = "handsome, cool, smart, nice, hardworking 247,"
// console.log(myself.length)

// const myEmail = "davidsamzzywiliams@gmail.com";
// console.log(myEmail.toLocaleLowerCase());

// const myMail = "davidsamzzywilliams@gmail.com";
// console.log(myMail.toUpperCase());

// const party = "wello guys you are welcome to my youtube channel";
// console.log(party.trimStart());

// const welcome = "pls stay tuned we are always at your service";
// console.log(welcome.trimStart());

// const everyday = "we are always party every day to make sure we enjoy ourselves";
// console.log( everyday.trimEnd());

// const miracle = " good things do happen sometimes when you believe ";
// console.log( miracle.valueOf());

// const mylanguage = "mathemathics is cool when you put your head and you learn faster and move faster when calculator"

// console.log(mylanguage.charAt(0));

// const myname  = "samuel";
// const at = "@gmail.com";
// const myemail = "davidsamzzywilliams";
// console.log(myname.concat(at).concat(myemail));

// const myname =
// "ogunyemi samuel oghenemano";
// console.log(myname.split());

// const mylife = "my name is ogunyemi samuel oghenemano am 20yrs old i school at code lab ";
// console.log(mylife.slice(0,7))

// const mylife = "The of me is ogunyemi samuel oghenemano i love indomi";
// console.log(mylife.startsWith("The"));
// console.log(mylife.endsWith("indomi"))

// const mylife = "my name is samuel ogunyemi samuel";
// console.log(mylife.trim());
// console.log(mylife.trimStart());
// console.log(mylife.trimEnd());

// const things = "bad things good things happening alot in this world";
// console.log(things.toUpperCase());
// console.log(things.toLowerCase());

// const mycharacter = "am kind some times cool sometimes angry many things";

// console.log(mycharacter.valueOf() [0]);

// const measurement = "temperature meter prepaid and many more thing measure it gonna it cool if you can ";
// console.log(measurement.length);

// const mainname = "ogunyemi";
//  othername = "samuel";
//  at = "@gmail.com";
//  me = "davidsamzzywilliams";
//  console.log(mainname.concat(othername).concat(at).concat(me));

//  const mythings = "i really want to archive my dreams i really want to show them out there am gonna do something big for those who have nothing i really try my possible best ";
//  console.log(mythings.slice(0,8));

//  const differthings = "many people wan to live to archieve something big atlest in their life when living ";
//  console.log(differthings.split("live"));
//  console.log(differthings.replace("many","sure"));
// console.log(differthings.repeat(10));
// console.log(differthings.replaceAll("many","class"))
// console.log()

// const myname = "oghenamo ogunyemi samuel theophilious";
// console.log(myname.replaceAll("samuel","bigboy"));
// console.log(myname.replace("oghenamo","peculair"));

// const myLifeStyle = "great cool nice sweet friendly handsome patient";
// console.log(myLifeStyle.lastIndexOf("patient"))
// console.log(myLifeStyle.includes("cool"))

// const mylife = "my name is ogunyemi samuel oghenemano";

// console.log(mylife.toUpperCase());
// console.log(mylife.trim());
// console.log(mylife.trimStart());
// console.log(mylife.trimEnd());
// console.log(mylife.valueOf()[0])
// console.log(mylife.length);
// console.log(mylife.repeat(1));
// console.log(mylife.replace("my","original"));
// console.log(mylife.startsWith("my"));
// console.log(mylife.endsWith("oghenemano"));
// console.log(mylife.slice(0,7));
// console.log(mylife.split("my"));
// console.log(mylife.charAt(1))
// console.log(mylife.charCodeAt(0))

// const sentence = "The quick brown fox jumps over the lazy dog";

// const slicedUppercaseWord = sentence.slice(10,15).toUpperCase();
// const modifiedSentence = sentence.replace("dog",slicedUppercaseWord);

// const finalAnswer = modifiedSentence.replace("lazy","");
// console.log(finalAnswer);

//2

// const email = "Student.Name@SchoolDomain.com";
// const extractedDomain = email.slice(13,29).toLowerCase();
// const at = email.slice(12,13);
// const username = email.slice(0,12);
// const finalEmail = username.concat(at).concat(extractedDomain);
// console.log(finalEmail);

//3

// const messyString = "Too many "

// //1
// const sentence = "The quick brown fox jumps over the lazy dog";

// const slicedUppercaseWord = sentence.slice(10, 15).toUpperCase();

// const modifiedSentence = sentence.replace("dog", slicedUppercaseWord);

// const finalAnswer = modifiedSentence.replace("lazy", "");
// console.log(finalAnswer);

// //2
// const email = "Student.Name@SchoolDomain.com";
// const extractedDomain = email.slice(13, 29).toLowerCase();
// const at = email.slice(12, 13);
// const username = email.slice(0, 12).toUpperCase();
// const finalEmail = username.concat(at).concat(extractedDomain);
// console.log(finalEmail);

// //3
// const messyString = " Too many spaces here. ";
// const trimmed = messyString.trim();
// const lengthStr = trimmed.length;
// const subStr = trimmed.substring(5, lengthStr - 5);
// console.log(subStr);

// //4
// const phrase = "I like to code in JavaScript. JavaScript is fun!";
// const firstReplace = phrase.replace("JavaScript", "JS");
// const secondReplace = firstReplace.replaceAll("JavaScript", "JS").toUpperCase();
// const question4Answer = secondReplace.substring(10, 30);

// console.log(question4Answer);

// //5
// const text = "Programming is highly rewarding";
// const tenthPos = text.slice(10, 11);
// const tenthPosUnicode = tenthPos.charCodeAt();
// const replaceAllG = text.replaceAll("g", "103");
// const ques5Answer = replaceAllG.slice(8, 28);

// console.log(ques5Answer);

// //6
// const firstName = "Jane ";
// const middleName = "Marie ";
// const lastName = "Smith ";
// const concatStr = firstName.concat(middleName).concat(lastName);
// const mIndex = concatStr.indexOf("M");
// const quest6Answer = concatStr.replace("Marie", "Ann").toUpperCase();

// console.log(quest6Answer);

// //7
// const statement = "JavaScript is a versatile and popular programming language";
// const checkStart = statement.startsWith("JavaScript");
// const checkEnd = statement.endsWith("language");
// const replaceStatement = statement.replace("versatile", "powerful");
// const question7Ans = replaceStatement.toLowerCase();

// console.log(question7Ans, checkStart, checkEnd);

// //8
// const description =
//   "Backend development involves working with databases, servers, and APIs";

// const extract = description.substring(42, 70).toLowerCase();
// const splitArr = extract.split(",");
// const finalAns8 = splitArr.join(" & ");

// console.log(finalAns8);

// // //9
// const announcement = "Join the new online coding bootcamp now";
// const splitedAnnounce = announcement.split(" ");
// const frstWrd = "Join".length;
// const secWrd = "the".length;
// const trdWrd = "new".length;
// const fourthWrd = "online".length;
// const fifthWrd = "coding".length;
// const sixthWrd = "bootcamp".length;
// const seventhWrd = "now".length;

// console.log(

//   frstWrd,
//   secWrd,
//   trdWrd,
//   fourthWrd,
//   fifthWrd,
//   sixthWrd,
//   seventhWrd,
//   announcement.indexOf("t")
// );

// //10
// const feedback =
//   "This course is simply amazing. This course is simply comprehensive.";

// const newReplaced = feedback.replace("course", "program").toUpperCase();
// const sliced = newReplaced.slice(5, 55);
// const splitedFinal = sliced.split(" ");

// console.log(splitedFinal);

// const myself = "m cool sad and angry";
// const maybe = myself.replace("m cool","i am")
// const possible = maybe.slice(0,4);
// console.log(possible.toUpperCase());

// const myself = "ogunyemi";

//  const at = "@";
//  sm = "davidsamzzywillams.com";
// const level = myself.toUpperCase();
// const allofem =  level.concat(at).concat(sm)

// console.log(allofem.toUpperCase());

// const mypeople = "i wan to eat apple and i wan to lick mango";
// const haha = mypeople.slice(9,19);
// const weeh = haha.repeat(5);
// console.log(weeh.toUpperCase());

// const fullname = "Prince John";
// fullname.charAt(0) + fullname.charAt(fullname.indexOf("") + 1);
// console.log(fullname);

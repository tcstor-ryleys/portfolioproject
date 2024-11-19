console.log("meow");
//window.alert("alert");
document.getElementById("myh1").textContent = "meow";
//document.getElementById("p1").textContent = "!!!";
let fullname = "Ryley Blair Sudduth";
let age = 17;
let isStudent = true;
let favoritecolor = "purple";
let students = 30;
//let username;
// students = students + 1;
// students = students - 1;
// students = students ** 2;
// students = students / 2;
// students += 1;
// students -= 1;
// students **= 2;
// students /= 2;
// console.log(students);
// console.log(typeof isStudent);
// document.getElementById(
//   "p4"
// ).textContent = `Your favorite color is ${favoritecolor}`;
// document.getElementById("p1").textContent = `Your name is ${fullname}`;
// document.getElementById("p2").textContent = `Your age is ${age}`;
// document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;
// function catsss() {
//   console.log("meow");
// }
// catsss();
//easywaytogetusername
// let username = window.prompt("What Is Your Username?");
// console.log(username);
document.getElementById("button").onclick = function getUserInput() {
  username = document.getElementById("input").value;
  document.getElementById("myh1").textContent = `Hello ${username}`;
};

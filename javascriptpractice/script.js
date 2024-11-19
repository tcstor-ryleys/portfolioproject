console.log("e");
//window.alert("alert!");
document.getElementById("myh1").textContent = ":3";
// let username = window.prompt("your username");
// console.log(username);
// let fullname = "Kaylee Rhea Sudduth";
// let age = 17;
// let isstudent = true;
// let favoritecolor = "red";
// let students = 30;
// students += 1;
// students = students - 1;
// students **= 2;
// students = students / 2;
// console.log(students);
// console.log(typeof isstudent);
// document.getElementById("myp").textContent = `my name is ${fullname}`;
// document.getElementById("myp2").textContent = `my age is ${age}`;
// document.getElementById("myp3").textContent = `Enrolled ${isstudent}`;
// document.getElementById(
//   "myp4"
// ).textContent = `my favorite color is ${favoritecolor}`;

//function aa() {
//console.log("e");
//}
//aa();
document.getElementById("button").onclick = function aa() {
  username = document.getElementById("input").value;
  document.getElementById("myh1").textContent = `:3 hai ${username}`;
};

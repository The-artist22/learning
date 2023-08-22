// //=====function=====//

// function first() {
//   alert("musab");
// }
// first();

// function second(a, b) {
//   var a = a + b;
//   console.log(a);
// }
// second(2, 3);

// function third(greeting) {
//   console.log(greeting);
// }
// third("hello world");

// function third(a, b) {
//   return a + b;
//   return "hello world";
// }
// console.log(third(2, 4));
// console.log(third(4, 4));

///====local and global variable====///

// var a = "hello world";
// function localVariable() {
//   console.log(a);
// }
// localVariable();
// console.log(a);

// var a = "hello";
// function se() {
//   var b = "hgfhgfhgf";
//   //   a = "hello world";
//   return b;
// }
// var c = se();
// // se();
// console.log(b);

var num1 = +prompt("Please enter first number");
var num1 = prompt("Please enter operator");
var num1 = +prompt("Please enter second number");
function cal(num1, op, num2) {
  if (op == "+") {
    // return num1 + num2;
    return console.log(num1 + num2);
  } else if (op == "-") {
    // return num1 - num2;
    return console.log(num1 - num2);
  } else if (op == "*") {
    // return num1 * num2;
    return console.log(num1 * num2);
  } else if (op == "/") {
    // return num1 / num2;
    return console.log(num1 / num2);
  } else {
    return console.log("error");
  }
}
// cal();

cal(num1, op, num2);

// console.log(cal(num1, op, num2));
// var result = cal(2, "+", 5);
// var result1 = cal(4, "-", 7);
// var result2 = cal(6, "*", 6);
// var result3 = cal(9, "/", 23);
// var result4 = cal(9, "^", 23);
// console.log(result);
// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);

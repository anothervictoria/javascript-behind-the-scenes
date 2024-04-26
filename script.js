'use strict';

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       // Creating NEW variable with same name as outer score's variable
//       const firstName = 'Steven';

//       //Reassigning outer scope's variable
//       output = `NEW OUTPUT`;

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }

//     // console.log(add(2, 3)); //gives an error only in strict mode
//     console.log(millenial);
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Victoria';
// calcAge(1991);

//Hoisting with variables

// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //Hoisting functions
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

//Example
// console.log(numProducts);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log(`All products deleted!`);
// }

// var x = 1;
// let y = 2;
// const z = 3;

// // console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// // console.log(matilda.calcAge);
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;
// f();

// var firstName = 'Matilda';
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     //Solution 1
//     // const self = this; //self or that
//     // const isMillenial = function () {
//     //   console.log(this);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     // };

//     // Solution 2

//     //works because arrow function uses this keyword from it's parent's scope

//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey, ${this.firstName}`);
//   },
// };

// jonas.greet();
// // console.log(this.firstName);
// jonas.calcAge();

// // Arguments keyword
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 6, 7, 8);

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(8, 9, 10);

let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Jonas',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log(`Friend:`, friend);
console.log(`Me:`, me);

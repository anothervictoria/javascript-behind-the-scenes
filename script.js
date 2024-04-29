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

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log(`Friend:`, friend);
// console.log(`Me:`, me);

// // Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davies';
// console.log(lastName, oldLastName);

// // Reference types

// const jessica = {
//   firstName: 'Jessica',
//   lastName: 'Wiliams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davies';
// console.log('Before marrige:', jessica);
// console.log('After marrihe:', marriedJessica);

// // marriedJessica = {};

// // Copuing objects
// const jessica2 = {
//   firstName: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davies';
// // console.log('Before marrige:', jessica2);
// // console.log('After marrihe:', jessicaCopy);

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before marrige:', jessica2);
// console.log('After marrihe:', jessicaCopy);

//შექმენით ფუნქცია რომელსაც ექნება ერთი პარამეტრი არრაი და აბრუნებს ამ არაიში არსებული ლუწი რიცხვების ჯამს

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// const addEven = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       sum += array[i];
//     }
//   }
//   console.log(sum);
// };
// addEven(array);

//შექმენით ფუნქცია რომელსაც ექნება ერთი პარამეტრი არრაი დდა აბრუნებს არაიში არსებული კენტი რიცხვების ჯამს

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = 0;
// const addOdd = function (array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 1) {
//       sum += array[i];
//     }
//   }
//   console.log(sum);
// };
// addOdd(array);

// შექმენით ფუნქცია რომელიც იღებს 2 პარამეტრს 1. არაი 2. არაი და გამოითვლის პირველ არაიში არსებული კენტი რიცხვების ჯამსა და მეორე არაიში არსებულ ლუწი რიცხვების ჯამს შორის სხვაობას.

// const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddMinusEven = function (arr1, arr2) {
//   let arr1Odd = 0;
//   let arr2Even = 0;
//   let result = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 0) {
//       arr1Odd += arr1[i];
//     }
//   }
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 1) {
//       arr2Even += arr2[i];
//     }
//   }
//   // console.log(arr1Odd, arr2Even);
//   result = arr1Odd - arr2Even;
//   console.log(result);
// };

// oddMinusEven(array1, array2);

//შექმენით ფუნქცია რომელსაც გადასცემთ ორ პარამეტრს არაის და n ს. ფუნქციამ უნდა დააბრუნოს არაის იმ ელემენტების ჯამი რომელიც ნ რიცხვისი ჯერადია

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumFunction = function (arr, n) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % n === 0) sum += arr[i];
//   }
//   return sum;
// };
// console.log(sumFunction(array, 3));

//შექმენით ფუნქცია რომელიც იღებს ორ არაის და აბრუნებს ერთს რომელშიც მოცემული იქნება ამ ორი არაიდან ამოღებული ლუწი რიცხვები
//მაგალითი:
// const arr1 = [1, 2, 5, 6];
// const arr2 = [10, 1, 12];

// const returnArrOfEvenNumbers = function (arr1, arr2) {
//   let newArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] % 2 === 0) {
//       newArray.push(arr1[i]);
//       // console.log(newArray);
//     }
//   }

//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//       newArray.push(arr2[i]);
//       // console.log(newArray);
//     }
//   }
//   return newArray;
// };
// console.log(returnArrOfEvenNumbers(arr1, arr2));
// expected result [2, 6, 10, 12];

//შექმენი ფუნქცია რომელიც იღებს არაის პარამეტრად და აბრუნებს ობიექტს სამი რომელსაც ექნება სამი ქი
// {
// sumOfOddNumbers:
// sumOfEvenNumbers:
// sumOfAllElements:
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const sumFunction = function (arr) {
//   let sumOfOddNumbers = 0;
//   let sumOfEvenNumbers = 0;
//   let sumOfAllElements = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sumOfAllElements += arr[i];
//     if (arr[i] % 2 === 0) {
//       sumOfEvenNumbers += arr[i];
//     } else if (arr[i] % 2 === 1) {
//       sumOfOddNumbers += arr[i];
//     }
//   }
//   console.log(sumOfOddNumbers, sumOfEvenNumbers, sumOfAllElements);
// };

// sumFunction(array);

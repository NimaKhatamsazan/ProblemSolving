// *
// **
// ***
// ****
// *****

// let star = ["*"];
// console.log(star);
// for (let i = 1; i < 5; i++) {
//   star.push("*");
//   console.log(star);
// }

// const getAge = (birthDate) =>
//   Math.floor((new Date() - new Date(birthDate).getTime()) / 3.15576e10);
// console.log(getAge("1994-06-14"));

//Q1: Explain what a callback function is and provide a simple example

// function modifyArray(arr, callback) {
//   // do something to arr here
//   arr.push(100);
//   // then execute the callback function that was passed
//   callback();
// }

// var arr = [1, 2, 3, 4, 5];

// modifyArray(arr, function () {
//   console.log("array has been modified", arr);
// });

//Q2: Given a string, reverse each word in the sentence

// let string = "Welcome to this Javascript Guide!";

// function reverseBySeparator(string, separator) {
//   return string.split(separator).reverse().join(separator);
// }
// let reverseBySentence = reverseBySeparator(string, " ");
// let reverseByWord = reverseBySeparator(string, "");
// console.log(reverseByWord);

// Q3: How to check if an object is an array or not? Provide some code.

// const products = [];
// console.log(typeof products[2]);
// const checkType = (products) => {
//   if (typeof products === "string") {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// };

// checkType(products);
//+++++
// if (Object.prototype.toString.call(products) === "[object Array]") {
//   console.log("Array!");
// }

//Q4: How to empty an array in JavaScript?
// var arrayList = ["a", "b", "c", "d", "e", "f"];
// var alternativeArray = arrayList;
// arrayList.splice(0, arrayList.length);
// console.log(alternativeArray);

//Q5: How would you check if a number is an integer?

// const findInt = (num) => {
//   if (num % 1 === 0) {
//     console.log("int");
//   } else {
//     console.log("is not");
//   }
// };

// findInt(5.5);

// Q6: Implement enqueue and dequeue using only two stacks

// var inputStack = []; // First stack
// var outputStack = []; // Second stack

// // For enqueue, just push the item into the first stack
// function enqueue(stackInput, item) {
//   return stackInput.push(item);
// }

// function dequeue(stackInput, stackOutput) {
//   // Reverse the stack such that the first element of the output stack is the
//   // last element of the input stack. After that, pop the top of the output to
//   // get the first element that was ever pushed into the input stack
//   if (stackOutput.length <= 0) {
//     while(stackInput.length > 0) {
//       var elementToOutput = stackInput.pop();
//       stackOutput.push(elementToOutput);
//     }
//   }

//   return stackOutput.pop();
// }

//Q7: Make this work
//duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// let array = [1, 2, 3, 4, 5];

// console.log(array.concat(array));

// Q8: Write a "mul" function which will properly when invoked as below syntax
// console.log(mul(2)(3)(4)); // output : 24
// console.log(mul(4)(3)(4)); // output : 48

//first Way

// const calculate = (x, y, z) => {
//   return x * y * z;
// };

// console.log(calculate(2, 3, 4));

//second Way

// function mull(x) {
//   return function (y) {
//     return function (z) {
//       return x * y * z;
//     };
//   };
// }

// console.log(mull(2)(3)(4)); // output : 24
// console.log(mull(4)(3)(4)); // output : 48

// Q9: Write a function that would allow you to do this?

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

// function createBase(baseNumber) {
//   return function (N) {
//     return baseNumber + N;
//   };
// }

// let addSix = createBase(6);

// console.log(addSix(10));

//Q10: FizzBuzz Challenge
// Problem
// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.

// for (let i = 0; i <= 100; i++) {
//   if (i % 3 === 0 && !(i % 5 === 0)) {
//     console.log("fizz");
//   } else if (i % 5 === 0 && !(i % 3 === 0)) {
//     console.log("buzz");
//   } else if (i % 5 === 0 && i % 3 === 0) {
//     console.log("fizzbuzz");
//   } else {
//     console.log(i);
//   }
// }

//--second way

// for (let i = 1; i <= 100; i++) {
//   let f = i % 3 == 0,
//     b = i % 5 == 0;
//   console.log(f ? (b ? "FizzBuzz" : "Fizz") : b ? "Buzz" : i);
// }

// Q11: Given two strings, return true if they are anagrams of one another

// let a = "Mary";
// let b = "Army";

// function checkAnagram(a, b) {
//   let readyFormatA = a.toLowerCase();
//   let readyFormatB = b.toLowerCase();
//   readyFormatA = readyFormatA.split("").sort().join("");
//   readyFormatB = readyFormatB.split("").sort().join("");

//   return readyFormatA === readyFormatB;
// }

// console.log(checkAnagram(a, b));

//Q12: How would you use a closure to create a private counter?

// function counter() {
//   var _counter = 0;
//   // return an object with several functions that allow you
//   // to modify the private _counter variable
//   return {
//     add: function (increment) {
//       _counter += increment;
//     },
//     retrieve: function () {
//       return "The counter is currently at: " + _counter;
//     },
//   };
// }

// // error if we try to access the private variable like below
// // _counter;

// // usage of our counter function
// var c = counter();
// c.add(5);
// c.add(9);

// // now we can access the private variable in the following way
// c.retrieve(); // => The counter is currently at: 14

// Q16: Write a function that would allow you to do this
// multiply(5)(6);

// function multiply(x) {
//   return function (y) {
//     return x * y;
//   };
// }

// console.log(multiply(5)(6));

//Q17: How does the this keyword work? Provide some code examples

// const products = {
//   price: 50,
//   title: "book1",
//   func: function () {
//     return this.price;
//   },
// };

// console.log(products.func());

// Q18: How would you create a private variable in JavaScript?

// function foo(bar) {
//   this.setBar = function () {
//     return (bar = 5);
//   };
//   this.getBar = function () {
//     return bar;
//   };
// }

// let newFoo = new foo(5);
// console.log(newFoo.bar);
// console.log(newFoo.getBar());

const btnGet = document.querySelector("#get-data");

const sendHttpRequest = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.onerror = () => {
      reject("error");
    };
    xhr.send();
  });
  return promise;
};

const getData = () => {
  sendHttpRequest("GET", "https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

async function asyncGetData() {
  await sendHttpRequest();
  getData();
}

btnGet.addEventListener("click", asyncGetData);

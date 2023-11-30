//your JS code here. If required.
// script.js

const outputDiv = document.getElementById("output");

function manipulateArray(array) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(array);
    }, 3000);
  });
}

function filterOddNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredArray = arr.filter((num) => num % 2 === 0);
      resolve(filteredArray);
    }, 1000);
  });
}

function multiplyEvenNumbers(arr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const multipliedArray = arr.map((num) => (num % 2 === 0 ? num * 2 : num));
      resolve(multipliedArray);
    }, 2000);
  });
}

const inputArray = [1, 2, 3, 4];

manipulateArray(inputArray)
  .then(filterOddNumbers)
  .then(multiplyEvenNumbers)
  .then((result) => {
    outputDiv.textContent = JSON.stringify(result);
  });

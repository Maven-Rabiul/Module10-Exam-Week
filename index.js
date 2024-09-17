
/* 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/

function calculateDifference(a, b) {return a - b;}
let output = calculateDifference(100, 5);
console.log(output);


/*2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.  */


function isOdd(number) {
    return number % 2 !== 0
}
console.log(isOdd(1)); //true
console.log(isOdd(2)); //false

/* 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array. */

function findMin(numbers){
    return Math.min(...numbers);

}
let numbers = [85,100,25,32,76,55,59,11];
console.log(findMin(numbers));

/* 4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers. */

function filterEvenNumbers(arr){
    return arr.filter(number=>number % 2===0);
}

let number=[8,10,11,66,12,79,13,14,54,15,16,80,17,22,18,32,19,20];
let evenNumbers=filterEvenNumbers(number);
console.log(evenNumbers);
/*5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order. */

function sortArrayDescending(arr){
    return arr.slice().sort((a,b) => b-a);

}
    let numArray = [20,23,22,28,25,32,55,66,80,62];
    let sortedArray = sortArrayDescending(numArray);

console.log(sortedArray);

/* 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.  */

function lowercaseFirstLetter(string){
    return string.replace(/^./,match => match.toLowerCase())
}
let result = lowercaseFirstLetter("HELLO wORLD");
console.log(result);
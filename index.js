
/*Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/

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




/*Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.*/

function calculateDifference(a, b) {return a - b;}
let output = calculateDifference(100, 5);
console.log(output);

/*2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.  */


function isOdd(number) {
    return number % 2 !== 0
}
console.log(isOdd(1));
console.log(isOdd(2));

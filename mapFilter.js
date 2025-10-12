const prompt = require('prompt-sync')();

// 1. Double the Numbers

// Question:
// Given an array [1, 2, 3, 4], return a new array where each number is doubled.
// Hint: Use map().
// Expected Output:
// [2, 4, 6, 8]

const arrOne = [1, 2, 3, 4]
console.log(arrOne.map(elem =>  elem * 2));


// Add 5 to Each Number
// Question:
// From [10, 20, 30, 40], add 5 to every element.
// Expected Output:
// [15, 25, 35, 45]

const arrTwo = [10, 20, 30, 40]
console.log(arrTwo.map(elem => elem + 5));


// Filter Even Numbers
// Question:
// From [1, 2, 3, 4, 5, 6], get only even numbers.
// Expected Output:
// [2, 4, 6]

const arrThree = [1, 2, 3, 4, 5, 6]
console.log(arrThree.filter(num => num % 2 === 0));

// Filter Numbers Greater Than 50
// Question:
// From [10, 55, 78, 23, 90, 44], get all numbers greater than 50.
// Expected Output:
// [55, 78, 90]

const arrFour = [10, 55, 78, 23, 90, 44];
console.log(arrFour.filter(num => num > 50));


// Find First Negative Number
// Question:
// From [3, 7, -2, 8, -5, 9], find the first negative number.
// Expected Output:
// -2

const arrFive = [3, 7, -2, 8, -5, 9];
console.log(arrFive.find(num => num < 0));

// Print Each Element
// Question:
// Given [5, 10, 15, 20], print each element using console.
// Expected Output (console):

// 5
// 10
// 15
// 20

const arrSix = [5, 10, 15, 20]
arrSix.map(num => console.log(num))



// Get Square of Each Number
// Question:
// Given [2, 3, 4, 5], return array of their squares.
// Expected Output:
// [4, 9, 16, 25]

const arrSeven = [2, 3, 4, 5];
console.log(arrSeven.map(num => num ** 2));


// Count Numbers Greater Than 10
// Question:
// From [2, 5, 12, 18, 7, 25], count how many numbers are greater than 10.
// Expected Output:
// 3

const arrEight = [2, 5, 12, 18, 7, 25];
let count = 0
arrEight.map(elem => {
    if (elem > 10) {
        count ++
    }
})
console.log(count);

// another way 

console.log(arrEight.filter(elem => elem > 10).length);

// another way 

console.log(arrEight.reduce((acc, num) => {
    if (num > 10) {
        acc ++;
    }
    return acc;
},0));      // by default reduce a inital value 0 thake na array er first element thake !!





// Sum of All Numbers
// Question:
// Find total sum of [10, 20, 30, 40].
// Expected Output:
// 100

const arrNine = [10, 20, 30, 40];
console.log(arrNine.reduce((total, curr) => total + curr));


// Find First Odd Number Greater Than 10
// Question:
// From [2, 4, 11, 13, 8, 15], find the first odd number greater than 10.
// Expected Output:
// 11

const arrTen = [2, 4, 11, 13, 8, 15];
console.log(arrTen.find(num => num > 10 && num % 2  !== 0));


// Multiply All Numbers
// Question:
// From [2, 3, 4], multiply all numbers together.
// Expected Output:
// 24

const arrEleven = [2, 3, 4]
console.log(arrEleven.reduce((total, curr) => total*curr));

// Get All Odd Numbers and Square Them
// Question:
// From [1, 2, 3, 4, 5, 6, 7], first take only odd numbers, then square them.
// Expected Output:
// [1, 9, 25, 49]

const arrTwelve = [1, 2, 3, 4, 5, 6, 7];

const oddNumbers = arrTwelve.filter(num => num % 2 !== 0)
console.log(oddNumbers.map(num => num ** 2));

// Create Sentence from Words
// Question:
// Given ["I", "love", "coding"], join them into a single string.
// Expected Output:
// "I love coding"

const arrThirteen = ["I", "love", "coding"];
console.log(arrThirteen.join(' '));

// another way 

console.log(arrThirteen.reduce((acc, word)=> `${acc} ${word}`));


// Find Minimum Number
// Question:
// From [9, 2, 14, 7, 1, 8], find the smallest number.
// Expected Output:
// 1

const arrFourteen = [9, 2, 14, 7, 1, 8];
console.log(arrFourteen.reduce((min, curr)=> {
    if (min > curr)  min = curr;
    return min;
}));

// Reverse Words Using Reduce
// Question:
// From ["one", "two", "three"], return ["three", "two", "one"].
// Expected Output:
// ["three", "two", "one"]

const arrFifteen = ["one", "two", "three"]

// another one using reduce 

console.log(arrFifteen.reduce((acc, curr)=> `${curr} ${acc}`).split(' ')); // age accumalator a arrary[i] thakbe then protibar current value first a add hobe then split diye sheta array te convert kore nichi.
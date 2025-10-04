const prompt = require('prompt-sync')();

// ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করো
//👉 for loop / while loop ব্যবহার করে।

let i = 1
while (i <= 10) {
    console.log(i);
    i++;
}


// ১ থেকে n পর্যন্ত সংখ্যা প্রিন্ট করো

// 👉 ইউজারের কাছ থেকে n ইনপুট নিয়ে।

let n = parseInt(prompt('Enter a number : '))

for (let i = 1; i <= n; i++) {
    console.log(i);
}



//  ১ থেকে n পর্যন্ত সংখ্যার যোগফল বের করো

// 👉 Example: n = 5 → Result = 1+2+3+4+5 = 15

let n2 = parseInt(prompt('Enter a number : '))
let total = 0;
for (let i = 1; i <= n2; i++) {
    total += i
}
console.log(`The total of ${n2} is ${total}`);

//  ১ থেকে ১০০ পর্যন্ত সব জোড় সংখ্যা প্রিন্ট করো

for (let i = 1; i < 101; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//  ১ থেকে ১০০ পর্যন্ত সব বিজোড় সংখ্যা প্রিন্ট করো

for (let i = 1; i < 101; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


//  গুণের নামতা প্রিন্ট করো

// 👉 ইউজার ইনপুট নেবে কোন সংখ্যার নামতা চাই। (যেমন ৫ এর নামতা: ৫×১=৫, ৫×২=১০ …)

let userInput = parseInt(prompt("Enter a number to get multiplication table : "))

for (let i = 1; i <= 10; i++) {
    console.log(`${userInput} * ${i} = ${userInput * i} `);
}

// 7. Factorial বের করো

// 👉 n! = 1×2×3×...×n

let userInput2 = parseInt(prompt('Enter a number to get a factorial : '))

let factorial = 1;
for (let index = 1; index <= userInput2; index++) {
    factorial *= index;
}
console.log(factorial);

// 8. Reverse Number Printing

// 👉 n থেকে 1 পর্যন্ত সংখ্যা প্রিন্ট করো।

let userInput3 = parseInt(prompt("Enter a number to get its all reversed child : "))

while (userInput3 >= 1) {
    console.log(userInput3);
    userInput3--;
}


// 9. Sum of Even Numbers

// 👉 ১ থেকে n পর্যন্ত সব জোড় সংখ্যার যোগফল বের করো।
let totalEven = 0;
let userInput4 = parseInt(prompt('Enter a number to get the all even numbers total : '))
for (let i = 1; i <= userInput4; i++) {
    if (i % 2 === 0) {
        totalEven += i;
    }
}
console.log(totalEven);



// 10. Multiples of 3

// 👉 ১ থেকে ৫০ পর্যন্ত ৩ দিয়ে বিভাজ্য সব সংখ্যা প্রিন্ট করো।



for (let i = 1; i < 51; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}



// 11. String Length বের করো

// 👉 কোনো স্ট্রিং এর দৈর্ঘ্য বের করো (str.length ব্যবহার না করে, লুপ দিয়ে)।

let str = 'Sayeed shorif'

let strLength = 0;
for (const element of str) {
    strLength++;
}
console.log(strLength);



// . Count Vowels and Consonants

// 👉 একটি স্ট্রিং এ কতগুলো vowel (a, e, i, o, u) এবং consonant আছে তা বের করো।

let vowels = 'aeiou'
let normalVar = 'sayeed shorif'
let vowelsNum = 0;
let constantNum = 0;
let normalVarWithoutSpace = normalVar.replaceAll(' ', '').toLowerCase();


for (let i = 0; i < normalVarWithoutSpace.length; i++) {
    if (vowels.includes(normalVarWithoutSpace[i])) {
        vowelsNum++
    } else {
        constantNum++
    }

}
console.log(vowelsNum);
console.log(constantNum);


// 13. Reverse a String

// 👉 "hello" → "olleh"

let userInput5 = (prompt('Enter a string you want to reverse : ')).replaceAll(' ', '')
let reversedStr = '';
for (let i = userInput5.length - 1; i >= 0; i--) {
    reversedStr += userInput5[i];
}
console.log(reversedStr);



// 14. Palindrome Checker

// 👉 কোনো স্ট্রিং উল্টে দিলেও যদি একই থাকে তবে সেটি palindrome।
// Example: "madam", "level"

let userInput6 = ((prompt('Enter a word to check if its palindrome or not : ')).trim()).toLowerCase();

let reversedStr2 = '';
for (let i = userInput6.length - 1; i >= 0; i--) {
    reversedStr2 += userInput6[i];
}
console.log(`Palindrome ? = ${userInput6 == reversedStr2}`);



// 15. Count Spaces in a Sentence

// 👉 "I love programming" → 2 spaces

let userInput7 = prompt('Enter a sentence to count its spaces : ')
let spaceCount = 0;
for (let i = 0; i < userInput7.length; i++) {
    if (userInput7[i] == ' ') {
        spaceCount++;
    }

}
console.log(`${userInput7} has ${spaceCount} spaces`);


// 16. Find Character Frequency

// 👉 একটি স্ট্রিং এ কতবার একটি ক্যারেক্টার এসেছে তা বের করো।
// Example: "banana" → a = 3, n = 2, b = 1

let frequencyVar = 'banana'.toLowerCase()
let obj = {}

for (let i = 0; i < frequencyVar.length; i++) {
    if (frequencyVar[i] in obj) {
        obj[frequencyVar[i]]++
    } else {
        obj[frequencyVar[i]] = 1;
    }

}
console.log(obj);


// 17. Print Each Character Separately

// 👉 "Naeeim" → N
// a
// e
// e
// i
// m
let separteVar = 'Naeeim';

for (let index = 0; index < separteVar.length; index++) {
    console.log(separteVar[index]);
}

// 18. Remove Vowels from String

// 👉 "Programming" → "Prgrmmng"

let normalText = 'Programming';
let vowelsRemovedText = ''
for (let i = 0; i < normalText.length; i++) {
    if (!vowels.includes(normalText[i])) {   // vowels upore alredy ek bar declare kora ace.
        vowelsRemovedText += normalText[i];
    }
}
console.log(vowelsRemovedText);


// 19. Word Counter

// 👉 "I am learning JavaScript" → 4 words

let sentence = 'I am learning JavaScript hi  gg  g';
let wordCount = sentence.trim().split(/\s+/).length;  // regex from chatgpt normal space 2 ta ek sathe dile count ulta palta hoye jacce.
console.log(wordCount);


// 20. Capitalize First Letter of Each Word

// 👉 "hello world" → "Hello World"


let sentence2 = 'hello world';
let newSentenceArr = sentence2.trim().split(' ');

for (let i = 0; i < newSentenceArr.length; i++) {
    let word = newSentenceArr[i];
    newSentenceArr[i] = word.charAt(0).toUpperCase() + word.slice(1); // first letter uppercase kore then baki letter gulo slice er maddhome abr add kore dici.
}
console.log(newSentenceArr.join(' '));


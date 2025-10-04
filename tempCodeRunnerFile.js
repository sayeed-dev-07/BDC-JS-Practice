let sentence2 = 'hello world';
let newSentenceArr = sentence2.trim().split(' ');

for (let i = 0; i < newSentenceArr.length; i++) {
    let word = newSentenceArr[i];
    newSentenceArr[i] = word.charAt(0).toUpperCase() + word.slice(1);
}        
console.log(newSentenceArr.join(' '));
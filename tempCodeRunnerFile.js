const arrFifteen = ["one", "two", "three"]

// console.log(arrFifteen.reverse());

// another one using reduce 

console.log(arrFifteen.reduce((acc, curr)=> `${curr} ${acc}`).split(' '));
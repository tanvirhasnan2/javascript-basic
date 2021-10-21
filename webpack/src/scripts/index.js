import '../styles/index.scss'

// var s = `      Hello I am 

// aasldkf lkjlkj 

// sdkfsldjfsldjf`

// console.log(s)

var name = `Tanvri Hasnan`
var age = 28

console.log(`My name is: ${name} and I am ${age} years old. I am ${age < 18 ? 'not ' : ''}adult`);


var sqr = (n=1) => n*n
console.log(sqr(5));


var greet = (name = 'Tanvir', msg) => {
    console.log(name.length)
    console.log(`${msg}! ${name}`)
}

greet('hello')
import '../styles/index.scss'

// var s = `      Hello I am 

// aasldkf lkjlkj 

// sdkfsldjfsldjf`

// console.log(s)

// var name = `Tanvri Hasnan`
// var age = 28

// console.log(`My name is: ${name} and I am ${age} years old. I am ${age < 18 ? 'not ' : ''}adult`);


// var sqr = (n=1) => n*n
// console.log(sqr(5));


// var greet = (name = 'Tanvir', msg) => {
//     console.log(name.length)
//     console.log(`${msg}! ${name}`)
// }

// greet('hello')




//Iterator
// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function(){
//         let currentValue = this.start
//         const self = this
//         return {
//             next() {
//                 return {
//                     done: currentValue > self.end,
//                     value: self.end ? undefined : currentValue++
//                 }
//             }
//         }
//     }
// }

// for (let v of obj){
//     console.log(v);
// }

// let iterate = obj[Symbol.iterator]()
// console.log(iterate.next);
// console.log(iterate.next);
// console.log(iterate.next);
// console.log(iterate.next);
// console.log(iterate.next);
// console.log(iterate.next);
// console.log(iterate.next);


// let a = 10, b = 20

// let obj = {
//     a: a,
//     b: b
// }

// let obj = {
//     a,
//     b,
//     print(){
//         console.log(this);
//     }
// }

// console.log(obj);
// obj.print()

let s1 = Symbol()
let s2 = Symbol('Test Symbol')

console.log(s1);
console.log(s2);

console.log(s1 === s2);


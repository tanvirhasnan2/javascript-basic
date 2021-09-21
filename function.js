// function functionName(){
//     console.log('This is a function')
// }

// function add(){
//     var a = 10
//     var b = 20
//     console.log(a+b)
// }

// function sub(){
//     var a = 50
//     var b = 30
//     console.log(a-b)
// }


// functionName()
// add()
// sub()

// for(var i = 0; i<10; i++){
//     add()
// }

// function add(a,b){
//     var result = a+b
//     console.log(result)
// }

// add(20,30)
// add('I ','am')


// function sub(a,b){
//     var result = a - b
//     console.log(result)
// }

// sub(5, 10)


// var arr1 = [10, 5, 2,3]
// var arr2 = [5, 3, 2]
// var arr3 = [11, 12,7]

// var sum1 = 0
// for (var i=0; i<arr1.length; i++){
//     sum1+= arr1[i]
// }
// console.log(sum1)

// var sum2 = 0
// for(var i=0; i<arr2.length; i++){
//     sum2 += arr2[i]
// }
// console.log(sum2)

// function sumOfArray(arr){
//     var sum = 0
//     for(var i = 0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     console.log(sum)
// }

// arr1 = [10, 5, 2,3]
// sumOfArray(arr1)
// arr2 = [100, 5, 2,3]
// sumOfArray(arr2)

// function test(){
//     for(var i = 0; i<arguments.length; i++){
//         console.log(arguments[i])
//     }
// }
// test(1,2,3)


// function sumAll(){
//     sum = 0
//     for(var i=0; i<arguments.length; i++){
//         sum+= arguments[i]
//     }
//     console.log(sum)
// }

// sumAll(1,2,3,4,5,6,7,8,9,10)
// sumAll(20,30,1,0,55,58,47)
// sumAll(55,14,2,3,77)


// function addAll(){
//     var sum = 0
//     for(i=0;i<arguments.length; i++){
//         sum += arguments[i]
//     }
//     return sum
// }

// var res = addAll(1,2,3,4,5,6,7,8,9,10)
// console.log(res)

// function person(name1, email1){
//     return{
//         name1,
//         email1
//     }
// }

// console.log(person(12, 15))


// var addition = function(a,b){
//     return a+b
// }

// setTimeout(function(){
//     console.log('This is annonymus function')
// }, 5000)

// var another = addition(44,56)
// console.log(another)

// var sum =0
// function add(a,b){
    
//     sum = a+b
//     console.log(sum)
// }
// add()

// function sub(a,b){
//     var result = a - b
//     console.log(result)
// }

// sub(1,2)

// function person(name1, email1){
//     return{
//         name: name1,
//         email: email1
//     }
// }

// console.log(person('TH', 'tanvirhasnan2@gmail.com'))

function something(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        }
    }
    var message = greet + ' ' +getFirstName()
    console.log(message)
    
}
something('Good Morning', 'Tanvir Hasnan')
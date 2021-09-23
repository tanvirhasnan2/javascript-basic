
function sub(a,b){
    var result = a - b
    return result
}
var cnti = sub(5, 10)
console.log(cnti)



var addition = function(a,b){
    return a+b
}

console.log(addition(5,10))

// Multiple line Arrow Function
var sub2 = (a,b) => {
    return a+b
    //We can write multiple line code here
}
console.log(sub2(11,12))

// Single line arrow function
var mul = (a,b) => a*b

console.log(mul(5,6))


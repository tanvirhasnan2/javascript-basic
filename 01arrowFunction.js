
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

//-----------------------Practice --------------------
var arr1 = [10,20,30,40]
var isFound = false
var find = (a) => {
    for(var i=0; i<arr1.length; i++){
        if(a===arr1[i]){
            console.log('Found', a, 'at the index', i)
            isFound = true
        }
    }
    if(!isFound){
        console.log('Not found')
    }
}

find(70)
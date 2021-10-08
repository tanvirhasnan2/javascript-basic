// var arr = [1,2,3,4,5,6]
// var sum = 0
// var sqrArr = arr.map(function(value){
//     return value * value * value
// })

// console.log(arr)
// console.log(sqrArr);



var arr = [1,2,3,4,5,6]
var newArr = []
function map(arr, cb){
    for( var i = 0; i< arr.length; i++){
        var temp = cb(arr[i],i,arr)
        newArr.push(temp)
    }
    return newArr
}

var qb = map(arr,function(value){
    return value * value * value
})

console.log(qb)

// console.log(map(arr))




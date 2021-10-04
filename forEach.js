// var arr1 = [1,2,3,4,5]
// var sum = 0
// arr1.forEach(function(x, index, arr){
//     // console.log(value, index, arr)
//     sum+= x
// })

// console.log(sum)

// function forEach(arr, cb){
//     for (var i=0; i<arr.length; i++){
//         cb(arr[i],i,arr)
//     }
// }

// // var sum = 0
// forEach(arr1, function(value,index,arr){
//     console.log(value,index,arr)
// })

// forEach(arr1, function(value, index, arr){
//     arr1[index] = value +5
//     console.log(value,index,arr)
// })
// // console.log(arr1)



var arr1 = [1,2,3,4,5]
arr1.forEach(function (value, index, arr){
    if(value >3){
        console.log(value, arr[value])
    }
})








// var arr = [5,7,14,3,32,21,25,11,23,51]
// var result = 0
// for(var i=0; i<arr.length; i++){
//     arr[i] = arr[i]+2
//     result += arr[i]
    
    
// }

// console.log(arr)
// console.log(result)




// var arr = [5,7,14,3,32,21,25,11,23,51]

// for(var i=0; i<arr.length; i++){
//     if(arr[i]%2!=0){
//         console.log(arr[i])
//     } else {
//         continue
//     }
// }




// var arr = [5,2,6,7,3]
// var result=0
// for(var i=0; i<arr.length; i++){
//     if(arr[i]%2!=0){
//         console.log(arr[i])
//         result+= arr[i]
//     } else {
//         continue
//     }
// }
// console.log(result)


var arr = [5,2,6,7,3]
var result=0
for(var i=0; i<arr.length; i++){
    if(arr[i]%2===0){
        console.log(arr[i])
        result+= arr[i]
    } else {
        continue
    }
}
console.log('Summation of ODD number: ' + result)
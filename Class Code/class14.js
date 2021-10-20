// var print = (num) => {
//     var sum = ''
//     for(var i = 1; i<=num; i++){
//         sum+=i + ' '
//         console.log(sum);
//     }
// }

// print(5)
// print(10)

// var print = (num) => {
    
//     for(var i = num; i>=1; i--){
//         var sum = ''
//         for(var j = 1; j<=i; j++){
//             sum += '*' + ' '
//         }
//         console.log(sum);
//     }
// }

// print(10)


//While loop
// var num = 0
// while(num<10){
//     console.log('hello', num);
//     num++
// }


//Array

var arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr[0] + arr[3]);
var arr2 = []
for(var i=0; i<arr.length; i++){
    if(arr[i] > 5) arr2.push(arr[i] + 10)
        else arr2.push(arr[i])
}

console.log(arr2);
console.log(arr);


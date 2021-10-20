// var arr = [10,14,12,5,6,7]
// var sum = 0
// arr.map(val => sum+=val)
// console.log(sum);

// var arr = [10,14,12,5,6,7]

// var total = arr.reduce((prev,curr,index) => {
//     console.log('index = ', index, ',', prev,curr);
//     return prev +curr
// })

// console.log(arr);
// console.log(total);

// var input = '10 14 12.32'
// var res = input.split(' ').map(ele => +ele)
// var [a,b,c] = res
// console.log(a,b,c);

// var num = '10 14 15 3.35'
// var res = num.split(' ').map(ele => +ele)
// console.log(res);
// var [a,b,c,d] = res
// console.log(a,b,c,d);


// var arr = [10,14,12,5,6,7]

// var total = arr.reduce((prev,curr,index) => {
//     // console.log('index = ', index, ',', prev,curr);
//     return prev +curr
// }, 100 )
// console.log(total);

// var arr = [10,14,12,5,6,7]
// var res = arr.includes(10)
// console.log(res);


// var arr = [10,14,12,5,6,7]
// var check = (arr,value) => {
//     for(var i = 0; i<arr.length; i++){
//         if(arr[i] === value){
//             return true
//         }
//     }
//     return false
// }

// console.log(check(arr, 1111));




// var arr = [10,14,12,5,6,7]
// var res = arr.includes(12,1)
// console.log(res);

var student1 = {
    name: 'Tanvir',
    roll: 999,
    age: 28,
    phone: '01676938640'
}


var student2 = {
    name: 'Tanvir',
    roll: 999,
    age: 28,
    phone: '01676938640',
    printName: function(){
        console.log('My name is:',this.name)
    }
}

student2.printName()

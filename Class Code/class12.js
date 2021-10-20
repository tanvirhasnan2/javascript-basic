// var myArrowFunc = num => {
//     return num*2
// }

// console.log(myArrowFunc(8));


// var arrowFunc = (a,b,c) => {
//     var sum = a + b + c
//     return sum
// }

// var res = arrowFunc(1,2,3)
// console.log(res);

// var printSomething = () => console.log('Hello');
// printSomething()

// var mul = (a,b) =>{
//     var c = 10
//     res = a*b*c
//     return res
// }

// var fres = mul(5,10)
// console.log(fres);


// var sum = ''
// for (var i=0; i<10; i++){
//     sum+=i + '\n'
// }

// console.log(sum);
// var num1 = 7
// for(var i = 1; i<=10; i++){
//     console.log(num1,'*',i,'=', num1*i);
// }

var buyingPrice = 600
var sellingPrice = 500
var income = sellingPrice - buyingPrice

if(income > 0){
    console.log('Profit = ', income, 'Taka');
} else if(income<0) {
    console.log('Loss = ',income * -1, 'Taka');
} else {
    console.log('No Profit or Loss = ', income, 'Taka');
}






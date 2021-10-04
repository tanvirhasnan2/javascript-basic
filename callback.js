// function sample(a, b, cb){
//     var c = a + b
//     var d = a - b
//     var result = cb(c,d)
//     return result
// }

// function sum(a, b){
//     return a+b
// }

// var result1 = sample(5,8,sum)
// console.log(result1)

// var result2 = sample(5,8,function (c,d){
//     return c-d
// })
// console.log(result2)

// var result3 = sample(5,8, function (c,d){
//     return c * d
// })
// console.log(result3)



// function something(a,b,cb){
//     var c = a + b
//     var d = a - b
//     var result = cb(c,d)
//     return result
// }

// var result5 = something(5,9,function (c,d){
//     return c + d
// })

// console.log(result5)




// function hello(name){
//     print(name);
//     print('callback fns')
//     print('callback fns2')
//     print('callback fns3')
// }

// function print(args){
//     console.log(args);
// }

// hello('Tanvir')
// hello('call back func')


// function hello(name, print){
//     print(name)
// }

// hello('Tanvir Hasnan', function(name){
//     console.log(name)
// })

// hello('Tanvir', function(name){
//     var result = name.length
//     console.log(result)

// })

// function add(a,b,sum){
//     var res1 = a + b
//     var res2 = a-b
//     var res3 = sum(res1, res2)
// }

// add(5,2, function(x, y){
//     var fRes = x + y
//     console.log(fRes)
// })

// add(5,2, function(x,y){
//     var fRes = x-y
//     console.log(fRes)
// })


// function something (name, split){
//     split(name)
// }

// something('Tanvir Hasnan Babu', function(name){
//     var res = name.split(" ")[2]
//     console.log(res)
// })

// something('Tanvir Hasnan Babu', function(name){
//     console.log(name);
// })

// var prsn = {
//     name: 'Tanvir Hasnan',
//     age: 17,
//     email: 'tanvirhasnan2@gmail.com'
// }

// function mySelf(person, callback){
//     console.log('Person:', person.name + ' (' + person.age +')')
//     if (person.age>= 18){
//         callback(person.email)
//     } else {
//         console.log('You are under aged')
//     }
// }

// mySelf(prsn, function(email){
//     console.log('Email sent to', email)
// })




// function print(data,callback1,callback2){
//     console.log("Original Data:", data)
//     callback1(data)
//     callback2(data)
// }

// print('Hello Tanvir',function(data){
//     var data = data.toUpperCase()
//     console.log('Uppercase:', data)
// }, function(data){
//     var data = data.toLowerCase()
//     console.log('Lower Case:', data)
// })


var arr1 = [1,2,3,4,5,6]

function something(arr){
    for( var i=0;i<arr.length;i++){
        console.log(arr[i], i, arr);
    }
}


something(arr1)






















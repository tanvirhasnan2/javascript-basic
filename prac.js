// var num1 = 15
// var str1 = 'hello hey'
// var arr1 = [1,22,333,425,1515]
// var j = ''
// for(var i=0; i<5; i++){
//     // console.log(arr1[i])
//     j += arr1[i] + ' '
//     console.log('Process',i+1 + ':', j)
// }
// console.log(j)

// var obj1 = {
//     name: 'Farzana',
//     age: 2,
//     Gender: 'Female'
// }
// obj1.x = 45

// var obj5 = {
//     Name: 'Tan',
//     Age: 10,
//     Location: 'Dhaka'
// }


// console.log(obj5[name])

// var obj2 = Object()
// obj2.m = 1234
// console.log(obj2)


// var obj3 = new Object()
// obj3.mass = 45
// console.log(obj3)



// console.log(obj1.Age)
// console.log(obj3)



// var obj5 = {
//     Name: 'Tan',
//     Age: 10,
//     Location: 'Dhaka'
// }


// console.log(obj5)

// console.log(obj5['Age'])


// var show = 'Name'
// console.log(obj5[show])

// obj5['Name'] = 200
// console.log(obj5)
// obj5['Age'] = 44
// console.log(obj5)



// var obj5 = {
//     Name: 'Tan',
//     Age: 10,
//     Location: 'Dhaka'
// }

// delete obj5.Name
// console.log(obj5)


// var num = 10;
// switch(true) {
//     case (num>5) : 
//         console.log("Greater");
//         break;
//     case (num==5) : 
//         console.log("Equal");
//         break;
//     case (num<5) : 
//         console.log("Smaller");
//         break;
//     default: console.log("Nothing");
// }



// var person = {
//     Name: 'Tanvir',
//     Age: 25,
//     Gender: 'Male'
// }

// var person2 = Object()
// person2.Name = 'Farzana',
// person2.Age = 25,
// person2['Gender'] = 'Female'

// console.log(person.Name === person2.Name)
// console.log(person.Age === person2.Age)


// console.log(JSON.stringify(person))
// console.log(JSON.stringify(person2))
// console.log(JSON.stringify(person) === JSON.stringify(person2))

// var person3 = new Object()
// person3.Name = 'Ochena',
// person3.Age = 34,
// person3['Gender'] = 'Male'


// console.log(person)
// console.log(person2)
// console.log(person3)

// console.log(person.Age)
// console.log(person['Name'])



// var person = {
//     Name: 'Tanvir',
//     Age: 25,
//     Gender: 'Male'
// }

// delete person.Name
// console.log(person)
// for (var i in person){
//     console.log(i)
//     console.log(person[i])
// }


// var arr = [1,2,3,4,5,6,7,8,9]
// var sum = ''
// for(var i=0; i<arr.length; i++){
//     sum+=arr[i]
//     console.log(sum)
// }



// //Shape 01
// var n = 50
// var sum = ''
// for(var i=0; i<n; i++){
//     sum += '* '
//     console.log(sum)
// }





// var person3 = new Object()
// person3.Name = 'Ochena',
// person3.Age = 34,
// person3['Gender'] = 'Male'

// console.log(person3)

// var newObject = {
//     People 1 : 'Tanvir',
//     p
// }

// var p = {
//     Height: '6 ft',
//     Weight: '90 KG'
// }

// p.Name = 'Tanvir'


// p['LastName'] = 'Hasnan'

// console.log(p)

// for ( var i in p){
//     // console.log(i)
//     console.log(i,':',p[i])
// }


// var person = {
//     Name: 'Tanvir',
//     Age: 25,
//     Gender: 'Male'
// }

// delete person.Name
// console.log(person)
// for (var i in person){
//     console.log(i)
//     console.log(person[i])
// }


// function add(a,b) {
//     var sum = a+b
//     console.log(sum)
// }

// add(10,20)

// var add = (a,b) => console.log(a*b)

// add(5,10)

// var div =() => console.log('Hello')

// div()

// var arr1 = [5,10,15]
// var arr2 = [10,10,15]
// var arr3 = [15,10,15]


// function sumArray(arr){
//     var sum = 0
//     for (i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     console.log(sum)
// }

// sumArray(arr1)
// sumArray(arr2)
// sumArray(arr3)


// var arr1 = [5,10,15]
// var arr2 = [10,10,15]
// var arr3 = [15,10,15]


// function sumArray(arr){
//     var sum = 0
//     for (i=0; i<arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum
// }

//sumArray(arr1)
// console.log(sumArray(arr1) + 5)
// sumArray(arr2)
// sumArray(arr3)

// function addAll(){
//     var sum = 0
//     for (var i=0; i<arguments.length; i++){
//         sum+= arguments[i]
//     }
//     console.log(sum)
// }

// addAll(1,2,3)
// addAll(1,2,3,4,5)


// function addAll(){
//     var sum = 0
//     for (var i=0; i<arguments.length; i++){
//         sum+= arguments[i]
//     }
//     return sum
// }

// var x = addAll(1,2,3)
// var y = addAll(1,2,3,4,5)
// console.log(x);
// console.log(y);


// function obj(firstName, lastName){
//     return {
//         firstName: firstName,
//         lastName: lastName
//     }
// }

// var str = obj('Tanvir', 'Hasnan')
// console.log(str)

// var addition = function(a,b){
//     return a+b
// }

// var j = addition(15,40)



// setTimeout(function(){
//     console.log('5 sec done')
// }, 5000)

// console.log(j)
// console.log(addition(10,20))
// console.log(addition(15,20))




function funOne(greet, name){
    function getFirstName(){
        if(name){
            return name.split(' ')[0]
        } else {
            return ''
        }
    }
    var message = greet +' ' + getFirstName()
    console.log(message)
}

funOne('Hello' + ' ' + 'Tanvir Hasnan')


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



var person = {
    Name: 'Tanvir',
    Age: 25,
    Gender: 'Male'
}

var person2 = Object()
person2.Name = 'Farzana',
person2.Age = 25,
person2['Gender'] = 'Female'

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



var person = {
    Name: 'Tanvir',
    Age: 25,
    Gender: 'Male'
}

for (var i in person){
    console.log(i)
    console.log(person[i])
}


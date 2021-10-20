// var student1 = {
//     name: 'Tanvir',
//     roll: 999,
//     age: 28,
//     phone: '01676938640'
// }


// var student2 = {
//     name: 'Tanvir',
//     roll: 999,
//     age: 28,
//     phone: '01676938640',
//     printName: function(){
//         console.log('My name is:',this.name)
//     }
// }

// student2.printName()

// var student = {
//     name: 'xcv'
// }
// student.name = 'Unknown'
// student.age = 15
// console.log(student);

// var student = {
//     stdName: 'Xysx',
//     age: 12,
//     roll: 02,
//     className: 'Five',
//     parentInfo: {
//         mothersName: 'Mrs. y',
//         fathersName: 'Mr. x'
//     }
// }

// var {stdName: myName, age: myAge, roll, parentInfo} = student
// var {mothersName, fathersName} = parentInfo
// console.log(myName,myAge,roll,mothersName,fathersName)

// var a = 'age'
// console.log(student[a])



var student = {
    stdName: 'Xysx',
    age: 12,
    roll: 02,
    className: 'Five',
    parentInfo: {
        mothersName: 'Mrs. y',
        fathersName: 'Mr. x'
    }
}

// student.age = 15
// student['age'] = 15
// console.log(student['age'],student['parentInfo']['mothersName'])

// var allKeys = Object.keys(student)
// var allValues = Object.values(student)

// var allEntries = Object.entries(student)



// for(var [k,v] of Object.entries(student)){
//     console.log('key:', k, '     value:',v)
// }


// for(var k of Object.keys(student)){
//     console.log(student[k])
// }

var arr = [
    {
        stdName: 'One',
        age: 13,
        roll: 02
    },
    {
        stdName: 'two',
        age: 14,
        roll: 03
    },
    {
        stdName: 'three',
        age: 15,
        roll: 04
    }
]

arr.map(ele => {
    console.log(ele.stdName, '---', ele.age);
})



// console.log(allEntries)



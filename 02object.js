/** We can define a object in 3 way
 * Way 01
    var obj = {
        a: 10
        b: 20
    }

* Way 02
    var obj = Object()  // Define a Object obj
    obj.x = 10          // add a property in obj object

* Way 03
    var obj5 = new Object()
    obj5.z = 10
 */


// Define a Object

var obj = {}
console.log('Type of Obj: ', typeof obj)

// Define object and add some property with value

var point = {
    x: 10,
    y: 20
}

console.log('\nPoint Object: ', point)

// We can add property and value in the object

var obj5 = {
    x: 20,
    y: 30
}

obj5.z = 40

console.log('\nAdded a new Property in Object obj5: ', obj5)

//************Uporer shobgula object define korechi Object Literal System ar maddome*********//

//*********** Ekhon constructor system a Object Define korbo ***************/

var obj = Object() // Define a Object obj
obj.x = 10 // add a property in obj object
console.log('\nDefine a Object by constructor:', obj)


// another system to define a object
var obj5 = new Object()
obj5.z = 10
console.log('\nAnother System to define a object:', obj5)




//---------------------------------Accessing Object Properties--------------------------
var point = {
    x: 10,
    y: 20,
    z: 30
}

// access using Dot(.) Notation
console.log('\nvalue of x is:',point.x)   
console.log('value of y is:',point.y)   
console.log('added two properties of the object:',point.x + point.z)


// access using Array [] Notation
console.log(point['x'])
console.log(point['y'])
console.log(point['z'])

// console.log(point['z'])


//Delete object properties
var obj5 = {
    Name: 'Tan',
    Age: 10,
    Location: 'Dhaka'
}

delete obj5.Name
console.log(obj5)

//Comparing Object
var obj1 = {
    a: 'Tan',
    b: 10,
    c: 'Dhaka'
}

var obj2 = {
    x: 'Tan',
    y: 10,
    z: 'Dhaka'
}

console.log(obj1===obj2) //False because memory location different


// Only compare the value of the property
if(obj1.a === obj2.x && obj1.b === obj2.y && obj1.c===obj2.z){
    console.log(true)
} else {
    console.log(false)
}
//First convert the object to string then compare the property and the value of object
console.log(JSON.stringify(obj1) === JSON.stringify(obj2))


var obj1 = {
    a: 'Tan',
    b: 10,
    c: 'Dhaka'
}

var obj2 = {
    a: 'Tan',
    b: 10,
    c: 'Dhaka'
}

console.log(obj1)

console.log('Convert to string and compare:', JSON.stringify(obj1) === JSON.stringify(obj2))
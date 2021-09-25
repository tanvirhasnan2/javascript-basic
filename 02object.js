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
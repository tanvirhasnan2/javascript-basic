/* -------------------------------------------concat() Method:--------------------------------------
The concat() method concatenates (joins) two or more arrays.

The concat() method does not change the existing arrays,
but returns a new array, containing the values of the joined arrays.
*/

var array1 = [1,2,3,4,5,6]
var array2 = [7,8,9,10]
var newArray = array1.concat(array2)
console.log('After applying concat 01: \n',newArray)

var array1 = [1,2,3,4,5,6]
var array2 = [7,8,9,10]
var array3 = ['c', 'c++', 'java', 'javascript']
var newArray = array1.concat(array2,array3)
console.log('After applying concat 02: \n',newArray)

var array1 = [1,2,3,4,5,6]
var array2 = [7,8,9,10]
var array3 = ['c', 'c++', 'java', 'javascript']
var newArray = array3.concat(array1,array2)
console.log('After applying concat 03: \n',newArray)



console.log('\n');
/* -------------------------------------------copyWithin() Method:--------------------------------------
The copyWithin() method copies array elements to another
position in an array, overwriting the existing values.

The copyWithin() does not add items to the array.

Syntax: array.copyWithin(target, start, end)

target --->	Required. The index position to copy the elements to
start ---> Optional. The index position to start copying elements from  (default is 0)
end ---> Optional. The index position to stop copying elements from (default is array.length)
*/
var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 0, 2);
console.log('Copy Banana to Orange and Paste at the index 2: \n', fruits)



console.log('\n');
/* -------------------------------------------push() Method:--------------------------------------
The push() method adds new items to the end of an array.

push() changes the length of the array and returns the new length.

Syntax: array.push(item1, item2, ..., itemX)
*/

var array1 = [1,2,3,4,5,6]
array1.push(100)
console.log('This number added at the last index of this array: \n',array1)


console.log('\n');
/* -------------------------------------------unshift() Method:--------------------------------------
The unshift() method adds new items to the
beginning of an array, and returns the new length.

unshift() overwrites the original array.
*/

var array1 = [1,2,3,4,5,6]
array1.unshift(100)
console.log('This number added at the first index of this array: \n', array1)



console.log('\n');
/* -------------------------------------------pop() Method:--------------------------------------

The pop() method removes the last element of an array.

pop() returns the element it removes.
*/
var array1 = [1,2,3,4,5,6]
array1.pop()
console.log('This number removes from the last index of this array: \n', array1)



console.log('\n');
/* -------------------------------------------shift() Method:--------------------------------------

The pop() method removes the last element of an array.

pop() returns the element it removes.
*/
var array1 = [1,2,3,4,5,6]
array1.shift()
console.log('This number removes from the first index of this array: \n', array1)



console.log('\n');
/* -------------------------------------------splice() Method:--------------------------------------
The splice() method adds and/or removes array elements.

splice() overwrites the original array.
*/

var array1 = [1,2,3,4,5,6]
array1.splice(3,0,555) //Delete 0 item and add 555 at index 3
console.log('Delete 0 item and add 555 at index 3: \n', array1)


var array1 = [1,2,3,4,5,6]
array1.splice(3,2) //delete 2 item from index 3
console.log('delete 2 item from index 3: \n', array1)


var array1 = [1,2,3,4,5,6]
array1.splice(3,2,100,200) //delete 2 item and add 100,200 from index 3 
console.log('delete 2 item from index 3: \n', array1)


console.log('\n');
/* -------------------------------------------reverse() Method:--------------------------------------
The reverse() method reverses the order of the elements in an array.

reverse() overwrites the original array.
*/

var array1 = [1,2,3,4,5,6]
array1.reverse()
console.log('Reverse the array: \n', array1)



console.log('\n');
/* -------------------------------------------join() Method:--------------------------------------
The join() method returns an array as a string.

The elements will be separated by a specified
separator. The default separator is comma (,).

join() does not change the original array.
*/

var array1 = [1,2,3,4,5,6]
var newString = array1.join() //Separate with (,) by default
console.log('Separate all elements as string 01: \n', newString)

var array1 = [1,2,3,4,5,6]
var newString = array1.join(' ') //Separate with (' ')
console.log('Separate all elements as string 01: \n', newString)

var array1 = [1,2,3,4,5,6]
var newString = array1.join(', ') //Separate with (', ')
console.log('Separate all elements as string 01: \n', newString)

var array1 = [1,2,3,4,5,6]
var newString = array1.join(' | ') //Separate with (' | ')
console.log('Separate all elements as string 01: \n', newString)






console.log('\n');
/* -------------------------------------------fill() Method:--------------------------------------
The fill() method fills specified elements in an array with a static value.

You can specify the position of where to start and end the filling.
If not specified, all elements will be filled.

fill() overwrites the original array.
*/

var array1 = [1,2,3,4,5,6]
array1.fill(0)
console.log('Filled with 0: \n', array1)

var array1 = [1,2,3,4,5,6]
array1.fill('ab')
console.log('Filled with ab: \n', array1)

var array1 = [1,2,3,4,5,6]
array1.fill(0.,0,4)
console.log('Filled with 0 from index 0 to index 3 : \n', array1)



console.log('\n');
/* -------------------------------------------isArray() Method:--------------------------------------
The isArray() method returns true if an object is an array, otherwise false.
*/


var array1 = [1,2,3,4,5,6]
var newArray = Array.isArray(array1)
console.log('Array or not: \n', newArray)


console.log('\n');
/* -------------------------------------------from() Method:--------------------------------------
The from() method returns an Array object from any object with a length property or any iterable object.

***amra jodi array1 = array2 bole ditam, taholeo copy hoto,
tokhon array 2 change korle automatic array 1 change hoa jeto, 
tai ai method use kore copy kora hoyeche. evabe copy korar por
array update korle shudhu notun array ta e change hobe.
*/

var array1 = [1,2,3,4,5,6]
var array2 = Array.from(array1) 
console.log('Coppy a array: \n', array2)
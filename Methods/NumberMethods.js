/* -------------------------------------------Number() Method:--------------------------------------
Number(value) converts a string or other value to
the Number type. If the value can't
be converted, it returns NaN.
*/

// Example 1
var x = '10'
var num = Number(x)
console.log('Convert to number 01: ',num)                 // Output: 10
console.log('Convert to number 02: ', num * 9)             // Output: 90

// Example 2
var x = true
var num = Number(x)
console.log('Convert to number 03: ',num)                 // Output: 1
console.log('Convert to number 04: ',num + 9)             // Output: 10

//Example 3
var x = false
var num = Number(x)
console.log('Convert to number 05: ',num)                 // Output: 0
console.log('Convert to number 06: ',num + 9)             // Output: 9

//Example 4
var num = Number('123')===123   //'Convert string to number
console.log(num)                //true

//Example 5
var num = Number('Hello')
console.log(num)                //NaN




console.log('\n')
/* -------------------------------------------toString() Method:--------------------------------------
The toString() method returns a number as a string.

All number methods can be used on any type
of numbers (literals, variables, or expressions):
*/
// Example 1
var x = 10
var num = x.toString()
console.log('Convert to string 01: ', num)

// Example 2
var num = (123).toString()
console.log('Convert to string 02: ', num)

// Example 3
var num = (10*3).toString()
console.log('Convert to string 03: ',  num)




console.log('\n')
/* -------------------------------------------toFixed() Method:--------------------------------------
toFixed() returns a string, with the number
written with a specified number of decimals:
*/

var a=15
var b=10
var sum = (a/b).toFixed(5)
console.log('Add 5 digit after decimal point 01: ', sum)          // returns 1.50000   


var x = 9.656
console.log('Add no digit after decimal point 02: ', x.toFixed(0))          // returns 10
console.log('Add 2 digit after decimal point 03: ', x.toFixed(2))           // returns 9.66
console.log('Add 4 digit after decimal point 04: ', x.toFixed(4))           // returns 9.6560
console.log('Add 6 digit after decimal point 05: ', x.toFixed(6))           // returns 9.656000




console.log('\n')
/* -------------------------------------------parseInt() Method:--------------------------------------
parseInt() very similar to the number() method,
parseInt() formats a string into an integer.
*/

var x = 5.9654
var convertToInteger = parseInt(x)
console.log('Convert to Integer 01: ', convertToInteger)

var x = '5.9654'
var convertToInteger = parseInt(x)
console.log('Convert to Integer 02: ', convertToInteger)

var x = '5 day'
var convertToInteger = parseInt(x)
console.log('Convert to Integer 03: ', convertToInteger)

var x = 'day 5'
var convertToInteger = parseInt(x)
console.log('Convert to Integer 04: ', convertToInteger)




console.log('\n')
/* -------------------------------------------parseFloat() Method:--------------------------------------
parseFloat() very similar to the number() method,
parseFloat() formats a string into an integer.
*/

var x = 5.9654
var convertToFloat = parseFloat(x)
console.log('Convert to Float 01: ', convertToFloat)

var x = '5.9654'
var convertToFloat = parseFloat(x)
console.log('Convert to Float 02: ', convertToFloat)

var x = '5 day'
var convertToFloat = parseFloat(x)
console.log('Convert to Float 03: ', convertToFloat)

var x = 'day 5'
var convertToFloat = parseFloat(x)
console.log('Convert to Float 04s: ', convertToFloat)





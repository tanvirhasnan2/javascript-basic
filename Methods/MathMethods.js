/* -------------------------------------------Math.ceil() Method:--------------------------------------
The Math.ceil() function always rounds a
number up to the next largest integer.

Note: Math.ceil(null) returns integer 0
and does not give a NaN error.
*/
console.log('Result after applying ceil 01: ', Math.ceil(10.6))


var result = Math.ceil(10.6) 
console.log('Result after applying ceil 02: ', result)

var num1 = 7.2
var result = Math.ceil(num1)
console.log('Result after applying ceil 03: ', result)

var num1 = -5.7
var result = Math.ceil(num1)
console.log('Result after applying ceil 04: ', result)


console.log('\n')
/* -------------------------------------------Math.floor() Method:--------------------------------------
The Math.floor() function returns the largest
integer less than or equal to a given number.
*/

var num1 = 7.2
var result = Math.floor(num1)
console.log('Result after applying floor 01: ', result)

var num1 = 7.9
var result = Math.floor(num1)
console.log('Result after applying floor 02: ', result)

var num1 = -7.2
var result = Math.floor(num1)
console.log('Result after applying floor 03: ', result)

var num1 = -7.9
var result = Math.floor(num1)
console.log('Result after applying floor 04: ', result)


console.log('\n')
/* -------------------------------------------Math.round() Method:--------------------------------------
The Math.round() function returns the value of
a number rounded to the nearest integer.
*/
var num1 = 7.3
var result = Math.round(num1) //point ar por (0-4) hole floor value ashbe
console.log('Result after applying floor 01: ', result)

var num1 = 7.4
var result = Math.round(num1) 
console.log('Result after applying floor 02: ', result)

var num1 = 7.5
var result = Math.round(num1) //point ar por (5-9) hole ceil value ashbe
console.log('Result after applying floor 03: ', result)

var num1 = 7.9
var result = Math.round(num1)
console.log('Result after applying floor 04: ', result)




console.log('\n')
/* -------------------------------------------Math.trunc() Method:--------------------------------------
The Math.trunc() function returns the integer part
of a number by removing any fractional digits.
*/
var num1 = 7.345 //remove fraction digits
var result = Math.trunc(num1)
console.log('Result after applying trunk 01: ', result)

var num1 = 7.98 //remove fraction digits
var result = Math.trunc(num1)
console.log('Result after applying trunk 02: ', result)





console.log('\n')
/* -------------------------------------------Math.max() Method:--------------------------------------
The Math.max() function returns the largest of
the zero or more numbers given as input parameters,
or NaN if any parameter isn't a number and
can't be converted into one.
*/

console.log('Max number is: ',Math.max(5,10,2,4,-11,16))

console.log('Max number is: ',Math.max(-1,-2,-3))

var arr = [10, 99, 20, 34, 55, 200]
var arr2 = Math.max(...arr)
console.log('Max number is: ',arr2)



console.log('\n')
/* -------------------------------------------Math.min() Method:--------------------------------------
The static function Math.min() returns the
lowest-valued number passed into it, or NaN if
any parameter isn't a number and can't be converted into one.
*/

console.log('Min number is: ',Math.min(5,10,2,4,-11,16))

console.log('Min number is: ',Math.min(-1,-2,-3))

var arr = [10, 99, 20, 34, 55, 200]
var arr2 = Math.min(...arr)
console.log('Min number is: ',arr2)




console.log('\n')
/* -------------------------------------------Math.sqrt() Method:--------------------------------------
The Math.sqrt() function returns
the square root of a number
*/

var num1 = 25
var result = Math.sqrt(num1)
console.log('Result after applying sqrt 01: ', result)

var num1 = 100
var result = Math.sqrt(num1)
console.log('Result after applying sqrt 02: ', result)




console.log('\n')
/* -------------------------------------------Math.cbrt() Method:--------------------------------------
The Math.cbrt() function returns
the cube root of a number
*/
var num1 = 75
var result = Math.cbrt(num1)
console.log('Result after applying cbrt 01: ', result)

var num1 = 100
var result = Math.cbrt(num1)
console.log('Result after applying cbrt 02: ', result)



console.log('\n')
/* -------------------------------------------Math.pow() Method:--------------------------------------
The Math.pow() function returns the base 
to the exponent power, as in base^exponent.
*/

var result = Math.pow(2,5) //2^5 = 32
console.log('Result after applying pow: ', result)





console.log('\n')
/* -------------------------------------------Math.pow() Method:--------------------------------------
The Math.random() function returns a floating-point, pseudo-random 
number in the range 0 to less than 1 (inclusive of 0, but not 1) with
approximately uniform distribution over that range — which you can then
scale to your desired range. The implementation selects the initial seed to
the random number generation algorithm; it cannot be chosen or reset by the user.
*/

var result = Math.random()
console.log('Result after applying random 01: ', result)


var result = Math.random()
console.log('Result after applying random 02: ', result * 10)




console.log('\n')
/* -------------------------------------------Math.abs() Method:--------------------------------------
The Math.abs() function returns the absolute value of a number.
That is, it returns x if x is positive or zero, and
the negation of x if x is negative.
*/

var sum = 70 - 92
var result = Math.abs(sum)
console.log('Result after applying abs: ', result)



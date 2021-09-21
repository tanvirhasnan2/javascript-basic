
/* -----------------------------------------length properties:---------------------------------
String length Properties bebohar kore 
String ar size ba string a koto gulo
letter ache ta ber kora jay.
*/
    var str = 'String Properties'
    var strLength = str.length
    console.log('Length of the string: ', strLength)




console.log('\n');
/* -------------------------------------------slice() Method:--------------------------------------
slice() method use kore string theke specific ekti
portion ber kore notun ekti string create kora jay

slice() extracts a part of a string and
returns the extracted part in a new string.

The method takes 2 parameters: the start position, and
the end position (end not included).

This example slices out a portion of a string 
from position 7 to position 12 (13-1):
*/

    var str = 'Apple, Banana, Kiwi'
    var strSlice = str.slice(7, 13)
    console.log('Slice 01: ', strSlice)





console.log('\n');
// -----------------------------------using negative(-) perameter-----------------------------------
/*If a parameter is negative, the position is
counted from the end of the string.

This example slices out a portion of a
string from position -12 to position -6:
*/

    var str = 'Apple, Banana, Kiwi'
    var strSlice = str.slice(-12, -6)
    console.log('Slice 02: ', strSlice)

    var str = 'Apple, Banana, Kiwi'
    var strSlice = str.slice(7)
    console.log('Slice 03: ', strSlice)

    var str = 'Apple, Banana, Kiwi'
    var strSlice = str.slice(-12)
    console.log('Slice 04: ', strSlice)




console.log('\n');
/* -----------------------------------substring() Method:-----------------------------

substring() is similar to slice().
The difference is that substring() cannot accept negative indexes.
*/
    var str = 'Apple, Banana, Kiwi'
    var strSubstring = str.substring(7, 13)
    console.log('Substring: ', strSubstring)





console.log('\n');
/* ------------------------------------substr() Method------------------------------------

substr() is similar to slice().
The difference is that the second parameter specifies
the length of the extracted part.
*/

    var str = 'Apple, Banana, Kiwi'
    var strSubstr = str.substr(7, 6)
    console.log('Substr 01: ', strSubstr)

    var str = 'Apple, Banana, Kiwi'
    var strSubstr = str.substr(7)
    console.log('Substr 02: ', strSubstr)

    var str = 'Apple, Banana, Kiwi'
    var strSubstr = str.substr(-4)
    console.log('Substr 03: ', strSubstr)




console.log('\n');
/* ---------------------------------replace() Method---------------------------------
The replace() method replaces a specified
value with another value in a string:

By default, the replace() method replaces only the first match:

By default, the replace() method is case sensitive.
Writing MICROSOFT (with upper-case) will not work:

To replace case insensitive, use a regular
expression with an /i flag (insensitive):
*/

var str = 'Please visit Microsoft and Microsoft!'
var strReplace = str.replace('Microsoft', 'Software') // By default case sensitive and replace only first match
console.log('Replace 01', strReplace)

var str = 'Please visit Microsoft'
var strReplace = str.replace(/MICROSOFT/i, 'Software') //case insensitive system if needed
console.log('Replace 02:', strReplace)

var str = 'Please visit Microsoft Microsoft Microsoft'
var strReplace = str.replace(/Microsoft/g, 'Software') //replace all match
console.log('Replace 03:', strReplace) 






console.log('\n');
/* -------------------------------------------concat() Method:--------------------------------------
joins two or more strings:
*/

var str1 = 'Hello'
var str2 = 'World'
var str3 = 'Wow'
var strConcat = str1.concat(' ' , str2, ' ', str3)
console.log('strConcat 01: ' + strConcat)


var str1 = 'Hello'
var str2 = 'World'
var str3 = 'Wow'
var strConcat = str3.concat(' ' , str1, ' ', str2)
console.log('strConcat 02: ' + strConcat)





console.log('\n');
/* -------------------------------------------toUpperCase() Method:--------------------------------------
A string is converted to
upper case with toUpperCase()
*/

var str = 'Please visit Microsoft'
var strToUppercase = str.toUpperCase(str)
console.log('Uppercase: ', strToUppercase)




console.log('\n');
/* -------------------------------------------toUpperCase() Method:--------------------------------------
A string is converted to
lower case with toLowerCase()
*/

var str = 'Please visit Microsoft'
var strToLowercase = str.toLowerCase(str)
console.log('Lowercase: ', strToLowercase)




console.log('\n');
/* -------------------------------------------trim() Method:--------------------------------------
The trim() method removes
whitespace from both sides of a string
*/

var str = '      Please visit Microsoft      '
var strTrim = str.trim(str)
console.log('Trim:', strTrim)




console.log('\n');
/* -------------------------------------------padStart() Method:--------------------------------------
kono string er length jodi 5 hoy, oi string ar
length jodi 10 kore dite chai tahole padStart() method
use kore 1st parameter a 10 input dile string tir prothome
5ti faka space niye, string length 10 hoye jabe, jodi faka
space e amra kono number ba string diye pad kore dite chai
tahole 2nd parameter e ta likhe dite hobe

padStart() method e 2ti parameter use kra jay.
1st parameter: String length bole dite hoy
2nd parameter: ja dia pad korte chai ta likhe dite hoy
*/

var str = '11512'
var PadStart = str.padStart(10)
console.log('PadStart 01:', PadStart);

var str = '11512'
var PadStart = str.padStart(10,0)
console.log('PadStart 02:', PadStart);

var str = '512'
var PadStart = str.padStart(10,'abc')
console.log('PadStart 03:', PadStart);




console.log('\n');
/* -------------------------------------------padEnd() Method:--------------------------------------
kono string er length jodi 5 hoy, oi string ar
length jodi 10 kore dite chai tahole padEnd() method
use kore 1st parameter a 10 input dile string tir sheshe
5ti faka space niye nibe, and string length 10 hoye jabe, jodi faka
space e amra kono number ba string diye pad kore dite chai
tahole 2nd parameter e ta likhe dite hobe

padEnd() method e 2ti parameter use kra jay.
1st parameter: String length bole dite hoy
2nd parameter: ja dia pad korte chai ta likhe dite hoy
*/

var str = '11512'
var PadEnd = str.padEnd(10)
console.log('PadEnd 01:', PadEnd);

var str = '11512'
var PadEnd = str.padEnd(10,0)
console.log('PadEnd 02:', PadEnd);

var str = '512'
var PadEnd = str.padEnd(10,'abc')
console.log('PadEnd 03:', PadEnd);





console.log('\n');
/* -------------------------------------------charAt() Method:--------------------------------------
The charAt() method returns the character
at a specified index (position) in a string
*/
var str = 'Hey! What\'s up?'
var characterPosition = str.charAt(0)
console.log(characterPosition);






console.log('\n');
/* -------------------------------------------charCodeAt() Method:--------------------------------------
The charCodeAt() method returns the unicode
of the character at a specified index in a string:

The method returns a UTF-16 code (an integer between 0 and 65535).
*/

var str = 'Hey! What\'s up?'
var returnUnicode = str.charCodeAt(0)
console.log(returnUnicode);






console.log('\n');
/* -------------------------------------------split() Method:--------------------------------------
A string can be converted to an
array with the split() method:
*/

var str = 'Hello how are you'
var Split1 = str.split(' ') //String a faka space pelei split kore array return korbe
console.log('Split 01:',Split1);

var str = 'Banana, Apple, Kiwi, Mango'
var Split1 = str.split(',') //String a koma(,) pelei split kore array return korbe
console.log('Split 02:',Split1);

var str = 'Hello how are you'
var Split1 = str.split('') //String ar prottekta character ke alada alada kore split kore array return korbe
console.log('Split 01:',Split1);





console.log('\n');
/* -------------------------------------------Property access--------------------------------------

Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
*/
var str = 'Hey! What\'s up?'
var text = str[5]
console.log(text);



/* -----------------------------------match() Method With Regular Expression------------------------------

Brackets are used to find a range of characters:
Will return a array 

*/
var str = 'Please visit Microsoft Microsoft Microsoft'
var strMatch = str.match(/[ase]/g) //find a,s,e and return a array of all the matches 
console.log('Match 01:', strMatch) 

var str = 'Please visit Microsoft Microsoft Microsoft'
var strMatch = str.match(/[A-Z]/g) //find A,B,C,D,E........Z and return a array of all the matches 
console.log('Match 02:', strMatch) 

var str = 'Please visit Microsoft Microsoft Microsoft'
var strMatch = str.match(/[a-z]/g) //find A,B,C,D,E........Z and return a array of all the matches 
console.log('Match 03:', strMatch) 

//Find any of the digits between the brackets
var str = 'The number is: 123456789124'
var strMatch = str.match(/[1-4]/g) //find 1,2,3,4 and return a array of all the matches 
console.log('Match 04:', strMatch)

var str = 'The number is: 123456789124'
var strMatch = str.match(/\d/g) //find find all the digit and return a array of all the matches 
console.log('Match 05:', strMatch)

//Find any of the alternatives separated with |
var str = 're, green, red, green, gren, gr, blue, yellow'
var strMatch = str.match(/(red|green)/g) //find 1,2,3,4 and return a array of all the matches 
console.log('Match 06:', strMatch)

var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var strMatch = str.match(regexp);

console.log('Match 07:',strMatch);

// Find a whitespace character
var str = 'The number is: 123456789124'
var strMatch = str.match(/\s/g) //find all the white space and return a array of all the matches 
console.log('Match 08:', strMatch)

/* ------------------------------------------------search() Method-------------------------------------------
Find a match at the beginning of a word like
this: \bWORD, or at the end of a word like this: WORD\b

The search() method executes a search for a match between a regular expression and this String object.

****eta basically position number ta return kore
*/
var str = 'The number num is: 123456789124'
var strSearch = str.search(/\bnu/) //find nu and return the position number of nu
console.log('Match 09:', strSearch)
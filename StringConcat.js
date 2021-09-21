/*
String Concat Function: Concat holo ekti Method ba Function. 
eker odik string ke ek shathe add kore print
korar poddotike string concat bole
*/

var a= 'I am'
var b = 'Tanvir Hasnan'
var c = 'Hello!'
//var c = a.concat(b,d)
var d = a.concat(' ' + b, ' ' +c) // String a space na thakar karone prothome space add kore dilam
console.log(d)


var e = c.concat(' ' + a + ' ' +b)
console.log(e) 

/* 
substr function: onek boro ekta string theke, amra jodi
shudhu matro ekti word othoba koyekti character print 
korate chai tahole substr function ti use korbo.
i.e. st = d.substr(12)
*/

var st = d.substr(12) // length use na korar karone 12 number character theke shuru kore baki shob print korbe.
console.log(st)

var st2 = d.substr(12,6) // ekhane 12 number character theke shuru kore 6 ta character print korbe
console.log(st2)

var st3 = d.substr(12,3)
console.log(st3)

var st4 = d.substr(12,4)
console.log(st4)


/*
charAt Method or function: ai function ti use kore amra koto number index ba ghore
kon chararter ta ache ta ber korte pari
i.e. cA = c.charAt(8)
*/

var cA = d.charAt(8)
console.log(cA) // ekhane variable a rekhe tarpor print korsi

console.log(d.charAt(12)) // ekhane direct print korsi

/*
startsWith Method: kono specific string diye
shuru hoyeche kina check korar jonne ai Method ti use korbo.
i.e. d.startsWith('I am')
*/

console.log(d.startsWith('I'))
console.log(d.startsWith('I am'))
console.log(d.startsWith('I em'))


/*
endsWith Method: kono specific string diye
shesh hoyeche kina check korar jonne ai Method ti use korbo.
i.e. d.endtWith('I am')
*/

console.log(d.endsWith('Hello!'))
console.log(d.endsWith('!'))
console.log(d.endsWith('I am'))


//to.UpperCase and to.Lowercase Method:

console.log(d.toUpperCase())
console.log(e.toLowerCase())

// trim method: ai method use korle string ar shurute and sheshe faka space guloke remove kore dibe
var str = '           asdfdsfsdf      '
console.log(str.trim())

console.log(str.trimEnd())
console.log(str.trimStart())


/*
split mathod:
amra jodi kono sentence ke word array te rupantor korte chai
tahole amader split mathod ti use korte hobe
*/

console.log(d.split(' ')) // ekhane split(' ') mathod er vitore faka space diye bujiye diyechi, sentance a space ar age porer word gulo. sutorang space pelei notun word count korbe
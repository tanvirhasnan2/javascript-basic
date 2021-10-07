function sqr (n){
    return n*n 
}
console.log(sqr(2))
console.log(sqr(2))
console.log(sqr(2))

var n = 10

function change(){
    n =100
}
change()
console.log(n)

var obj = {
    Name: 'Tanvir',
    Age: 28
}

function printObj(obj){
    obj.Name = 'Farzana'
    obj.Age = 25
    console.log(obj)
}

printObj(obj)
console.log(obj)
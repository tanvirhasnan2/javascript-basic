function add(a,b){
    return a + b
}
var sum = add
console.log(typeof sum);
console.log(sum(5,2))

var arr = []
arr.push(add)
console.log(arr)
console.log(arr[0](5,7))

var obj = {
    sum: add
}

console.log(obj)
console.log(obj.sum(5,7));

setTimeout(function() {
    console.log('times up')
    
}, 5000);
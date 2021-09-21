

var arr = [10,20,35,200,100,19,39]
var find = 200
var isFound = false
for(var i =0; i<arr.length; i++){
    if(arr[i]===find){
        console.log('Found', find, 'at the position of', i)
        isFound = true
        break
    }
}

if(!isFound){
    console.log(find, 'is not found in the array')
}






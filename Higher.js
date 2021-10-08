function add(a, b){
    return a + b
}

function manupulate(a,b,func){
    var c = a*b
    var d = a+b

    return function(){
        var m = func(a,b)
        return  c*d*m
    }
    // return multiply
}

var multiply = manupulate(2,3,add)
console.log(multiply())


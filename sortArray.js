var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

var arr = [4,8,7,5,9,-2,-11,-5,2,6,3,1,11,24,21]

// arr.sort()
// persons.sort()

// console.log(arr)
// console.log(persons)

arr.sort(function(a,b){
    if(a>b){
        return 1
    } else if(a<b){
        return -1
    } else {
        return 0
    }
})

console.log(arr)

persons.sort(function(a,b){
    if(a.age>b.age){
        return 1
    } else if (a.age < b.age){
        return -1
    } else {
        return 0
    }
})

console.log(persons)

res1 = arr.every(function(value){
    return  value %2 === 1
})

console.log(res1)


res2 = arr.some(function(value){
    return  value < 0
})

console.log(res2)

res3 = arr.some(function(value){
    return  value > 0
})

console.log(res3)



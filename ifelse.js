var date = new Date()

// 0=Sunday 1= Monday 2= Tuesday ..... 3 = wed 4 = thurs 5= friday 6= sat

var today = date.getDay()

if(today === 0){
    console.log('Today is Sunday')
}
else if(today === 1){
    console.log('Today is Monday')
}
else if(today === 2){
    console.log('Today is Tuesday')
}
else if(today === 3){
    console.log('Today is Wednessday')
}
else if(today === 4){
    console.log('Today is Thursday')
}
else if(today === 5){
    console.log('Today is Friday')
}
else {
    console.log('Today is saturday')
}

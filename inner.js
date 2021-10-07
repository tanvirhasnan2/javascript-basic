function someThing(greet, name){
    function firstName(){
        if(name){
            return name.split(' ')[0]
        }
    }
    var message = greet + ' ' + firstName()
    console.log(message)
}

someThing('Welcome')


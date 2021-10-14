// var rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am a rectangle')
//         this.printProperties()
//     },

//     printProperties: function(){
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }

// rect.draw()


// // rect.height = 100

// // rect.draw()

// function myFunc() {
//     console.log(this)
// }

// new myFunc()

// var another = {
//     width: 47,
//     height: 56,
//     print: rect.printProperties

// }

// another.print()

// var rect = {
//     width: 100,
//     height: 50,

//     draw: function(){
//         console.log('I am a rectangle')
//         this.printProperties()
//     },

//     printProperties: function(){
//         console.log('My width is ' + this.width)
//         console.log('My height is ' + this.height)
//     }
// }


var createRect = function(width, height){
    return {
        width: width,
        height: height,
    
        draw: function(){
            console.log('I am a rectangle')
            this.printProperties()
        },
    
        printProperties: function(){
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
}


var rect1 = createRect(10,8)
rect1.draw()

var rect2 = createRect(40,30)
rect2.draw()


// var obj = {
//     name: 'next',
//     age: 12,
//     height: '5.7'
// }
// Object.freeze(obj)
// var res = Object.isFrozen(obj)
// console.log(res);
// obj.name = 'black'
// console.log(obj.height);

// var obj = {
//     name: 'next',
//     age: 12,
//     height: '5.7',
//     parentsInfo: {
//         mothersName: 'Mrs. Y',
//         FathersName: 'Mr. X'
//     }
// }

// var res = Object.entries(obj)
// console.log(res);

// for (var [k,v] of res){
//     console.log(k,v);
// }

// var myArr = [
//     ['name', 'Next'],
//     ['roll', 12],
//     ['parentsInfo', {
//         mothersName: 'Mrs. Y',
//         FathersName: 'Mr. X'
//     }]
// ]

// var res = Object.fromEntries(myArr)
// console.log(res.parentsInfo.FathersName);






// var obj = {
//     name: 'next',
//     age: 12,
//     height: '5.7',
//     parentsInfo: {
//         mothersName: 'Mrs. Y',
//         FathersName: 'Mr. X',
//         address: {
//             division: 'Rajshahi',
//             address: 'Dhanmondi, Dhaka'
//         }
//     }
// }

// var res = obj.hasOwnProperty('age')
// console.log(res);

// if(obj.hasOwnProperty('age')) console.log('Your age is: ',obj.age);
// else console.log('Not available');







// var obj = {
//     name: 'next',
//     age: 12,
//     height: '5.7',
//     parentsInfo: {
//         mothersName: 'Mrs. Y',
//         FathersName: 'Mr. X',
        // address: {
        //     division: 'Rajshahi',
        //     address: 'Dhanmondi, Dhaka'
        // }
//     }
// }

// var res = obj.hasOwnProperty('age')
// console.log(res);

// if(obj.hasOwnProperty('address')) console.log('Your address is: ',obj.parentsInfo.address.address);
// else console.log('address Not available');







//Optional Chainning (?) ---- This system uses for ignoring code crush---  examle: obj.parentsInfo?.address?.address
// var obj = {
//     name: 'next',
//     age: 12,
//     height: '5.7',
//     parentsInfo: {
//         mothersName: 'Mrs. Y',
//         FathersName: 'Mr. X',
//         // address: {
//         //     division: 'Rajshahi',
//         //     address: 'Dhanmondi, Dhaka'
//         // }
//     }
// }

// // console.log('Your address is: ',obj.parentsInfo?.address?.address);

// if(obj.parentsInfo?.address?.address) {
//     console.log('Your address is: ',obj.parentsInfo?.address?.address);

// } else {
//     console.log('Not available');
// }





var arr = [
    {
        name: 'Topper',
        age: 13,
        height: '5.7',
        parentsInfo: {
            mothersName: 'Mrs. Y',
            FathersName: 'Mr. X',
            address: {
                division: 'Rajshahi',
                address: 'Dhanmondi, Dhaka'
            }
        }
    },
    {
        name: 'hello',
        age: 15,
        height: '5.7',
        parentsInfo: {
            mothersName: 'Mrs. Y',
            FathersName: 'Mr. X',
            // address: {
            //     division: 'Dhaka',
            //     address: 'Banani, Dhaka'
            // }
        }
    },
    {
        name: 'next',
        age: 12,
        height: '5.7',
        parentsInfo: {
            mothersName: 'Mrs. Y',
            FathersName: 'Mr. X',
            address: {
                division: 'Comilla',
                address: 'Badda, Dhaka'
            }
        }
    }]

    // console.log(arr.length);


// if(obj.parentsInfo?.address?.address) {
//     console.log('Your address is: ',obj.parentsInfo?.address?.address);

// } else {
//     console.log('Not available');
// }

arr.map((ele) => {
    if(ele.parentsInfo?.address?.address){
        console.log('Name: ', ele.name, 'Address: ', ele.parentsInfo?.address?.address );
    } else {
        console.log('name:', ele.name, 'Address: Your address is missing');
    }
    
})

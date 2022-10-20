document.write('spread operator')


function fun(name , ...args){
    let sum = 0;
    for(let i in args){
        sum += args[i]

    }
    document.write('<br>' +sum)
    document.write('<br>' +name)
}

// if we wnat to call back a array as arguments then we use a spread operator 
let arr  = [12,43,54,23,112 ]
// fun('being murshid', 12,43,54,23)

// then callback is change 

fun('being murshid' , ...arr)




// example no 02

let arr1 = [10,20,30]
// arr1 is assign to a arr2 and this is not change because it is closed 
let arr2 = [...arr1]
arr1.push(12)

console.log(arr2)
console.log([...arr1])


// example 02 
let arr3 = [ 10 , 20 , 30]
let arr4 = [50, 60, 65]
// concate using concate method 

let arr5 = arr3.concat(arr4)
document.write("<br>" + arr5)


// concste using spread operator 

let arr6 = [...arr3 , ...arr4]
let arr7 = [...arr4,...arr3  ]
// here we adding some values
let arr8 = [12,34,43,...arr4,...arr3  ]

document.write("<br>" + arr6)
document.write("<br>" + arr7)   
document.write("<br>" + arr8)   



// example 03 

let obj1 = {
    name :"saqlain",
    cousre: 'web develpment'
}
let obj2 = {
    age : 22
}

let obj3 = {...obj1, ...obj2}
console.log(obj3)
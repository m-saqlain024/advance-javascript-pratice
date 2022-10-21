document.write("array deconstructuring")


// in old java script version 
let arr = ['muhammad saqlain' , 22]
let name1 = arr[0]
let  age1 = arr[1];

// in es6 destructuring is introduce 
let arr2 = ['being murshid' , '19']
let [name2 , age2]= arr2
console.log(name2 , age2)

let arr5 = ['saqlain' , 'muhammad ' ,22]
let [name, nickename, age] = arr5

console.log(arr5)

let arr3 = ["being murshid " , 19 , ['male' , 'single']]
let [name3 , age3 , [gender , status]  ] = arr3 



console.log(name3 , age3 , [gender , status])



let arr4  =  ['coder' , 22,43,12]
let [name4 , ...args] = arr4    //using rest operator to all the rest value
 console(name4 , args)



//  example 04


// function fun2 ([name , age =22, city]){
//     console.log(name)
//     console.log(age)
//     console.log(city)
// }

// fun2(['being murshid' , 33 , 'hakuchar'])


function fun3(){
    return["being murshid" , 22 , 'hakuchar']
}
let [name5, age4 , city1] = fun3()

// console.log(name5)
document.write(name5)
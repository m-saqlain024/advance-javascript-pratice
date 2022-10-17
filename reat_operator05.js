// rest operator in js 


let obj ={
    firstName : "muhammad",
    lastName :"saqlain",
    reg_no : "2020-kiu-bs2086"
}

for(var key in obj){
    // document.write(obj[key])
}


// in old version error 
function sum(num1 , num2 ){
    return num1 + num2
     
}
document.write(sum(12,32))
// this can not solve the more than two agument
// console.log(sum(12,32,43 ,121212))


// in es6 and above function can solve it 



function sum1(){
    let sum2 =0
    for(let i in arguments){
        sum2 += arguments[i]
        // document.write("<br> this is a sum" + i +sum2)
    }
    document.write("<br>"+sum2)
}
sum1(12,12)



function  fun(fname, lname , ...args){
    let sum =  0;
    for (let i in args){
        sum += args[i]
    }
    document.write(`<br> this is a ${fname} ${lname} marks is :`)
    document.write(sum)

}
fun("being", "murshid" , 12,323,43,12)




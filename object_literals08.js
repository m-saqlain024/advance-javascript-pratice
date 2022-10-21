document.write('Object literals' + "<br>")


let name = 'muhammad saqlain'
let age = 22

// in old version of javascript 
let obj = {
    name: name,
    age: age
}
console.log(obj)

// but in es6 
// if property and value is same then we write one of those 

let obj2 = {
    name,
    age
}
console.log(obj2)

// example 03 
let nfor = "name"
let afor = "age"
let obj3 = {
    [nfor + "person"]: "muhammad saqlain",
    [afor]: 22,
    detail: function () {
        return `${this.nameperson} is ${age} old`
    }

}
console.log(obj3)
// document.write(obj3.datail())
console.log(obj3.detail())


// in es6 the function in Object is write in more simpler  form 
let a = "name"

let obj4 = {
    [a + "student"]: "muhammad saqlain",
    detali() {
        return `${this.namestudent} is a great student`
    },
    'detali show'() {
        return `<br> this is a another example  ${this.namestudent} is a great student`
    }
}
// document.write(obj4.detali())
document.write(obj4['detali']())
document.write(obj4['detali show']())



// example 05   
let namee = " muhammad saqlain"
let cousre = "web developemnt"

function fun(namee, cousre) {
    return { namee, cousre }
}


console.log(fun(namee , cousre))
let vari = fun(namee , cousre)
console.log(vari.namee)
console.log(vari.cousre)
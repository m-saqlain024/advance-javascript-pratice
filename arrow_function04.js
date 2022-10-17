document.write ("Wellcome to Arrow Function" + "<br>")

// in old version of javascript
let oldfun = function(name, age){
    return`user name  ${name}- ${age}`
}
// document.write(oldfun('being murshid', 22))

let newfun = (name , age)=> `user name ${name} - ${age}`
document.write( newfun("being murshid"))


// if we havae one parameter 
let newfun1 = name => `<br>username is${name}  `
document.write(newfun1("BeingMurshid"))

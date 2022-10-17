// template literals or template string 


let  user = "muhammad saqlain"
let address = 'hakuchar nagar'
// in old version 
// document.write("usaer name :" + user + address)


// in es6 
// document.write(`user name is ${user} and from ${address}`)
let student =`name : ${user} <br>
              from : ${address}        `
// document.write(student)


let firstName = "Muhammad";
let lastName = "Saqlain";


function fullName(){
    return `${firstName} ${lastName}`
}

let detail  = `<br><br><br> name : ${fullName()} <br>NickName : ${user} <br>  Address : ${address} <br>  `

document.write(detail)




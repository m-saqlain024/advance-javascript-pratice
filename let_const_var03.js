//  var , let , const 


// delcare variable
var a = 'hello';
// redeclare
var a = 'world';
// re assign 
a = 'hussain'
console.log(a)


// var is a global level scope
for (var ali = 0; ali <2; ali++) {
     document.write( "<br>" + ali + "this is a global level value and  access out side the paranthesis")
}
console.log(ali)
// ====================================================
let b = 'hello'

// this willl return error because we can not redeclare in let 
// let b = 'world'

// but we can reassign a value 
b = 'pakistan'
console.log(b)

// let is a block level scope 
for (let hussain = 0; hussain < 2; hussain++) {
document.write("<br><br><br>"+  hussain +" this is a block level value and caon not access out side the parathesis")    
}
// console.log(hussain)
// ================================?
const c = 'ali';

// can not redeclare
// const c = 'ali'

// can not reassign 
// c = 'hussain'
console.log(c)

// const is block level scope 
// for(const a =1; a<10 ; a++) {
    // document.write(a)
    // this will display erroe because it do not change it value 
// }
// console.log(a)
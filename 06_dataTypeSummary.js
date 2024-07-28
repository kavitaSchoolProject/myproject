//primintive type
// 7 types :String,Number ,Boolean,null,undefined,Symbol
//BigInt
let score = 100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail
let bigint=5465465465464646546n
const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId)
console.log(id==anotherId)
//non primitive
//Array,Object, functions

let myArray=[1,2,3,4,5]
let myObject={name:'kavita',age:25}
let mufunction=function (){
    console.log('Hello from function')
}
console.log(typeof myArray);

console.log(typeof myObject);

console.log(typeof mufunction);

console.log(typeof score) ;

console.log(typeof scoreValue) ;

console.log(typeof isLoggedIn) ;

console.log(typeof outsideTemp) ;

console.log(typeof userEmail) ;

console.log(typeof bigint) ;

console.log(typeof id) ;

console.log(typeof anotherId) ;




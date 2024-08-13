let value="33abc"
let value1=null
console.log(typeof value) // Output: stringj
let number = Number(value)

console.log(typeof number) // Output: number
console.log(number) // Output: number

console.log(value1) // Output:;

let number1 = Number(value1)
console.log(typeof number1) // Output:;

console.log(number1)  
let un=undefined

console.log(typeof un) // Output: undefine

console.log(un) // Output: NaN
let bool=true
let boolnumber=Number(bool)
console.log(typeof bool) // Output: boolean

console.log(boolnumber) // Output: true

//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0

// let isLoggedIn=1 // Output:true
// let isLoggedIn="kavita" //true 
let isLoggedIn="" //false
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
//1 =>true' 0 =>false
//"" =>false
//"kavita" =>true
let someNumber=33
let stringNumber=String(someNumber)

console.log(typeof stringNumber) // Output: string

console.log(stringNumber) // Output: "33"
console.log(Date());
let mydate=new Date()
console.log(mydate.toDateString());

console.log(mydate.getFullYear());

console.log(mydate.getMonth()+1);

console.log(mydate.getDate());

console.log(mydate.getHours());

console.log(mydate.getMinutes());
let mydate1=new Date(2001,0,23,5,3)
console.log(mydate1.toLocaleString());
//all function related date and time
//1. toLocaleString()
//2. toLocaleDateString()
//3. toLocaleTimeString()
//4. toLocaleString() with options
//with example all dte function and time function
//please give example
console.log(`${Math.floor(Date.now()/1000)}`);


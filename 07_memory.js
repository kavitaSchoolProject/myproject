// two type of memory
//stack (Primitive) ,Heap ( non Primitive)

let myData="kavita"
let anotherData=myData
anotherData="mahima"

console.log(myData) // Output: mahima
console.log(anotherData);

//heap

let obj1={name:'kavita',age:25}
let obj2=obj1
obj2.age=26

console.log(obj1.age) // Output: 26
console.log(obj2.age);



//array

let arr = ['apple', 'banana', 'cherry',1,2,true,253.32]

// console.log(arr)

// console.log(arr.length)  

// console.log(arr[0])

// console.log(arr[arr.length - 1])
//array methods

arr.push('orange',52,74)

// console.log(arr)
arr.unshift('apple')

// console.log(arr.includes('apple'));
// console.log(arr.indexOf(4));

console.log(arr)
const newarray=arr.join()

// console.log(newarray)
//

let myarray=[0,1,2,3,4,5,6,7,8,9]
// console.log(myarray);
// console.log("A ",myarray.slice(1,5))
let spliceArry=myarray.splice(1,5)
// console.log("c ",myarray);
// console.log(spliceArry)

//more about array 
ar1=[1,2,3,4]
ar2=[11,12,13]
// ar1.push(ar2);

// console.log(ar1);
mergeArray=ar1.concat(ar2)
//  console.log(mergeArray)
//  console.log(mergeArray[5]);
 const allArray=[...ar1,...ar2]
//  console.log(allArray)
//important array method

let arry1=[1,2,3,4,5,6,7,8,[2,5,2,5,[1,2,5,2,[1,2,2,2,2]]],[8,4,5,8,5]]

console.log(arry1.flat(Infinity))
console.log(Array.isArray('kavita'));
console.log(Array.from('kavita'));


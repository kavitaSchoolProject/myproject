const arr=[52,5,8,5,89,6]
let newArr = arr.reduce((acc,curr)=>{
    // return (acc+curr);
//    return console.log(`acc = ${acc}`);
    
},0)

// console.log(newArr); // 138

let max = arr.reduce((accumulator, currentValue) => {
    return (accumulator > currentValue) ? accumulator : currentValue;
});

// console.log("The maximum value is: " + max);

let min = arr.reduce((accumulator, currentValue,item) => {
    // return(currentValue+accumulator);
    return item;
    
},0);
// console.log(min);


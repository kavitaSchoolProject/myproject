const arr=[4,1,5,8,6,2,5,8]
// foreach

arr.forEach((element) => {
// console.log(element);

});
const newArr=[]
arr.forEach((element) => {
    // console.log(element);
    newArr.push(element*2);
    
});

// console.log(newArr); // undefined
// console.log(newArr); // 
//create object

const obj=[{name:"john",age:25},
    {name:"sarah",age:30},
    {name:"mike",age:20}
]

let newObj={name:''}

obj.forEach((element,index) => {
    newObj.name=element.name
    // console.log(element.name);
    // console.log(obj[index].name);
    
});
// console.log(newObj.name); 
obj.forEach((element,index,arr) => {
    // newObj.name=element.name
    // console.log(index);
    // console.log(obj[index].name);
    
});




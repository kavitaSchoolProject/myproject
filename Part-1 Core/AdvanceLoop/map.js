//map loop
const arr=[85,25,36,52];
const newArray=arr.map((item)=>item*2).filter((item)=>item>50)
console.log(newArray);

const object =[
    {name: 'John', age: 25},
    {name: 'Alice', age: 30},
    {name: 'Bob', age: 28}
]

let newObj=object.map((item)=>{return item.age*10})
console.log(newObj);




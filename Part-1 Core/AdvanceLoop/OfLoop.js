const arr=[1,2,5,8,85,5]
for(let a in arr){
    // if(arr[a]===85){
        //console.log(a)//that is print index
    // }
    // console.log(`${a} :-) ${arr[a]}`);
    // console.log(arr)    
}
for(let a of arr){
    // console.log(`${a}`);
    // console.log(arr)
}
const object=[
    {name:'john',age:25},
    {name:'jane',age:30},
    {name:'jim',age:35},
    {name:'john',age:25}
]
console.log(object);
//for in
for(let data in object){
    // console.log(`${data} :- ${object[data].name} - ${object[data].age}`);
    // console.log(object)
}
//with of
for(let result of object){
    // console.log(`${result.name} - ${result.age}`);
    //  console.log(object)
}

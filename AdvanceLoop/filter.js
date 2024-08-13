// filter loop 
let arr=[85,85,85,96,85,36,25]
let r= arr.filter((item)=>(item>85))
// console.log(r) // [96, 85, 36, 25]

//create object
let myobj=[{
    name: "John Doe",
    age: 3,
    city: "New York"
},
{
    name: "Jane Doe",
    age: 95,
    city: "Los Angeles"
    },
{
    name: "Doe",
    age: 85,
    city: "Los Angeles"
    }]


 let res=myobj.filter((item)=>(item.age>25))
//  console.log(res) // [{name: "John Doe", age: 30, city: "New York"}]
 //same thing acheve by foreach using if condition
 let res2=myobj.filter((item)=>item.age>25 && item.city=="Los Angeles")
 console.log(res2) // [{name: "John Doe", age: 30, city: "New York"}]
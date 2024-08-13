//more on function
function calculateCartPrice(num1){
    return num1
}
//rest operater

function calculateCartPriceWithRestOperator(...nums){
    let total=0;
    for(let num of nums){
        total+=num;
    }
    return total;
}

console.log(calculateCartPriceWithRestOperator(10,20,30));
const user={
    name:'kavita',
    age:25,
    address:{
        street:'123 Main St',
        city:'New York',
        country:'USA'
    }
}
function handleObject(...anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.age}`);
}

handleObject();
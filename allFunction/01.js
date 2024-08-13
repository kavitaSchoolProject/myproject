function sayMyname(){
    console.log('Hello World');
}
// sayMyname()

function addNumbers(num1,num2){
    return num1+num2;
}

//  console.log(addNumbers(2,3))
 //console.log(addNumbers(2,3,4)) // Error: too many arguments
 //function with parameter
  function isAdmin(username){
    if(!username) {
       console.log( "enter valid user name")
       return
    }
    else{

        return "welcome "+username+" you are admin"
    }
   
  }
  console.log(isAdmin("kavita"))
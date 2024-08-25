const form =document.querySelector("form");

form.addEventListener('submit',function(e){

    e.preventDefault()
    const weight = parseInt(document.querySelector("#weight").value);
    const height = parseInt(document.querySelector("#height").value);
    const result = document.querySelector(".result");
    if(weight =='' ||weight <0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid height ${weight}`;
    }
    else if(height =='' ||height <0 || isNaN(height))
    {
        result.innerHTML = `Please enter a valid height ${height}`;
    }
    else{
        let bmi = (weight/((height*height)/10000)).toFixed(2);
        result.innerHTML = "Your BMI is: " + bmi;
    }
}

   
)

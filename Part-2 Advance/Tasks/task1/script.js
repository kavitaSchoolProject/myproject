const button =document.querySelectorAll(".button")
console.log(button)
const  dom = document.querySelector("body")
const buttons =button.forEach(function(btn){
    btn.addEventListener("click", function(e){
        dom.style.backgroundColor = e.target.id
    })
})
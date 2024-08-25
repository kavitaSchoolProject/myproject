const clock =document.querySelector('.clock');
console.log(clock);




setInterval(function() {
    date = new Date()
    clock.innerHTML = date.toLocaleTimeString('en-US')
 }, 
1000)
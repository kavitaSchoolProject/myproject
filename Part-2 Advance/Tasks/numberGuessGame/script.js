let randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber);
let sadEmoji = document.getElementById('sadEmoji')
const submit =document.querySelector('#sbt')
const userInput =document.querySelector('#guessField')

const guessSlot =document.querySelector('.guesses')
const remaining =document.querySelector('.lastResult')
const lowOrHi =document.querySelector('.lowOrHi')
const startOver =document.querySelector('.resultParsh')

const p = document.createElement('p')

let preGuess =[]
let numGuess = 1
let playGame =true;

if(playGame){
    submit.addEventListener('click',function(e){
      e.preventDefault()
      const guess = parseInt(userInput.value)
      // console.log(guess);
      validateGuess(guess)
    })  

}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a number.')
  }else if(guess<1){
    alert('Number should be greater than 0.')
  }
  else if(guess>100){
    alert('Number should be less than 100')
  }else{
    preGuess.push(guess)
    if(numGuess===10){
        displayGuess(guess)
        displayMessage('Game Over! You ran out of guesses.')
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }

}

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`Congratulations! You guessed the correct number. ${randomNumber}  😍`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage('Too low!')
        // getRandomSadEmoji()
    }else if(guess>randomNumber){
        displayMessage('Too High!')
        // getRandomSadEmoji()

    }
    }


function displayGuess(guess){
    userInput.value =''
    guessSlot.innerHTML += `${guess}  `
    numGuess++
    remaining.innerHTML = `${10-numGuess}`
    sadEmoji.textContent = getRandomSadEmoji();

}
function displayMessage(msg){
  lowOrHi.innerHTML=`<h2>${msg}</h2>`

}
function newGame(){
 const newGamebtn = document.querySelector('#newGame')
 newGamebtn.addEventListener('click',function(e){
   randomNumber = parseInt(Math.random()*100+1);
   preGuess = []
   numGuess = 1
   guessSlot.innerHTML = ''
   remaining.innerHTML = `${10-numGuess}`
   userInput.innerHTML =
   userInput.removeAttribute('disabled')
   startOver.removeChild(p)
   playGame = true

   
 })


}
function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML =`<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  sadEmoji.innerHTML =''
  playGame =false;
  newGame()

}



        // function getRandomEmoji() {
        //     const emojiRangeStart = 0x1F600;
        //     const emojiRangeEnd = 0x1F64F;
        //     const randomEmojiCode = Math.floor(Math.random() * (emojiRangeEnd - emojiRangeStart + 1)) + emojiRangeStart;
        //     return String.fromCodePoint(randomEmojiCode);
        // }

        // document.getElementById('emoji').textContent = getRandomEmoji();
//random sad emoji
function getRandomSadEmoji() {
  // List of common sad or negative emojis
  const sadEmojis = [
      "😢", "😞", "😔", "😟", "😕", "😖", "😫", "😩", "😭", "😿", "🙁", "☹️", "😣", "😥"
  ];

  // Select a random emoji from the list
  const randomIndex = Math.floor(Math.random() * sadEmojis.length);
  return sadEmojis[randomIndex];
}

// Example usage
// console.log(getRandomSadEmoji());

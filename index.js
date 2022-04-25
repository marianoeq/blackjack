let cards = [];
let sum = 0;
let hasBlackJack = false
let isAlive = true
let message = ""
//get 2 random numbers and assing them to 2 dif var.
function getRandomNumbers(){
    let randomNumber = Math.floor(Math.random()*12);
    
    //if randomNumber 1 0R 11 ask the player what they prefer.
    return randomNumber
    
}


function startGame(){
    let firstCard = getRandomNumbers()
    let secondCard =  getRandomNumbers()

    console.log(firstCard, secondCard)
   //Render those 2 var to the "Cards" paragraph elem
   // Sum those values and render in the "sum" p elem
   // find out if "sum" is less, greater or equal to 21 

}


if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}

console.log(message)
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");
let count = 5;
console.log("count:  ", count)
function getRandomNumbers() {
  //get 2 random numbers and assing them to 2 dif var.
  let randomNumber = Math.floor(Math.random() * 11) + 1;

  //if randomNumber 1 0R 11 ask the player what they prefer.

  return randomNumber;
}

function startGame() {
  isAlive = true;
  hasBlackJack=false;
  let firstCard = getRandomNumbers();
  let secondCard = getRandomNumbers();
  cards = [firstCard, secondCard];
  console.log("CARDS:  ", cards);
  sum = firstCard + secondCard;
  displayCards();
  counter();
  // Sum those values and render in the "sum" p elem
  // find out if "sum" is less, greater or equal to 21
}

//Render those 2 var to the "Cards" paragraph elem
function displayCards() {
  cardsEl.textContent = "Cards: ";

  // Loop through cards, render each element in cards-el element.
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + "    ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 19) {
    isAlive = true;
    message = "C'mon ask for a card!";
  } else if (sum === 20) {
    isAlive = true;
    message = "You've to be extremely lucky to get an AS, Let's see!";
  } else if (sum === 21) {
    hasBlackJack = true;
    count = 5
    message = "You've got Blackjack!!!";
    alert("Today everything is gonna go well!! You won!!!");
  } else {
    message = `You are not that lucky today! Start the game again!`;
    isAlive = false;
  }
  console.log("is Alive: ",isAlive);
  console.log("hasBlackjack:  ",hasBlackJack);
  messageEl.textContent = message;
}

function askCard() {
  if (isAlive && hasBlackJack === false) {
    let newCard = getRandomNumbers();
    cards.push(newCard);
    sum += newCard;
    displayCards();
   
  }
}
//Every time start game is pressed the counter decrease by one.
function counter() {

  let currentCounter = count--;
  console.log(`currentCounter:  `, currentCounter);
  let counterEl = document.getElementById("counter-el");
  counterEl.textContent = `REMAINDER TIMES TO WIN: ${currentCounter}`;
  if (count < 0 ) {
    alert("Game Over");
    count = 5;
    isAlive =false;
  } 
}


//If I've got blackjack before 5 attempts I have to reset the counter up to 5 again.
// after the winner alert when I click start game it has to reser the counter
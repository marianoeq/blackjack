let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");
let messageEl = document.getElementById("message-el");

function getRandomNumbers() {
  //get 2 random numbers and assing them to 2 dif var.
  let randomNumber = Math.floor(Math.random() * 11) + 1;

  //if randomNumber 1 0R 11 ask the player what they prefer.
  return randomNumber;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomNumbers();
  let secondCard = getRandomNumbers();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  console.log("Array: ", cards);
  console.log(firstCard, secondCard);
  console.log("sum: ", sum);
  console.log(cards);
  displayCards();
  // Sum those values and render in the "sum" p elem
  // find out if "sum" is less, greater or equal to 21
}

//Render those 2 var to the "Cards" paragraph elem
function displayCards() {
  cardsEl.textContent = "Cards: ";
  // Loop through cards, render each element in cards-el element.
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    isAlive = true;
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You've got Blackjack!!!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }

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

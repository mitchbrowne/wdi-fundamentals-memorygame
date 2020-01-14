
// declare an array called cards; add an item for each card
let cards = ["queen", "queen", "king", "king"];

// declare an array called cardsInPlay; each item will eventually hold the cards in play
let cardsInPlay = [];

// declare variable cardOne; represents first card player has flipped
let cardOne = cards[0];

// add first card to array cardsInPlay
cardsInPlay.push(cardOne);

// display card that was just flipped in console
console.log("User flipped " + cardOne);

let cardTwo = cards[2];

cardsInPlay.push(cardTwo);

console.log("User flipped " + cardTwo);

// condition to ensure user has picked two cards before code continues
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// cards are equal
		alert("You found a match!");
	}
	else {
		// cards are not equal
		alert("Sorry, try again!");
	}
}


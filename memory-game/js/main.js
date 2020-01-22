
// declare an array called cards; add an item for each card
let cards = ["queen", "queen", "king", "king"];

// declare an array called cardsInPlay; each item will eventually hold the cards in play
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}
}

// creates a function called flipCard
function flipCard(cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}



flipCard(0);
flipCard(1);



// declare an array called cards; add an object for each card
let cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

// declare an array called cardsInPlay; each item will eventually hold the cards in play
let cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// cards are equal
		alert("You found a match!");
	  console.log("You found a match!");
	} else {
		// cards aren't equal
		alert("Sorry, try again.");
	  console.log("Sorry, try again.");
	}
}

// creates a function called flipCard
function flipCard(cardID) {
	console.log("User flipped " + cards[cardID].rank);
	cardsInPlay.push(cards[cardID].rank);
	console.log(cards[cardID].cardImage);
	console.log(cards[cardID].suit);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}


flipCard(0);
flipCard(2);


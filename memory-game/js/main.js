
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

// declare the statistic counts
let resetStat = 0;
let gamesStat = 0;
let matchesStat = 0;
let mismatchesStat = 0;
let winRatioStat = 0;


// function to randomize the cards array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// declare an array called cardsInPlay; each item will eventually hold the cards in play
let cardsInPlay = [];

function calculateWinRatio() {
	let winRatioStat = Math.round((matchesStat / gamesStat) * 100); 
	document.getElementById('winRatioStat').textContent = winRatioStat + "%";
}

function updateGamesStat() {
	// update the games statistic
	gamesStat += 1;
	document.getElementById('gamesStat').textContent = gamesStat;
}

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// cards are equal
		alert("You found a match!");
		console.log("You found a match!");
		matchesStat += 1;
		// update matches stat
		document.getElementById('matchesStat').textContent = matchesStat;

	} else {
		// cards aren't equal
		alert("Sorry, try again.");
		console.log("Sorry, try again.");
		mismatchesStat += 1;
		// update mismatches stat
		let mismatchesElement = document.getElementById('mismatchesStat');
		mismatchesElement.textContent = mismatchesStat;
	}
	// update the games statistic
	updateGamesStat();

	// calculate and update the win loss ratio
	calculateWinRatio();
}

// creates a function called flipCard
function flipCard() {
	let cardId = this.getAttribute('data-id');
	console.log(cardId);
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}


function createBoard() {
	shuffle(cards);
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		// set the element to a card
		cardElement.setAttribute('src', 'images/back.png');
		// set the cards data element so we can track the card
		cardElement.setAttribute('data-id', i);
		// when a user clicks a card, the card is flipped
		cardElement.addEventListener('click', flipCard);
		// append child img to div
		document.getElementById('game-board').appendChild(cardElement);
	}
};

function gameReset() {
	// add to the resetStat
	resetStat += 1;

	// reset cardsInPlay array
	cardsInPlay = [];

	// for loop to reset each card
	for (let i = 0; i < cards.length; i++) {
		// get the card
		let cardElement = document.getElementsByTagName('img')[i];
		// change the cards image to the back
		cardElement.setAttribute('src', 'images/back.png');
	}
	shuffle(cards);

	// update the reset stat
	let resetElement = document.getElementById('resetStat');
	resetElement.textContent = resetStat;
};

createBoard();

let resetButton = document.getElementById('game-reset');
resetButton.addEventListener('click', gameReset);



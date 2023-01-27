

class Card {
    constructor(value, name, suit){
	this.value = value;
	this.name = name;
	this.suit = suit;
}

}

class Deck {
    constructor(names, suits) {
	this.names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
	this.suits = ['Hearts','Diamonds','Spades','Clubs'];

    }

    createDeck = function() {
        let cards = [];
    for( var s = 0; s < this.suits.length; s++ ) {
        for( var n = 0; n < this.names.length; n++ ) {
            cards.push( new Card( n+1, this.names[n], this.suits[s] ) );
        
        }
    }
    return cards;
    }

}
    shuffle = function(o) {
	    for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	    return o;

}


const deck1 = new Deck();
const nDeck = deck1.createDeck();
const shuffledDeck = shuffle(nDeck);
console.log(shuffledDeck);


class Player {
    constructor(name, value) {
        this.name = name
        this.hand = [];
        this.value = value
    }
    createHand = function () {
        let hand = [];
        for( let i = 0; i < 5; i++) {
           
           hand.push(shuffledDeck.pop())
           
        }
        const sum = hand.reduce((acc, o) => acc + parseInt(o.value), 0)

        
        console.log("Player: " + this.name + ". Value of cards on hand: " + sum)
        return hand
        

    }

    changeHand = function() {
        hand.slice(2,2)
        return hand;
    
    }


 
}



const playerOne = new Player("Slim");
const playerTwo = new Player("Luke");
const playerOneHand = playerOne.createHand();
console.log(playerOneHand)

const playerTwoHand = playerTwo.createHand();
console.log(playerTwoHand)



console.log(shuffledDeck)

/* const changedHandOne = playerOneHand.slice(2,2);
const changedHandTwo = playerTwoHand.slice(2,2); */

/* console.log(changedHandOne);
console.log(changedHandTwo); */


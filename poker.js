import { Deck, Player, Pile } from './classes.js'
/* /* /* import Card from './classes.js' */

/* class Card {
    constructor (suit, value) {
        this.suit = suit
        this.value = value

    }
    showCard() {
        console.log(this.suit, this.value)
    }


}


class Deck {
    constructor() {
        this.cards = []
         
    }
    build() {
        const suit = ['Hearts','Diamonds','Spades','Clubs']
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
        suit.forEach(suit => {
            values.forEach(val => {
                this.cards.push(new Card(suit, val))
            })
        })
    }

    shuffle() {
        var j, x, i;
        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = x;
        }
        console.log(deck)
    

    }

    getCards(number) {
        if (typeof number === 'undefined') number = 1;
        var returnCards = [];
        for (var i = number; i > 0; i--) {
          returnCards.push(this.cards.pop());
        }
        return returnCards;
      }
    

    showCards() {
        this.cards.forEach(card => {
            console.log(card)
        })
    }
}

class Player {
    constructor(name) {
        this.name = name
        this.hand = []

    }

    assignHand(num) {
        let cardsToGet = deck.getCards(num)
        this.hand.push(...cardsToGet)

        
    }

    showSum() {
        const sum = this.hand.reduce((acc, o) => acc + parseInt(o.value), 0)
        console.log(`Value of cards on ${this.name}s hand is ${sum}`)
        return sum
    }


        throwCards(number) {
            if (typeof number === 'undefined') number = 1;
            var thrownCards = [];
            for (var i = number; i > 0; i--) {

              thrownCards.push(this.hand.shift());
            }

            return thrownCards

        

    }



}

class Pile {
    constructor() {
        this.cards = [];


    }

    throwPileCards(number) {
        if (typeof number === 'undefined') number = 1;
        var thrownPileCards = [];
        for (var i = number; i > 0; i--) {

          thrownPileCards.push(this.cards.shift());
        }

        return thrownPileCards


}

}  */

// Skapar en ny kortlek, blandar den  och visar den i konsolen
const deck = new Deck()


deck.build()
deck.shuffle()

// Skapar två nya spelare och visar dem i konsolen

const slim = new Player('Slim')
const luke = new Player('Luke')
console.log(slim, luke)

// Ger spelarna 5 kort och visar den uppdaterade kortleken samt visar sammanlagda värdet på händerna

slim.assignHand(5);
luke.assignHand(5);
console.log(deck)
slim.showSum();
luke.showSum();


// Spelarna slänger två kort var och skapar en ny kasthög
const newPile = new Pile()

newPile.cards.push(...luke.throwCards(2), ...slim.throwCards(2))

// Spelarna tar två nya kort och visar den nya summan

slim.assignHand(2)
luke.assignHand(2)
console.log(deck)
console.log(slim, luke)
slim.showSum();
luke.showSum();

//  Spelarna lägger alla sina kort i kasthögen


newPile.cards.push(...slim.throwCards(5), ...luke.throwCards(5))

let thrownPileCards = newPile.throwPileCards(14);

deck.cards.push(...thrownPileCards)
console.log(newPile)
deck.shuffle()


























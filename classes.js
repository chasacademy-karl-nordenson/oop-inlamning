export class Card {
    constructor (suit, value) {
        this.suit = suit
        this.value = value

    }
    showCard() {
        console.log(this.suit, this.value)
    }


}

export class Deck {
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
        /* console.log(this.cards) */
    

    }

    pickNumOfCardsFromDeck(number) {
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

export class Player {
    constructor(name) {
        this.name = name
        this.hand = []

    }

    assignCardsToPlayer(newCards) {
        this.hand.push(...newCards)
        /* console.log(newCards) */

        
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

export class Pile {
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

}

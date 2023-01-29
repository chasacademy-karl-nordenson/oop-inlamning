import { Deck, Player, Pile } from "./classes.js";


/* const realTimeLog = (obj1, obj2) => {
    const frozenObj = (obj) => JSON.parse(JSON.stringify(obj));
    if(obj2){
        console.log(frozenObj(obj1), frozenObj(obj2))
    }else{
        console.log(frozenObj(obj1))
    }
} */
console.log('-------------------------------------------------')
// Skapar en ny kortlek, blandar den  och visar den i konsolen
const deck = new Deck();
deck.build();
deck.shuffle();
console.log(deck)
// Skapar två nya spelare och visar dem i konsolen

const slim = new Player("Slim");
const luke = new Player("Luke");

// Ger spelarna 5 kort och visar den uppdaterade kortleken samt visar sammanlagda värdet på händerna


slim.assignCardsToPlayer(deck.pickNumOfCardsFromDeck(5));
luke.assignCardsToPlayer(deck.pickNumOfCardsFromDeck(5));
console.log(slim)
console.log(luke)
slim.showSum();
luke.showSum();
console.log(deck)






// Spelarna slänger två kort var och skapar en ny kasthög
const newPile = new Pile();

newPile.cards.push(...luke.throwCards(2), ...slim.throwCards(2));
console.log(newPile)




// Spelarna tar två nya kort och visar den nya summan

slim.assignCardsToPlayer(deck.pickNumOfCardsFromDeck(2));
luke.assignCardsToPlayer(deck.pickNumOfCardsFromDeck(2));
console.log(slim)
console.log(luke)
slim.showSum();
luke.showSum();



console.log(deck);


//  Spelarna lägger alla sina kort i kasthögen och flyttar korten tillbaka till kortleken

newPile.cards.push(...slim.throwCards(5), ...luke.throwCards(5));

let thrownPileCards = newPile.throwPileCards(14);
deck.cards.push(...thrownPileCards);
console.log(newPile);
deck.shuffle();
console.log(deck)


console.log('-------------------------------------------------')
































class Card {
    constructor() {
        this.suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
        this.values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'Ace', 'Jack', 'Queen', 'King'];
    }
    getDeck() {
        var deck = new Array();

        for (let i = 0; i < this.suits.length; i++) {
            for (let x = 0; x < this.values.length; x++) {
                let card = { Value: this.values[x], Suit: this.suits[i] };
                deck.push(card);
            }
        }

        return deck;
    }

    shuffle(deck) {

        let get = new Array(), players, temp;
        let player;
        for (let i = deck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
            get.push(temp);
            //console.log(get);
        }
        let t = 0;
        for (let i = 1; i <= 4; i++) {
            console.log("player" + t);
        }
        //let no = Math.floor(Math.random() * 4) + 1;
        for (let j = 1; j <= 9; j++) {
            console.log(JSON.stringify(get.pop()));
        }
    }
}

module.exports = new Card();
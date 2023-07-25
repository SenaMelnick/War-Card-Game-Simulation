const fullDeck = [`Ace of Spades`, `2 of Spades`, `3 of Spades`, `4 of Spades`, `5 of Spades`, 
`6 of Spades`, `7 of Spades`, `8 of Spades`, `9 of Spades`, `10 of Spades`,
`Jack of Spades`, `Queen of Spades`, `King of Spades`,
`Ace of Hearts`, `2 of Hearts`, `3 of Hearts`, `4 of Hearts`, `5 of Hearts`, 
`6 of Hearts`, `7 of Hearts`, `8 of Hearts`, `9 of Hearts`, `10 of Hearts`,
`Jack of Hearts`, `Queen of Hearts`, `King of Hearts`,
`Ace of Diamonds`, `2 of Diamonds`, `3 of Diamonds`, `4 of Diamonds`, `5 of Diamonds`, 
`6 of Diamonds`, `7 of Diamonds`, `8 of Diamonds`, `9 of Diamonds`, `10 of Diamonds`,
`Jack of Diamonds`, `Queen of Diamonds`, `King of Diamonds`,
`Ace of Clubs`, `2 of Clubs`, `3 of Clubs`, `4 of Clubs`, `5 of Clubs`, 
`6 of Clubs`, `7 of Clubs`, `8 of Clubs`, `9 of Clubs`, `10 of Clubs`,
`Jack of Clubs`, `Queen of Clubs`, `King of Clubs`];


const shuffle = array => {
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    //sets i to a random index within the array

    t = array[m];
    array[m] = array[i];
    array[i] = t;
    //swaps the current index's vaule with the randomly selected index's vaule
  }
  //this shuffle method is known as the Fisher-Yates shuffle

  
  let half = Math.ceil(array.length / 2);

  let newDecks = {
  deck1: array.slice(0, half),
  deck2: array.slice(half)
  };
  //makes two new arrays out of the first and second halves of the shuffled array

  return newDecks;
};

const startGame = () => {
    let deck = shuffle(fullDeck);
    let player1Score = 0;
    let player2Score = 0;

    for (let i = 0; i < 26; i++) {
        let val1 = checkVal(deck.deck1[i]);
        let val2 = checkVal(deck.deck2[i]);
        console.log(`Round ${i + 1}:`);
        console.log(`Player 1 played ${deck.deck1[i]} and Player 2 played ${deck.deck2[i]}.`);

        if (val1 > val2) {
            player1Score += 1
            console.log(`Player 1 scored!`);
        } else if (val1 < val2) {
            player2Score += 1
            console.log(`Player 2 scored!`)
        } else {
            console.log(`Tied!`);
        };

        console.log(`${player1Score} - ${player2Score}
        `);
    };

    if (player1Score > player2Score) {
        console.log(`Player 1 wins!`);
    } else if (player1Score < player2Score) {
        console.log(`Player 2 wins!`);
    } else {
        console.log(`It's a tie!`);
    };
    
};

const checkVal = (card) => {
    let val;
    if (card.includes(`Ace`)) {
        val = 1;
    }
    else if (card.includes(`2`)) {
        val = 2;
    }
    else if (card.includes(`3`)) {
        val = 3;
    }
    else if (card.includes(`4`)) {
        val = 4;
    }
    else if (card.includes(`5`)) {
        val = 5;
    }
    else if (card.includes(`6`)) {
        val = 6;
    }
    else if (card.includes(`7`)) {
        val = 7;
    }
    else if (card.includes(`8`)) {
        val = 8;
    }
    else if (card.includes(`9`)) {
        val = 9;
    }
    else if (card.includes(`10`)) {
        val = 10;
    }
    else if (card.includes(`Jack`)) {
        val = 11;
    }
    else if (card.includes(`Queen`)) {
        val = 12;
    }
    else {
        val = 13;
    };

    return val;
};

startGame();
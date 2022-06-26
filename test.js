function ticket(start, stop) {
  const station = [
    { id: 1, station: 'H.S.R. Layout', km: 0 },
    { id: 2, station: ' Madiwala', km: 5 },
    { id: 3, station: 'Forum', km: 11 },
    { id: 4, station: 'Shanthinagara', km: 15 },
    { id: 5, station: 'Richmond Circle', km: 18 },
    { id: 6, station: 'Chancery Pavillion', km: 23 },
    { id: 7, station: ' Bowring Institute', km: 25 },
    { id: 8, station: 'Bangalore Club', km: 27 },
    { id: 9, station: 'Indian Express', km: 29 },
    { id: 10, station: ' Vasantanagara', km: 30 },
    { id: 11, station: 'RM Guttahalli', km: 33 },
    { id: 12, station: 'Mekhri Circle', km: 35 },
    { id: 13, station: 'Hebbala', km: 37 },
    { id: 14, station: 'BIAL ', km: 62 },
  ]
  const [source] = station.filter((e) => e.id == start)
  const [destination] = station.filter((e) => e.id == stop)
  let totladistance = destination.km - source.km
  let amount = 0, threeKM = 3, TwentyKM = 20
  if (totladistance < threeKM) {
    amount = threeKM // I have little bit doubt here if the far Rs 3/KM then amount =totladistance*threeKM
    return
  }
  //  calculat fare for first 3 km that 3
  if (totladistance > threeKM) {
    amount = threeKM //I have little bit doubt  also here if the far Rs3/KM then amount =threeKM*threeKM or if the fare of first 3 KM is 3  amount = threeKM
    totladistance -= threeKM
  }
  // if diatance is garater then or equal 20 then fare is 2 time  of distance, we already coverd
  //  3 km, reaming 17 will 17*2
  if (totladistance >= 20) {
    amount += (TwentyKM - threeKM) * 2
    totladistance -= (TwentyKM - threeKM)
  }
  // if distance is less than 20 remaing amount will total (distanc -3 )*2 becouse 3 km already covred
  else {
    amount += (totladistance * 2)
    totladistance = 0
  }
  //  remaing amount will be calcualted by 1 
  amount += totladistance
  console.log(source.station, '>', destination.station, '=', amount);

}

ticket(1, 10)
ticket(7, 12)

function fourPlayer() {

  function getDeck() {
    var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["♠", "♣", "♥", "♦"];
    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
      for (var x = 0; x < cards.length; x++) {
        var card = { value: cards[x], Suit: suits[i] };
        deck.push(card);
      }
    }

    return deck;
  }

  function shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = deck[newIndex]
      deck[newIndex] = deck[i]
      deck[i] = oldValue
    }
  }

  let stop;
  function StartGame() {
    let player1Deck, player2Deck, player3Deck, player4Deck;
    const deck = getDeck()
    shuffle(deck)
    const deckMidpoint = Math.ceil(deck.length / 4)
    player1Deck = deck.slice(0, deckMidpoint)
    player2Deck = deck.slice(deckMidpoint, (deckMidpoint * 2))
    player3Deck = deck.slice((deckMidpoint * 2), (deckMidpoint * 3))
    player4Deck = deck.slice((deckMidpoint * 3), deck.length)
    // console.log(deck)

    function updateDeckCount() {
      console.log('Player 1', player1Deck.length);
      console.log('Player 2', player2Deck.length);
      console.log('Player 3', player3Deck.length);
      console.log('Player 4', player4Deck.length);
    }

    function isRoundWinner(card1, card2, card3, card4) {
      if (card1) {
        const filterCard = [card2, card3, card4].filter(e => !!e)
        if (filterCard.length > 0) {
          let flag = false
          for (const card of filterCard) {
            if (card1.value > card.value)
              flag = true
            else
              flag = false
          }
          return flag
        }
        else true
      }
      else return false
    }

    function isGameOver(p1, p2, p3) {
      return p2.length === 0 && p3.length === 0 && p1.length === 0
    }

    return function flipCard() {
      const player1Card = player1Deck.pop()
      const player2Card = player2Deck.pop()
      const player3Card = player3Deck.pop()
      const player4Card = player4Deck.pop()
      updateDeckCount()
      // console.log('p1', player1Card, 'p2', player2Card, 'p3', player3Card, 'p4', player4Card);
      if (isRoundWinner(player1Card, player2Card, player3Card, player4Card)) {
        console.log('Player 1 gnig to Win');
        player1Deck.push(player1Card)
        player1Deck.push(player2Card)
        player1Deck.push(player3Card)
        player1Deck.push(player4Card)
      } else if (isRoundWinner(player2Card, player3Card, player4Card, player1Card)) {
        console.log("Player 2 gnig to Win");
        player2Deck.push(player1Card)
        player2Deck.push(player2Card)
        player2Deck.push(player3Card)
        player2Deck.push(player4Card)

      } else if (isRoundWinner(player3Card, player4Card, player1Card, player2Card)) {
        console.log("Player 3 gnig to Win");
        player3Deck.push(player1Card)
        player3Deck.push(player2Card)
        player3Deck.push(player3Card)
        player3Deck.push(player4Card)

      } else if (isRoundWinner(player4Card, player1Card, player2Card, player3Card)) {
        console.log("Player 4 gnig to Win");
        player4Deck.push(player1Card)
        player4Deck.push(player2Card)
        player4Deck.push(player3Card)
        player4Deck.push(player4Card)
      } else {
        const filterPlayer = [player1Deck, player2Deck, player3Deck, player4Deck].filter(e => e.length > 0)
        if (filterPlayer.length >= 2)
          console.log('Draw');
      }
      // console.log(player2Deck);
      if (isGameOver(player2Deck, player3Deck, player4Deck)) {
        console.log("Player 1 Win!!");
        clearInterval(stop)
      } else if (isGameOver(player3Deck, player4Deck, player1Deck,)) {
        console.log("Player 2 Win!!");
        clearInterval(stop)
      }
      else if (isGameOver(player4Deck, player1Deck, player2Deck,)) {
        console.log("Player 3 Win!!");
        clearInterval(stop)
      }
      else if (isGameOver(player1Deck, player2Deck, player3Deck)) {
        console.log("Player 4 Win!!");
        clearInterval(stop)
      }
    }

  }




  const flipCard = StartGame()
  stop = setInterval(() => {
    flipCard()
  }, 10);
}
fourPlayer()









function towPlayer() {

  function getDeck() {
    var cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    var suits = ["♠", "♣", "♥", "♦"];
    var deck = new Array();

    for (var i = 0; i < suits.length; i++) {
      for (var x = 0; x < cards.length; x++) {
        var card = { value: cards[x], Suit: suits[i] };
        deck.push(card);
      }
    }

    return deck;
  }

  function shuffle(deck) {
    // for 1000 turns
    // switch the values of two random cards
    for (var i = 0; i < 1000; i++) {
      var location1 = Math.floor((Math.random() * deck.length));
      var location2 = Math.floor((Math.random() * deck.length));
      var tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }

    return deck
  }
  let playerDeck, computerDeck, stop;
  function StartGame() {
    const deck = getDeck()
    shuffle(deck)
    const deckMidpoint = Math.ceil(deck.length / 2)
    playerDeck = deck.slice(0, deckMidpoint)
    computerDeck = deck.slice(deckMidpoint, deck.length)
    // console.log(deck);
  }
  StartGame()

  function flipCard() {
    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()
    updateDeckCount()
    if (isRoundWinner(playerCard, computerCard)) {
      console.log('You gnig to Win');
      playerDeck.push(playerCard)
      playerDeck.push(computerCard)
    } else if (isRoundWinner(computerCard, playerCard)) {
      console.log("You gnig to Lose");
      computerDeck.push(playerCard)
      computerDeck.push(computerCard)
    } else {
      console.log('Draw');
      flipCard()
      // playerDeck.push(playerCard)
      // computerDeck.push(computerCard)
    }

    if (isGameOver(playerDeck)) {
      console.log("You Lose!!");
      clearInterval(stop)
    } else if (isGameOver(computerDeck)) {
      console.log("You Win!!");
      clearInterval(stop)
    }
  }

  function updateDeckCount() {
    console.log(computerDeck.length);
    console.log(playerDeck.length);
  }

  function isRoundWinner(cardOne, cardTwo) {
    return cardOne.value > cardTwo.value
  }

  function isGameOver(deck) {
    return deck.length === 0
  }


  stop = setInterval(() => {
    flipCard()
  }, 1000);
}

// towPlayer()





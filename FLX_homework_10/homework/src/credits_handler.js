function userCard(index) {
  let balance = 100,
    transactionLimit = 100,
    historyLogs = [],
    key = index;
  const PERCENT = 0.05;
  function updateHistory(str, amm, date) {
    historyLogs.push({ str, amm, date });
  }

  return {
    getCardOptions: function() {
      return {
        balance,
        transactionLimit,
        historyLogs,
        key
      };
    },

    putCredits: function(amount) {
      updateHistory("Received of credits", amount, new Date());
      balance += amount;
    },

    takeCredits: function(amount) {
      updateHistory("Withdrawal of credits", amount, new Date());
      if (amount > transactionLimit) {
        console.log("Transaction limit!");
        return;
      }
      balance -= amount;
    },

    setTransactionLimit: function(amount) {
      updateHistory("Transaction limit change", amount, new Date());
      transactionLimit = amount;
    },

    transferCredits: function(amount, card) {
      updateHistory("Withdrawal of credits", amount, new Date());
      if (amount > balance) {
        console.log("You have no so much money!");
        return;
      }

      balance = balance - amount - amount * PERCENT;
      card.putCredits(amount);
    }
  };
}

function UserAccount(name) {
  const MAX_CARDS = 3;
  const ZERO_CARDS = 0;
  this.name = name;
  this.cards = [];
  let currentCards = 0;

  this.addCard = function() {
    if (currentCards >= MAX_CARDS) {
      console.log("You have already 3 cards.");
      return;
    }

    let card = userCard(currentCards + 1);
    this.cards.push(card);
    currentCards++;
    return card;
  };

  this.getCardByKey = function(index) {
    if (index >= MAX_CARDS || index <= ZERO_CARDS) {
      console.log("No card with such index.");
      return;
    }

    return this.cards[index - 1];
  };
}

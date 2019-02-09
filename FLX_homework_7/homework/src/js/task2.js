let attempts;
let YourNumber;
let TotalPrice = 0;
let MaxRandom = 5;
let MaxAttempt = 3;
let MaxPrice = 10;
let Price = 0;

if (confirm("Do you want to play a game?") === false) {
  alert("You did not become a millionaire, but can.");
} else {
  for (attempts = 3; attempts > 0; attempts--) {
    TotalPrice = Math.floor(MaxPrice / Math.pow(2, MaxAttempt - attempts));
    let result = prompt(
      "enter a number from 0 to " +
        MaxRandom +
        "\n" +
        "Attempts left :" +
        attempts +
        "\n" +
        "Total Prize :" +
        Price +
        "$" +
        "\n" +
        "Possible price on current attempt :" +
        TotalPrice +
        "$" +
        "\n" +
        "",
      "number"
    );

    YourNumber = parseInt(result);
    let random = Math.floor(Math.random() * MaxRandom);

    switch (YourNumber) {
      case random:
        switch (attempts) {
          case 1:
          case 2:
          case 3:
            attempts -= 3;
            Price += TotalPrice;
            if (
              confirm(
                "Congratulation!   Your prize is: " +
                  Price +
                  "$" +
                  "\n" +
                  " Do you want to continue?"
              ) === true
            ) {
              MaxPrice *= 3;
              attempts = 4;
              MaxRandom *= 2;
            } else {
              alert("Thank you for a game. Your prize is: " + Price + "$");

              MaxPrice = 10;
              if (confirm(" Do you want to continue?") === true) {
                attempts = "4";
                MaxRandom = "5";

                MaxPrice = 10;
                Price = 0;
              }
            }

            break;
          default:
            "not guess ";
        }
        break;
      default:
        switch (attempts) {
          case 1:
            alert("Thank you for a game. Your prize is: 0 $");
            if (confirm("Do you want to play again?") === true) {
              attempts = "4";
              MaxRandom = "5";
              MaxPrice = "10";
              Price = 0;
            }
            break;
          default:
            "not guess ";
        }
    }
  }
}

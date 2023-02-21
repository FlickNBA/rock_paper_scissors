let getComputerChoice = () => {
  let R = Math.random();
  return R <= 0.3333 ? "Rock" : R <= 0.6667 ? "Paper" : "Scissors";
};

let playRound = (playerChoice, computerChoice) => {
  playerChoice = `${playerChoice.substr(0, 1).toUpperCase()}${playerChoice
    .substr(1)
    .toLowerCase()}`;

  if (
    !(
      playerChoice == "Rock" ||
      playerChoice == "Paper" ||
      playerChoice == "Scissors"
    )
  ) {
    return false;
  }

  let Winners = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  let bWords = ["beats", "beat"];

  //   console.log(
  //     `Player chose ${playerChoice}, Computer chose ${computerChoice}.`
  //   );

  if (computerChoice == Winners[playerChoice]) {
    let bWord = playerChoice == "Scissors" ? bWords[1] : bWords[0];
    return `You win! ${playerChoice} ${bWord} ${computerChoice}!`;
  } else if (computerChoice == playerChoice) {
    return `You tied! Play another round.`;
  } else {
    let bWord = computerChoice == "Scissors" ? bWords[1] : bWords[0];
    return `You lose! ${computerChoice} ${bWord} ${playerChoice}.`;
  }
};

let playGame = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("What do you choose?");
    let gameResult = playRound(playerChoice, getComputerChoice());
    if (gameResult != false) {
      let magicLetter = gameResult.substr(4, 1);
      console.log(gameResult);
      //   console.log(magicLetter);
      switch (magicLetter) {
        case "w":
          //   console.log(`Player won.`);
          playerScore++;
          break;
        case "l":
          //   console.log(`Player lost.`);
          computerScore++;
          break;
        case "t":
          //   console.log(`Player tied.`);
          break;
      }
    } else {
      console.log(`Player input was incorrect.`);
    }
  }
  //  return R <= 0.3333 ? "Rock" : R <= 0.6667 ? "Paper" : "Scissors";
  let gameWinner =
    playerScore > computerScore
      ? "Player"
      : playerScore < computerScore
      ? "Computer"
      : playerScore == computerScore
      ? "Tie"
      : "???";
  console.log(`Final score:
    Player => ${playerScore}
    Computer => ${computerScore}
    Winner => ${gameWinner}`);
};

playGame();

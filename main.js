const getComputerChoice = () => {
  let R = Math.random();
  return R <= 0.3333 ? "Rock" : R <= 0.6667 ? "Paper" : "Scissors";
};

const playRound = (playerChoice, computerChoice) => {
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

// const playGame = () => {
//   let playerScore = 0;
//   let computerScore = 0;
//   for (let i = 0; i < 5; i++) {
//     let playerChoice = prompt("What do you choose?");
//     let gameResult = playRound(playerChoice, getComputerChoice());
//     if (gameResult != false) {
//       let magicLetter = gameResult.substr(4, 1);
//       console.log(gameResult);
//       //   console.log(magicLetter);
//       switch (magicLetter) {
//         case "w":
//           //   console.log(`Player won.`);
//           playerScore++;
//           break;
//         case "l":
//           //   console.log(`Player lost.`);
//           computerScore++;
//           break;
//         case "t":
//           //   console.log(`Player tied.`);
//           break;
//       }
//     } else {
//       console.log(`Player input was incorrect.`);
//     }
//   }
//   //  return R <= 0.3333 ? "Rock" : R <= 0.6667 ? "Paper" : "Scissors";
//   let gameWinner =
//     playerScore > computerScore
//       ? "Player"
//       : playerScore < computerScore
//       ? "Computer"
//       : playerScore == computerScore
//       ? "Tie"
//       : "???";
//   console.log(`Final score:
//     Player => ${playerScore}
//     Computer => ${computerScore}
//     Winner => ${gameWinner}`);
// };

const updateScore = (playerWon, gameTied = false) => {
  let targetSelector = "xD";
  if (gameTied) {
    return false;
  } else {
    playerWon
      ? (targetSelector = "playerScore")
      : (targetSelector = "computerScore");
    return targetSelector;
  }
};

const appendScore = (
  targetSelector,
  playerChoice,
  computerChoice,
  gameResult
) => {
  if (targetSelector) {
    let scoreDiv = document.querySelector(`#${targetSelector}`);
    let currentScore = Number(scoreDiv.textContent.substr(-1, 1));
    let restScore = scoreDiv.textContent.substr(
      0,
      scoreDiv.textContent.length - 1
    );

    currentScore++;

    if (currentScore == 5) {
      let winnerWord = targetSelector == "playerScore" ? "Player" : "Computer";
      let loserDiv =
        targetSelector == "playerScore" ? "#computerScore" : "#playerScore";
      let divFlex = document.querySelector(".flex");
      let divRecent = document.querySelector(".recent");
      let winnerH1 = document.querySelector("#whoWon");
      winnerH1.textContent = `${winnerWord} won ${currentScore}:${document
        .querySelector(loserDiv)
        .textContent.substr(-1, 1)}!`;
      divFlex.remove();
      divRecent.remove();
      return;
    }

    scoreDiv.textContent = `${restScore}${currentScore}`;
  }

  let newH1 = document.createElement("h1");
  newH1.innerHTML = `<h2>Player: <strong>${playerChoice}</strong>, Computer: <strong>${computerChoice}</strong>, Result: <strong>${gameResult}</strong></h2>`;
  const recentDiv = document.querySelector(".recent");
  recentDiv.appendChild(newH1);
};

const userButtons = document.querySelectorAll(".buttons div a");

userButtons.forEach((userButton) => {
  userButton.addEventListener("click", () =>
    playRound2(userButton.dataset["choice"].trim())
  );
});

const playRound2 = (xD) => {
  const randomChoice = getComputerChoice();

  document.querySelector("#computerChoice").textContent = randomChoice;

  let gameResult = playRound(xD, randomChoice);

  if (gameResult != false) {
    let magicLetter = gameResult.substr(4, 1);
    // console.log(gameResult);
    switch (magicLetter) {
      case "w":
        appendScore(updateScore(true), xD, randomChoice, "Win");
        break;
      case "l":
        appendScore(updateScore(false), xD, randomChoice, "Lose");
        break;
      case "t":
        appendScore(updateScore("", true), xD, randomChoice, "Tie");
        break;
    }
  } else {
    console.log(`Player input was incorrect.`);
  }
};

let getComputerChoice = () => {
  let R = Math.random();
  return R <= 0.333 ? "Rock" : R <= 0.667 ? "Paper" : "Scissors";
};

let playRound = (playerChoice, computerChoice) => {
  let Winners = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  let bWords = ["beats", "beat"];

  console.log(
    `Player chose ${playerChoice}, Computer chose ${computerChoice}.`
  );

  if (computerChoice == Winners[playerChoice]) {
    let bWord = playerChoice == "Scissors" ? bWords[1] : bWords[0];
    console.log(`You win! ${playerChoice} ${bWord} ${computerChoice}!`);
  } else if (computerChoice == playerChoice) {
    console.log(`Tie! Play another round.`);
  } else {
    let bWord = computerChoice == "Scissors" ? bWords[1] : bWords[0];
    console.log(`You lose! ${computerChoice} ${bWord} ${playerChoice}.`);
  }
};

playRound("Scissors", getComputerChoice());
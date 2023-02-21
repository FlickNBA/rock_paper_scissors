let getComputerChoice = () => {
  let R = Math.random();
  return R <= 0.333 ? "Rock" : R <= 0.667 ? "Paper" : "Scissors";
};

console.log(getComputerChoice());

let playRound = (playerChoice, computerChoice) => {
    
}
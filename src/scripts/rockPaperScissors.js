const chooseTheWinner = (player, computer) => {
  if (
    (player === "rock" && computer === "paper") ||
    (player === "scissor" && computer === "rock") ||
    (player === "paper" && computer === "scissors")
  )
    return "Computer wins";
  else if (player === computer) return "Tie";
  else return "Player wins";
};

const rockPaperScissors = () => {
  const possibleOptions = ["rock", "paper", "scissors"];

  let winner = "";
  let games = 0;
  let computer = "";

  while (games < 2) {

    computer = possibleOptions[Math.floor(Math.random() * 3)];
    
    let player = prompt("Select your  hand");

    while (!possibleOptions.includes(player)) {
      console.error("Only rock paper or scissors");
      player = prompt("Select your  hand");
    }
    console.log(`Player: ${player} - Computer: ${computer}`);

    winner = chooseTheWinner(player, computer);
    games++;

    console.log(winner);
  }
};

rockPaperScissors();

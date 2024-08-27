function computerChoice(max) {
    let computerChoice = 0;
    return Math.floor(Math.random() * max);
  }
  

  let playerChoice = prompt("Rock, Paper or Scissors?");

  if (playerChoice === "Rock"){
    console.log("You have chosen Rock.")
  }else if (playerChoice === "Paper") {
    console.log("You have chosen Paper")
  } else {
    console.log("You have chosen Scissors")
  }
  
  if (computerChoice(3) === 0) {
    console.log("Computer chooses Rock")
  } else if (computerChoice(3) === 1) {
    console.log("Computer chooses Paper")
  } else {
    console.log("Computer chooses Scissors")
  }

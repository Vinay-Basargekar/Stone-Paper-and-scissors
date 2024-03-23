// Variables to track user and computer scores
let userScore = 0;
let compScore = 0;

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

const msg = document.getElementById("msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

// Event listeners for user choices
rock.addEventListener("click", () => {
	playGame(rock.getAttribute("id"));
});
paper.addEventListener("click", () => {
	playGame(paper.getAttribute("id"));
});
scissors.addEventListener("click", () => {
	playGame(scissors.getAttribute("id"));
});

// Functions
let showWinner = (userWin) => {
	if (userWin) {
		// If user wins
		userScore++;
		userScorePara.innerText = userScore;
		console.log("You win!");
		msg.innerText = "You win!";
	} else {
		// If user loses
		compScore++;
		compScorePara.innerText = compScore;
		console.log("You lose!");
		msg.innerText = "You lose!";
	}
};

let playGame = (userChoice) => {
	console.log("Your choice: " + userChoice);

	// Generate computer's choice
	const computerChoice = compChoice();
	console.log("Computer's choice: " + computerChoice);

	if (userChoice === computerChoice) {
		// If it's a draw
		console.log("It's a draw!");
		msg.innerText = "Game was Draw. Play again.";
	} else {
		// Determine the winner
		let userWin = false;
		if (
			(userChoice === "rock" && computerChoice === "scissors") ||
			(userChoice === "paper" && computerChoice === "rock") ||
			(userChoice === "scissors" && computerChoice === "paper")
		) {
			userWin = true;
		}
		// Show the winner
		showWinner(userWin);
	}
};

let compChoice = () => {
	// Generate computer's choice randomly
	const arr = ["rock", "paper", "scissors"];
	let compIndex = Math.floor(Math.random() * 3);
	return arr[compIndex];
};

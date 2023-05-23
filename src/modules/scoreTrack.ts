import updatePlayerScoreDOM from "./updatePlayerScoreDOM";
import updateComputerScoreDOM from "./updateComputerScoreDOM";
import checkForWinner from "./checkForWinner";
let playerScore = 0;
let computerScore = 0;

export function resetScore() {
	playerScore = 0;
	computerScore = 0;
}
export default function scoreTrack(result: string) {
	if (result === "Player Wins!") {
		playerScore++;
		updatePlayerScoreDOM(playerScore);
	} else if (result === "Computer Wins!") {
		computerScore++;
		updateComputerScoreDOM(computerScore);
	}
	checkForWinner(playerScore, computerScore);
}

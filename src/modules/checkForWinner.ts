import endGame from "./endGame";
export default function checkForWinner(playerScore: number, computerScore: number) {
	if (playerScore >= 5) {
		endGame("Player wins the game!");
	} else if (computerScore >= 5) {
		endGame("Computer wins the game!");
	}
}

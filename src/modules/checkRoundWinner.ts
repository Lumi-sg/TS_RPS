export default function checkRoundWinner(playerChoice: string, computerChoice: string): string {
	if (playerChoice === computerChoice) {
		return "draw";
	} else if (
		(playerChoice === "rock" && computerChoice === "scissors") ||
		(playerChoice === "paper" && computerChoice === "rock") ||
		(playerChoice === "scissors" && computerChoice === "paper")
	) {
		return "Player Wins!";
	} else {
		return "Computer Wins!";
	}
}

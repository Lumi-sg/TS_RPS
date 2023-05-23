export default function checkRoundWinner(playerChoice: string, computerChoice: string): string {
	const rules: Record<string, string> = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper",
	};

	if (playerChoice === computerChoice) {
		return "draw";
	} else if (rules[playerChoice] === computerChoice) {
		return "Player Wins!";
	}
	return "Computer Wins!";
}

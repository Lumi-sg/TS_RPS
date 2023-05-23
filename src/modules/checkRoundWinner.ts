import scoreTrack from "./scoreTrack";
export default function checkRoundWinner(playerChoice: string, computerChoice: string): string {
	const rules: Record<string, string> = {
		rock: "scissors",
		paper: "rock",
		scissors: "paper",
	};
	let result: string = "";
	if (playerChoice === computerChoice) {
		result = "Draw!";
		return result;
	} else if (rules[playerChoice] === computerChoice) {
		result = "Player Wins!";
		scoreTrack(result);
		return result;
	}

	result = "Computer Wins!";
	scoreTrack(result);
	return result;
}

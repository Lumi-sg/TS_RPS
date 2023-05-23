export default function updatePlayerScoreDOM(score: number) {
	const playerScore = document.querySelector("#player-score") as HTMLElement;
	if (playerScore) {
		playerScore.textContent = score.toString();
	}
}

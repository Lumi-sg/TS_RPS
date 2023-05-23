export default function updateComputerScoreDOM(score: number) {
	const computerScore = document.querySelector("#computer-score") as HTMLElement;
	if (computerScore) {
		computerScore.textContent = score.toString();
	}
}

export default function getPlayerChoice(callback: (playerChoice: string) => void) {
	const buttons = document.querySelectorAll(".choice");

	const getPlayerChoice = (event: Event) => {
		const buttonValue = (event.target as HTMLInputElement).value;
		return buttonValue;
	};

	buttons.forEach((button) =>
		button.addEventListener("click", (event: Event) => {
			const playerChoice = getPlayerChoice(event);
			callback(playerChoice);
		})
	);
}

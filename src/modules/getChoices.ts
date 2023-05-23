import game from "./game";

export default function getChoices() {
	console.log("initEventListeners");
	const buttons = document.querySelectorAll(".choice");

	const getPlayerChoice = (event: Event) => {
		const buttonValue = (event.target as HTMLInputElement).value;
		return buttonValue;
	};

	const computerChoice = () => {
		const options = ["rock", "paper", "scissors"];
		const randomIndex = Math.floor(Math.random() * options.length);
		return options[randomIndex];
	};

	buttons.forEach((button) =>
		button.addEventListener("click", (event: Event) => {
			game(getPlayerChoice(event), computerChoice());
		})
	);
}

export default function getComputerChoice() {
	const options = ["rock", "paper", "scissors"];
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}

import getPlayerChoice from "./getPlayerChoice";
import checkRoundWinner from "./checkRoundWinner";
import getComputerChoice from "./getComputerChoice";
import updateResult from "./updateResult";

export default function game() {
	const handleRoundResult = (result: string) => {
		updateResult(result);
	};

	const handleChoices = (playerChoice: string) => {
		const computerChoice = getComputerChoice();
		const roundResult = checkRoundWinner(playerChoice, computerChoice);
		handleRoundResult(roundResult);
	};

	getPlayerChoice(handleChoices);
}

import checkRoundWinner from "./checkRoundWinner";
export default function game(playerChoice: string, computerChoice: string) {
	console.log(`Player: ${playerChoice}`);
	console.log(`Computer: ${computerChoice}`);
	console.log(checkRoundWinner(playerChoice, computerChoice));
}

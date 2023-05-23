import checkRoundWinner from "./checkRoundWinner";
export default function game(playerChoice, computerChoice) {
    console.log("Player: ".concat(playerChoice));
    console.log("Computer: ".concat(computerChoice));
    console.log(checkRoundWinner(playerChoice, computerChoice));
}
//# sourceMappingURL=game.js.map
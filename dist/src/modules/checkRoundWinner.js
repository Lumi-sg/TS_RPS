export default function checkRoundWinner(playerChoice, computerChoice) {
    var rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper",
    };
    if (playerChoice === computerChoice) {
        return "draw";
    }
    else if (rules[playerChoice] === computerChoice) {
        return "Player Wins!";
    }
    return "Computer Wins!";
}
//# sourceMappingURL=checkRoundWinner.js.map
import game from "./game";
export default function getChoices() {
    console.log("initEventListeners");
    var buttons = document.querySelectorAll(".choice");
    var getPlayerChoice = function (event) {
        var buttonValue = event.target.value;
        return buttonValue;
    };
    var computerChoice = function () {
        var options = ["rock", "paper", "scissors"];
        var randomIndex = Math.floor(Math.random() * options.length);
        return options[randomIndex];
    };
    buttons.forEach(function (button) {
        return button.addEventListener("click", function (event) {
            game(getPlayerChoice(event), computerChoice());
        });
    });
}
//# sourceMappingURL=getChoices.js.map
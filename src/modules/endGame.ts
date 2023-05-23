import updateComputerScoreDOM from "./updateComputerScoreDOM";
import updatePlayerScoreDOM from "./updatePlayerScoreDOM";
import { resetScore } from "./scoreTrack";
import game from "./game";
import updateResult from "./updateResult";

export default function endGame(winner: string) {
	const body = document.querySelector("body");
	if (body) {
		body.classList.add("blur");
		const modal = document.createElement("div");
		modal.classList.add("modal");
		modal.innerHTML = `
          <div class="modal-content">
            <h2>${winner}</h2>
            <button id="play-again-btn">Play Again?</button>
          </div>
        `;

		document.body.appendChild(modal);
		const againButton = document.querySelector("#play-again-btn");
		if (againButton) {
			againButton.addEventListener("click", () => {
				updateComputerScoreDOM(0);
				updatePlayerScoreDOM(0);
				resetScore();
				modal.remove();
				body.classList.remove("blur");
				updateResult("Make a selection!");
			});
		}
	}
}

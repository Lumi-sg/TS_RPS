export default function initEventListeners() {
	console.log("yo");
	const buttons = document.querySelectorAll(".choice");
	buttons.forEach((button) =>
		button.addEventListener("click", (event: Event) => {
			console.log((event.target as HTMLInputElement).value);
		})
	);
}

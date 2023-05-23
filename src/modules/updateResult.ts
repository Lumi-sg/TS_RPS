export default function updateResult(result: string) {
	const resultText = document.querySelector(".result") as HTMLElement;

	if (resultText) {
		resultText.innerText = result;
	}
}

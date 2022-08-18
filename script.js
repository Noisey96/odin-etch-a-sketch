function color(e) {
	e.target.style.backgroundColor = "#000";
}

function initContent(size = 16) {
	let content = document.querySelector("#grid");
	content.replaceChildren();
	for (let i = 0; i < size; i++) {
		let newRow = document.createElement("div");
		newRow.classList.add("grid-row");
		for (let j = 0; j < size; j++) {
			let newCell = document.createElement("div");
			newCell.classList.add("grid-cell");
			newCell.style.height = `${960 / size}px`;
			newCell.style.width = `${960 / size}px`;
			newCell.addEventListener("mousemove", (e) => color(e));
			newRow.appendChild(newCell);
		}
		content.appendChild(newRow);
	}

	let headerSizeAttr = document.querySelector(
		"#settings #current-values .size span"
	);
	headerSizeAttr.textContent = `${size} x ${size}`;
}

function changeSize() {
	let newSize;
	while (!newSize) {
		newSize = prompt("Please enter a new size from 1 to 100!");
		newSize = Number(newSize);
		if (!newSize || newSize <= 0 || newSize > 100) {
			newSize = "";
			alert("Invalid input. Please try again!");
		}
	}
	initContent(newSize);
}

initContent();

let changeSizeButton = document.querySelector("#controls .size");
changeSizeButton.addEventListener("click", (_e) => changeSize());

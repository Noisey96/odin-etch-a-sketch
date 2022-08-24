function color(e) {
	e.target.style.backgroundColor = currentColor;
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

	let currentSize = document.querySelector("#size");
	currentSize.textContent = `${size} x ${size}`;
}

function changeSize(e) {
	let newSize = e.target.value;
	initContent(newSize);
}

function changeColor(e) {
	let newColor = e.target.value;
	currentColor = newColor;
	changeSizeSlider.style.backgroundColor = newColor;
}

let currentColor = "#000000";
initContent();

let changeSizeSlider = document.querySelector("#size-control");
changeSizeSlider.addEventListener("input", (e) => changeSize(e));

let changeColorPicker = document.querySelector("#color-control");
changeColorPicker.addEventListener("input", (e) => changeColor(e));
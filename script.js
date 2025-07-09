//your JS code here. If required.
let counter = document.getElementById("counterVal");
let counterBtn = document.getElementById("counterBtn");

counterBtn.addEventListener("click", () => {
	counterVal = parseInt(counter.innerText);
	alert(counterVal);
	counterVal = counterVal+1;
	counter.innerText = counterVal;
	// return counterVal;
});
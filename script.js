//your JS code here. If required.
let counter = document.getElementById("counter");
let counterBtn = document.getElementById("incrementBtn");

counterBtn.addEventListener("click", () => {
	counterVal = parseInt(counter.innerText);
	alert(counterVal);
	counterVal = counterVal+1;
	counter.innerText = counterVal;
	// return counterVal;
});
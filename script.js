// Let values
let bottomLength = document.getElementById("length-bottom");
let topLength = document.getElementById("length-top");
let height = document.getElementById("height");
let finalOutput = document.getElementById("finaloutput");

// Event Listeners
document.getElementById("button").addEventListener("click", calculation);
// Functions
function calculation() {
  //Input
  let a = Number(bottomLength.value);
  let b = Number(topLength.value);
  let h = Number(height.value);

  let checkbox = document.getElementById("checkmark");
  let unit = document.getElementById("unit-of-measurement");
  let choice = unit.value;
  // Process
  let out = ((h * (a + b)) / 2).toFixed(2);
  // Output
  finalOutput.innerHTML = out + choice;

  bottomLength.value = "";
  topLength.value = "";
  height.value = "";
  finalOutput.style.border = "2px solid green";

  checkbox.innerHTML =
    "<img width = '20px' src='images/check.jpg' alt='checkmark'>";
}

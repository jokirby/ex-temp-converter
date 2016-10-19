function toCelsius () {
	var f2c = Math.round((document.getElementById("temp_input").value - 32) * (5/9));
		if (f2c > 32) {
			var output = document.getElementById("hot");
			 output.innerHTML = "Phew! It's hot out here! It's " + f2c + "degrees Celcius today.";
		} else if (f2c < 0) {
			var output = document.getElementById("cold");
				output.innerHTML = "Better get your coat out, it's " + f2c + "degrees Celcius today.";
		} else if (0 < f2c < 32) {
			var output = document.getElementById("norm");
				output.innerHTML = "Here is your converted temp: " + f2c + "degrees Celcius";
		}
}

function toFahrenheit () {
	var c2f = Math.round(document.getElementById("temp_input").value * 1.8 + 32);
	if (c2f > 90) {
		var output = document.getElementById("hot");
			 output.innerHTML = "Phew! It's hot out here! It's " + c2f + "degrees Fahrenheit today.";
	} else if (c2f < 32 ) {
		var output = document.getElementById("cold");
				output.innerHTML = "Better get your coat out, it's " + c2f + "degrees Fahrenheit today.";
	} else if (32 < c2f < 90) {
		var output = document.getElementById("norm");
				output.innerHTML = "Here is your converted temp: " + c2f + "degrees Fahrenheit";
	}
}


// Get a reference to the button element in the DOM
var buttonConverter = document.getElementById("converter")
	.addEventListener("click", determineConverter); 
var buttonClear = document.getElementById("clear")
	.addEventListener("click", reset);

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  var selectedUnit = document.querySelector('input[name = "units"]:checked').value;
  if (selectedUnit === "Fahrenheit") {
  	toFahrenheit();
  } else if (selectedUnit === "Celsius") {
  	toCelsius();
  }
}

function reset() {
	document.getElementById("temp_input").value = "";
	document.getElementById("hot").innerHTML = "";
	document.getElementById("cold").innerHTML ="";
	document.getElementById("norm").innerHTML ="";
}

// Assign a function to be executed when the button is clicked
// buttonConverter.addEventListener("click", determineConverter);
	


// In the HTML, have one input field where someone can enter in a temperature. 
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

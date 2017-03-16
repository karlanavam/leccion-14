function convertidorFahrenheit() {
	// body...
	var grados = parseInt(document.getElementById("campoFah").value);
	var resultadoCel = document.getElementById("campoCels");
	var celsius = (grados - 32) * (5/9);

	return resultadoCel.value = celsius;
}

function convertidorCelsius() {
	// body...
	var grados = parseInt(document.getElementById("campoCels").value);
	var resultadoFah = document.getElementById("campoFah");
	var fahrenheit = (grados * (9/5)) + 32;

	return resultadoFah.value = fahrenheit;
}
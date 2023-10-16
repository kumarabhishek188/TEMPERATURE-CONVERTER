function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celsius").value;
    var fahrenheitOutput = document.getElementById("fahrenheit");
    
    if (celsiusInput === "") {
        fahrenheitOutput.innerHTML = "";
    } else {
        var fahrenheitValue = (celsiusInput * 9/5) + 32;
        fahrenheitOutput.innerHTML = fahrenheitValue.toFixed(2) + " °F";
    }
}

function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheitInput").value;
    var celsiusOutput = document.getElementById("celsiusOutput");
    
    if (fahrenheitInput === "") {
        celsiusOutput.innerHTML = "";
    } else {
        var celsiusValue = (fahrenheitInput - 32) * 5/9;
        celsiusOutput.innerHTML = celsiusValue.toFixed(2) + " °C";
    }
}

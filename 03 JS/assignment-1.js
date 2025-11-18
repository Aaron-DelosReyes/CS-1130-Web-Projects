function convert() {
    let value = parseFloat(document.getElementById("value").value);
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let resultText = "";

    // Temperature conversions
    if (from === "C" && to === "F") {
        resultText = `${value}°C = ${(value * 9/5 + 32).toFixed(2)}°F`;
    } else if (from === "F" && to === "C") {
        resultText = `${value}°F = ${((value - 32) * 5/9).toFixed(2)}°C`;
    }

    // Distance conversions
    else if (from === "M" && to === "FT") {
        resultText = `${value} meters = ${(value * 3.28084).toFixed(2)} feet`;
    } else if (from === "FT" && to === "M") {
        resultText = `${value} feet = ${(value / 3.28084).toFixed(2)} meters`;
    }

    // Same unit selected
    else if (from === to) {
        resultText = `Same units selected. Value: ${value}`;
    }

    // Invalid combo
    else {
        resultText = "Invalid conversion selected.";
    }

    document.getElementById("result").textContent = "Result: " + resultText;
}

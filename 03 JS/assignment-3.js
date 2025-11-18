// 1. Factorial (While Loop)
function computeFactorial() {
    let n = parseInt(document.getElementById("factInput").value);
    let result = 1;
    let i = 1;

    while (i <= n) {
        result *= i;
        i++;
    }

    document.getElementById("factResult").textContent =
        `Result: ${result}`;
}

// 2. Sum (Do-While Loop)
function computeSum() {
    let n = parseInt(document.getElementById("sumInput").value);
    let sum = 0;
    let i = 1;

    do {
        sum += i;
        i++;
    } while (i <= n);

    document.getElementById("sumResult").textContent =
        `Result: ${sum}`;
}

// 3. Average (For Loop)
function computeAverage() {
    let n = parseInt(document.getElementById("avgInput").value);
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    let avg = sum / n;

    document.getElementById("avgResult").textContent =
        `Result: ${avg}`;
}

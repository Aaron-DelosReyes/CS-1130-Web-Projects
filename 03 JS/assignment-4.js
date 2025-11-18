let employees = [];

function addEmployee() {
    let name = document.getElementById("nameInput").value;
    let days = Number(document.getElementById("daysInput").value);
    let rate = Number(document.getElementById("rateInput").value);
    let deduction = Number(document.getElementById("deductionInput").value);

    let gross = days * rate;
    let net = gross - deduction;

    employees.push({
        name,
        days,
        rate,
        deduction,
        gross,
        net
    });

    updateTable();
}

function deleteEmployee() {
    let line = prompt("Enter line number to delete:");

    line = Number(line);

    if (line > 0 && line <= employees.length) {
        employees.splice(line - 1, 1);
        updateTable();
    } else {
        alert("Invalid line number.");
    }
}

function updateTable() {
    let tbody = document.querySelector("#payrollTable tbody");
    tbody.innerHTML = "";

    employees.forEach((emp, index) => {
        let row = `
            <tr>
                <td>${index + 1}</td>
                <td>${emp.name}</td>
                <td>${emp.days}</td>
                <td>${emp.rate}</td>
                <td>${emp.gross}</td>
                <td>${emp.deduction}</td>
                <td>${emp.net}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

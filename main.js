const form = document.getElementById('form-activity');
const imgPassed = '<img src="./images/passed.png" alt="Celebrating Emoji" />';
const imgFailed = '<img src="./images/failed.png" alt="Disappointed Emoji" />';
const activities = [];
const grades = [];
const spanPassed = '<span class="result passed">Passed</span>';
const spanFailed = '<span class="result failed">Failed</span>';
const minimumGrade = parseFloat(prompt("Enter the minimum grade (0 to 10):"));

let rows = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addRow();
    updateTable();
    updateFinalAverage();
})

function addRow() {
    const inputActivityName = document.getElementById('activity-name');
    const inputActivityGrade = document.getElementById('activity-grade');

    if (activities.includes(inputActivityName.value)) {
        alert(`The activity "${inputActivityName.value}" has already been added`);
    } else {
        activities.push(inputActivityName.value);
        grades.push(parseFloat(inputActivityGrade.value));

        let row = "<tr>";
        row += `<td>${inputActivityName.value}</td>`;
        row += `<td>${inputActivityGrade.value}</td>`;
        row += `<td>${inputActivityGrade.value >= minimumGrade ? imgPassed : imgFailed}</td>`;
        row += "</tr>"

        rows += row;
    }

    inputActivityName.value = '';
    inputActivityGrade.value = '';
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows;
}

function updateFinalAverage() {
    const finalAverage = calculateFinalAverage();

    document.getElementById('final-average-value').innerHTML = finalAverage.toFixed(2);
    document.getElementById('final-average-result').innerHTML = finalAverage >= minimumGrade ? spanPassed : spanFailed;
}

function calculateFinalAverage() {
    let sumOfGrades = 0;

    for (let i = 0; i < grades.length; i++) {
        sumOfGrades += grades[i];
    }

    return sumOfGrades / grades.length;
}

function gradeAssignment() {
    let grade = prompt("Enter your grade:");

    grade = Number(grade);

    if (grade >= 90) {
        alert("Excellent");
    } else if (grade >= 80 && grade <= 89) {
        alert("Good");
    } else if (grade >= 70 && grade <= 79) {
        alert("Needs Improvement");
    } else if (grade > 70) {
        alert("Needs improvement");
    } else {
        alert("Invalid Input")
    }
}
function Click() {
  const res = document.getElementById("res");

  const name = window.prompt("What is the student's name?");
  if (name === null) {
    // handle empty or cancel input early
    window.alert("You canceled the process.");
    return;
  } else if (name.trim() === "") {
    window.alert("[ERROR] You didn't enter a name.");
    return;
  }

  let count = window.prompt("How many grades do you want to report?");
  count = Number(count);
  let sum = 0;
  for (let i = 0; i < count; i++) {
    let grade = window.prompt(`Enter grade ${i + 1}:`);
    grade = Number(grade);
    sum += grade;
  }

  let average = (sum / count).toLocaleString(undefined, {
    maximumFractionDigits: 1,
  });

  if (average < 3) {
    res.innerHTML = `
    <h1>Analyzing ${name} situation...</h1>
    <p>Based on the grades provided, the student’s average is <strong>${average}</strong></p>
    <p>With an average below 3, the student is <mark class="fail">failing.</mark></p>
    `;
  } else if (average <= 6) {
    res.innerHTML = `
    <h1>Analyzing ${name} situation...</h1>
    <p>Based on the grades provided, the student’s average is <strong>${average}</strong></p>
    <p>With an average between 3 and 6, the student is in <mark class="re">remediation.</mark></p>
    `;
  } else {
    res.innerHTML = `
    <h1>Analyzing ${name} situation...</h1>
    <p>Based on the grades provided, the student’s average is <strong>${average}</strong></p>
    <p>With an average above 6, the student <mark>passes.</mark></p>
    `;
  }
}

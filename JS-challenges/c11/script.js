function Click() {
  const input = window.prompt("What year do you want to check?"); // ask the user a year
  const res = document.getElementById("res");

  if (input === null) {
    // handle cancel or empty input early
    res.innerHTML = "You canceled the test.";
    return;
  }

  const trimmed = input.trim();
  if (trimmed === "") {
    res.innerHTML = "Please enter a year (e.g., 2024).";
    return;
  }

  const year = Number(trimmed);
  if (!Number.isInteger(year)) {
    // convert to a number and validate it
    res.innerHTML = `“${input}” isn’t a valid whole number year.`;
    return;
  }

  const isLeap = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0); // compute leap-year truth value
  if (isLeap) {
    // write the message into the page
    res.innerHTML = `
    <h1>Analyzing the ${year} year...</h1>
    <p>The ${year} <mark>is a leap year</mark> &#x2705;</p>
    `;
  } else {
    res.innerHTML = `
    <h1>Analyzing the ${year} year...</h1>
    <p>The ${year} <mark class="negative">is not a leap year</mark> &#x274C;</p>
    `;
  }
}

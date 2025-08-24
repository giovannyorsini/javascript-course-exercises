function Click() {
  let a = window.prompt("Enter the value of a").replace(/,/g, "");
  a = Number(a);
  let b = window.prompt("Enter the value of b").replace(/,/g, "");
  b = Number(b);
  let c = window.prompt("Enter the value of c").replace(/,/g, "");
  c = Number(c);
  let res = document.getElementById("res");
  let discriminant = (b ** 2 - 4 * a * c).toLocaleString();
  a = a.toLocaleString();
  b = b.toLocaleString();
  c = c.toLocaleString();
  res.innerHTML = `
    <h2>Results:</h2>
    <p>The actual equation is <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong></p>
    <p>The calculation performed will be: <strong>Δ = ${b}<sup>2</sup> - 4 . ${a} . ${c}</strong></p>
    <p>The calculated value was <strong>Δ = ${discriminant}</strong></p>
    `;
};
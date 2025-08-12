function Click() {
    let value = window.prompt("Digite uma temperatura em °C (Celsius)");
    value = value.replace(",", ".");
    val = Number(value);
    let k = val + 273.15
    let f = val * 1.8 + 32
    let res = document.getElementById("res");
    res.innerHTML = `
    <h2>A temperatura de ${val.toLocaleString()}°C, corresponde a...</h2> 
    <p>${k.toLocaleString()}°K (Kelvin)</p> 
    <p>${f.toLocaleString()}°F (Fahrenheit)</p>
    `
};
function Click() {
    let value = window.prompt("Type a temperature in °C (Celsius)");        //popup asking a number to the user//
    value = value.replace(",", ".");        //replace commas with a dot//
    val = Number(value);            //turns value string into a number//
    let k = val + 273.15        //convert val number to kelvin temperature//
    let f = val * 1.8 + 32        //convert val number to fahrenheit temperature//
    let res = document.getElementById("res");        //select the HTML div where the results will appear//
    res.innerHTML = `
    <h2>The temperature of ${val.toLocaleString()}°C, corresponds to...</h2> 
    <p>${k.toLocaleString()}°K (Kelvin)</p> 
    <p>${f.toLocaleString()}°F (Fahrenheit)</p>
    `            //shows the Celsius temperature and all the other conversions//
};

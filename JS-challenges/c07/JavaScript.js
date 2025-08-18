let rate = window.prompt("First of all. How much is the dollar rate now?");        //asks a dollar rate to the user//
rate = rate.replace(",",".");            //replace comma with dot//
let d = Number(rate);            //turns rate string into a number//
function Click() {
    let real = window.prompt("How many R$ do you have in your wallet?");        //starts showing a popup asking for a BRL value//
    real = real.replace(",",".");            //replace comma with dot//
    let r = Number(real);                //turns real string into a number//
    let dol = r * d;                //makes the conversion//
    let res = document.getElementById("res");            //gets the div where the results will appear//
    res.innerHTML = `
    <h2>With ${r.toLocaleString(undefined, {style: "currency", currency: "BRL"})} (BRL) you can get: </h2> 
    <p><ul>
        <li>${dol.toLocaleString(undefined, {style: "currency", currency: "USD"})} (USD)
    </ul></p>
    `;        //finish the function by showing the conversion of BRL to USD currency//
};

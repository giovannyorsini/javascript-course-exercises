function Click() {
    let name = window.prompt("What product are you buying?");        //popup asking for a product name//
    let value = window.prompt(`How much is the ${name.toLowerCase()}`);        //popup asking for a price//
    value = value.replace(",",".");        //replace the comma with a dot//
    let val = Number(value);        //turns value string into a number//
    let res = document.getElementById("res");        //select the HTML div where the results will appear//
    let dis = val * 0.10;        //calculate the discount//
    let vald = val - dis;        //calculate the discount on the product price//
    let valStr = val.toLocaleString(undefined, { style: "currency", currency: "USD" });        //format the val number to currency style//
    let disStr = dis.toLocaleString(undefined, { style: "currency", currency: "USD" });        //format the dis number to currency style//
    let valdStr = vald.toLocaleString(undefined, { style: "currency", currency: "USD" });      //format the vald number to currency style//
    res.innerHTML = `
    <h2>Calculating 10% discount for the ${name.toLowerCase()}</h2> 
    <p>The original price was ${valStr}</p> 
    <p>You saved ${disStr} (-10%)</p> 
    <p>Then, you will pay ${valdStr} in the ${name.toLowerCase()}</p>
    `;        //shows the original price, then the value of 10% of discount and then the last price after the discount//
};

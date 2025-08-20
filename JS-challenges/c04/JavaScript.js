function Click() {
    let name = window.prompt("What product are you looking for?");        //popup to ask the name of the product//
    let val = window.prompt(`How much is the ${name.toLowerCase()} that you are buying?`).replace(/,/g, "");        //popup to ask the price of the product//
    let v = Number(val);            //turns val string into a number//
    let pag = window.prompt(`How much did you pay for the ${name.toLowerCase()}?`).replace(/,/g, "");        //popup to ask how much the user paid for the product//
    let p = Number(pag);            //turns pag string into a number//
    if (v > p) {
        alert("Unfortunately you were not able to pay for the product, try to invest a little more");
        //If the value of the product is greater than the amount paid by the user, return a “unfortunately” message//
    } else {
        let change = (p-v).toLocaleString(undefined, { style: "currency", currency: "USD" })
        v = v.toLocaleString(undefined, { style: "currency", currency: "USD" })
        p = p.toLocaleString(undefined, { style: "currency", currency: "USD" })    
        alert(`You bought the ${name.toLowerCase()} that costs ${v}.
You gave ${p} in cash and you'll receive ${change} in change.
Welcome back anytime!`);
        //If the value of the product is less than the amount paid by the user, return a message containing the values and the change at the end//
    };
};

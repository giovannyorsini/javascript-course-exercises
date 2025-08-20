function Click() {
    let name = window.prompt("Enter a name:");            //asks for an employee name//
    let sal = (window.prompt(`What is ${name.toUpperCase()}'s salary?`)).replace(/,/g, "");        //asks for the employee's salary and remove the commas//
    sal = Number(sal);            //turns sal string into a number//
    let perc = (window.prompt(`${name.toUpperCase()}'s salary will be adjusted by what percentage?`)).replace(/,/g, "");    //asks for a percentage//
    perc = Number(perc);        //turns perc string into a number//
    let p = perc / 100;        //converts perc number to a percentage value//
    let pSal = sal * p;        //calculates how much is the amount of the salary increase//
    let fSal = sal + pSal;    //calculates the final salary after the increase//
    pSal = pSal.toLocaleString(undefined, { style: "currency", currency: "USD" });        //formats to currency style//
    fSal = fSal.toLocaleString(undefined, { style: "currency", currency: "USD" });        //formats to currency style//
    sal = sal.toLocaleString(undefined, { style: "currency", currency: "USD" });          //formats to currency style//
    perc = perc.toLocaleString(undefined, {maximumFractionDigits: 2});        //formats preventing the maximum fraction digits of going over 2//
    let res = document.getElementById("res");        //gets the HTML div where the results will appear//
    res.innerHTML = `
        <h2>${name.toUpperCase()} received a salary increase!</h2>
        <p>The current salary was ${sal.toLocaleString(undefined, {style: "currency", currency: "USD"})}.</p>
        <p>With a ${perc}% increase, the salary will increase by ${pSal} next month.</p>
        <p>And from then on, ${name.toUpperCase()} will earn ${fSal}.</p>
    `;        //message showing the initial salary, the percentage, the amount increased and the final salary//
};

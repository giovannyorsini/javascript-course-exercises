function Click() {
    let value = window.prompt("Enter a distance in meters (m)");    //asks a number from user//
    value = value.replace(",", ".");        //replace , with .//
    let val = Number(value);        //turns value string into a number//
    let km = val / 1000;        //                                         //
    let hm = val / 100;         //                                         //
    let dam = val / 10;         //  Gets the val number and                //
    let dm = val * 10;          //  convert It into every metric measurent //       
    let cm = val * 100;         //                                         //
    let mm = val * 1000;        //                                         //
    let res = document.getElementById("res");        //gets the HTML div//
    res.innerHTML = `
    <h2>The distance of ${val.toLocaleString()} meters, corresponds to...</h2> 
    <p>${km.toLocaleString()} kilometers (Km)</p> 
    <p>${hm.toLocaleString()} hectometers (Hm)</p> 
    <p>${dam.toLocaleString()} decameters (Dam)</p> 
    <p>${dm.toLocaleString()} decimeters (dm)</p> 
    <p>${cm.toLocaleString()} centimeters (cm)</p> 
    <p>${mm.toLocaleString()} millimeters (mm)</p>
    `;                                                 //shows every metric measurement in the HTML div and format numbers according to the user’s locale//
};

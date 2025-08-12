function Click() {
    let value = window.prompt("Digite uma distância em metros (m)");
    value = value.replace(",", ".");
    let val = Number(value);
    let km = val / 1000;
    let hm = val / 100;
    let dam = val / 10;
    let dm = val * 10;
    let cm = val * 100;
    let mm = val * 1000;
    let res = document.getElementById("res");
    res.innerHTML = `
    <h2>A distância de ${val.toLocaleString()} metros, corresponde a...</h2> 
    <p>${km.toLocaleString()} quilômetros (Km)</p> 
    <p>${hm.toLocaleString()} hectômetros (Hm)</p> 
    <p>${dam.toLocaleString()} decâmetros (Dam)</p> 
    <p>${dm.toLocaleString()} decímetros (dm)</p> 
    <p>${cm.toLocaleString()} centímetros (cm)</p> 
    <p>${mm.toLocaleString()} milímetros (mm)</p>
    `;
};
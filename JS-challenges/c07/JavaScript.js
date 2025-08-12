let cot = window.prompt("Antes de mais nada. Quanto está a cotação do dólar agora?");
cot = cot.replace(",",".");
let c = Number(cot);
function Click() {
    let real = window.prompt("Quantos R$ você tem na carteira?");
    real = real.replace(",",".");
    let r = Number(real);
    let dol = r * c
    let res = document.getElementById("res");
    res.innerHTML = `
    <h2>Com R$ ${r.toLocaleString()} (Real) você consegue adquirir: </h2> 
    <p><ul>
        <li>US$ ${dol.toLocaleString()} (Dólar)
    </ul></p>
    `;
};
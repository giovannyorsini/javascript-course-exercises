function Click() {
    let name = window.prompt("Qual é o produto que você está comprando?");
    let value = window.prompt(`Qual é o preço de ${name.toLowerCase()}`);
    value = value.replace(",",".");
    let val = Number(value);
    let res = document.getElementById("res");
    let dis = val * 0.10;
    let vald = val - dis;
    let valStr = val.toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let disStr = dis.toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let valdStr = vald.toLocaleString("pt-br", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    res.innerHTML = `
    <h2>Calculando desconto de 10% para ${name.toLowerCase()}</h2> 
    <p>O preço original era R$ ${valStr}</p> 
    <p>Você acaba de ganhar R$ ${disStr} de desconto (-10%)</p> 
    <p>No fim, você vai pagar R$ ${valdStr} no produto ${name.toLowerCase()}</p>
    `;
};
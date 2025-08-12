function Click() {
    let name = window.prompt("Qual é o seu nome?");
    let sal = (window.prompt(`Qual é o salário de ${name.toUpperCase()}`)).replace(",",".");
    sal = Number(sal);
    let perc = (window.prompt(`O salário de ${name.toUpperCase()} vai ser reajustado em qual porcentagem?`)).replace(",",".");
    perc = Number(perc);
    let p = perc / 100;
    let pSal = sal * p;
    let fSal = sal + pSal;
    pSal = pSal.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    fSal = fSal.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    sal = sal.toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2});
    perc = perc.toLocaleString("pt-br", {maximumFractionDigits: 2});
    let res = document.getElementById("res");
    res.innerHTML = `
        <h2>${name.toUpperCase()} recebeu um aumento salarial!</h2>
        <p>O salário atual era R$ ${sal}.</p>
        <p>Com um aumento de ${perc}%, o salário vai aumentar R$ ${pSal} no próximo mês.</p>
        <p>E a partir daí, ${name.toUpperCase()} vai passar a ganhar R$ ${fSal}.</p>
    `;
};
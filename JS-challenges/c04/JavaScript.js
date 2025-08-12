function Click() {
    let name = window.prompt("Que produto você está comprando?");
    let val = window.prompt(`Quanto custa ${name.toLowerCase()} que você está comprando?`);
    let v = Number(val);
    let pag = window.prompt(`Qual foi o valor que você deu para pagar ${name.toLowerCase()}`);
    let p = Number(pag);
    if (v > p) {
        alert("Infelizmente você não foi capaz de comprar o item, tente investir um pouco mais.");
    } else {
        alert(`Você comprou ${name.toLowerCase()} que custou R$ ${v},00. 
Você deu R$ ${p},00 em dinheiro e vai receber R$ ${p-v},00 de troco.
Volte Sempre!`);
    };
};
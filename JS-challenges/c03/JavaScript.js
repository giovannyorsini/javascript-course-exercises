function Click() {
    let num = window.prompt("Digite um número inteiro qualquer");
    let n = Number(num);
    alert(`Antes de ${n}, temos o número ${n-1}.
Depois de ${n}, temos o número ${n+1}`);
};
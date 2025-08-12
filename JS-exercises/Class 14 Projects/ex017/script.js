function tabuada() {
    let num = document.getElementById("txtn");
    let tab = document.getElementById("seltab");
    if (num.value.length == 0) {
        alert("Por favor, digite um número!");
    } else {
        let n = Number(num.value); //converte o valor de num para número 
        let c = 1;
        tab.innerHTML = ""; //limpa a tabuada
        while (c <= 10) { //gera a tabuada
            let item = document.createElement("option"); //cria os elementos da tabuada
            item.text = `${n} x ${c} = ${n*c}`;
            item.value = `tab${c}`
            tab.appendChild(item);
            c++;
        };
    };
};
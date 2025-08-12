function Click() {
    let nome = window.prompt("Qual é o seu nome?");
    
    if (nome == "") {
        return alert("[ERRO]Por favor digite um nome")
    } else {
        let idade = window.prompt(`Olá ${nome}! Quantos anos você tem?`);
            if (idade == "0" || idade == "") {
            return alert("[ERRO]Por favor digite um número válido!")
    } else {
        alert(`Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`);
    }
    } 
};
let num = [5, 8, 2, 9, 3];
num.push(1);    //Adiciona um valor no final do array
num.sort();     //Coloca os valores em ordem crescente
console.log(num);
console.log(`Nosso vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8);       //Busca um valor específico na array e responde com a posição desse valor na array
if (pos == -1) {                //Se o valor não for encontrado na array "object = -1"
    console.log("O valor não foi encontrado");
} else {
    console.log(`O valor 8 está na posição ${pos}`);
};
function verificar() {
let data = new Date();
let ano = data.getFullYear();
let fano = document.getElementById("txtano");
let res =  document.getElementById("res");
let fsex = document.getElementsByName("radsex");
let idade = ano - Number(fano.value);
let gênero = "";
var img = document.createElement("img");
img.setAttribute("id", "foto");
if (fano.value.length == 0) {
    window.alert("[ERRO] Verifique os dados e tente novamente!");
} else if(fano.value > ano) {
    window.alert("Tu é viajante do tempo agora?");
} else if(fano.value < ano - 120 && fano.value != 0) {
    window.alert("Tenho certeza que você não nasceu nesse ano...");
} else if(fano.value == 0) {
    res.style.textAlign = "center";
    res.innerHTML = "<p>Jesus?</p>";
    img.setAttribute("src", "jesus.png");
    res.appendChild(img);
} else {
    if (fsex[0].checked) {
        gênero = "Homem";
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute("src", "bebe_m.png");
        } else if (idade < 21) {
            //jovem
            img.setAttribute("src", "jovem_m.png");
        } else if (idade < 50) {
            //adulto
            img.setAttribute("src", "adulto_m.png");
        } else {
            //idoso
            img.setAttribute("src", "idoso_m.png");
        }
    } else if (fsex[1].checked) {
        gênero = "Mulher";
        if (idade >= 0 && idade < 10) {
            //criança
            img.setAttribute("src", "bebe_f.png");
        } else if (idade < 21) {
            //jovem
            img.setAttribute("src", "jovem_f.png");
        } else if (idade < 50) {
            //adulto
            img.setAttribute("src", "adulto_f.png");
        } else {
            //idoso
            img.setAttribute("src", "idoso_f.png");
        }
    } 
        res.style.textAlign = "center";
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos</p>`;
    res.appendChild(img);
    } }
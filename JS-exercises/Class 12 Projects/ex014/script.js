function carregar() {
let msg = document.getElementById("msg");
let img = document.getElementById("imagem");
let data = new Date();
let hora = data.getHours();
//let hora = 22
msg.innerHTML = `Agora são ${hora} horas`;
if (hora >= 0 && hora < 12) {
    img.src = "Foto manha.png";
    document.body.style.background = "#c2c7ca"
} else if (hora >= 12 && hora < 18) {
    img.src = "Foto tarde.png";
    document.body.style.background = "#e17823"
} else {
    img.src = "Foto noite.png"
    document.body.style.background = "#0b284e"
}
}
function verify() {
  let date = new Date();
  let year = data.getFullYear();
  let fyear = document.getElementById("txtano");
  let res =  document.getElementById("res");
  let fsex = document.getElementsByName("radsex");
  let age = year - Number(fyear.value);
  let sex = "";
  var img = document.createElement("img");
  img.setAttribute("id", "picture");
    
  if (fyear.value.length == 0) {
    window.alert("[ERROR] Check the data and try again!");
  } else if(fyear.value > year) {
    window.alert("Are you a time traveler, huh?");
  } else if(fyear.value < year - 120 && fyear.value != 0) {
    window.alert("I'm pretty sure you weren't born that year...");
  } else if(fyear.value == 0) {
    res.style.textAlign = "center";
    res.innerHTML = "<p>Jesus?</p>";
    img.setAttribute("src", "jesus.png");
    res.appendChild(img);
  } else {
    if (fsex[0].checked) {
      sex = "Man";
      if (age >= 0 && age < 10) {
        //child
        img.setAttribute("src", "baby_m.png");
      } else if (age < 21) {
        //young
        img.setAttribute("src", "young_m.png");
      } else if (age < 50) {
        //adult
        img.setAttribute("src", "adult_m.png");
      } else {
        //elderly
        img.setAttribute("src", "elderly_m.png");
      }
    } else if (fsex[1].checked) {
      sex = "Woman";
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
  } 
}

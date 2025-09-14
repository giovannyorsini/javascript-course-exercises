function Click() {
  let num = document.getElementById("txtn");
  let tab = document.getElementById("seltab");
  if (num.value.length == 0) {
    alert("Please, enter a number!");
  } else {
    let number = Number(num.value);     // converts the value of num to a number 
    tab.innerHTML = "";     // clean the multiplication table
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement("option");     // create the multiplication table content
      item.text = `${number} x ${i} = ${number*i}`;
      item.value = `tab${i}`
      tab.appendChild(item);
    }
  }
}

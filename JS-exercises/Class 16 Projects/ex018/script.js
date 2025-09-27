let num = document.querySelector("input#fnum");
let list = document.querySelector("select#flist");
let res = document.querySelector("div#res");
let values = [];

function isNumber(n) {
  if(Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function add() {
  if (isNumber(num.value) && !inList(num.value, valores)) {
    values.push(Number(num.value));
    let item = document.createElement("option");
    item.text = `Value ${num.value} added`;
    list.appendChild(item);
    res.innerHTML = "";
  } else {
    alert("Invalid value or already found in list");
  }
  num.value = "";
  num.focus();
}

function finish() {
  if (values.length == 0) {
    alert("Add values before finishing!")
  } else {
    let total = values.length;
    let highest = values[0];
    let lowest = values[0];
    let sum = 0;
    let average = 0;
    
    for (let position in values) {
      sum += values[position];
      if (values[position] > highest) {
        highest = values[position];
      } else if (values[position] < lowest) {
        lowest = values[position];
      }
    }

    average = sum / total;
    res.innerHTML = "";
    res.innerHTML += `<p>In total, we have ${total} registered numbers.</p>`;
    res.innerHTML += `<p>The highest informed value was ${highest}.</p>`;
    res.innerHTML += `<p>The lowest informed value was ${lowest}.</p>`;
    res.innerHTML += `<p>Adding all the values, we have ${sum}.</p>`;
    res.innerHTML += `<p>The average of the values ​​entered is ${average.toLocaleString()}.</p>`;
  }
}

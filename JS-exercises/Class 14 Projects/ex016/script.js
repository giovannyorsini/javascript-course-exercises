function Count() {
    let beginning = document.getElementById("txtb");
    let finish = document.getElementById("txtf");
    let step = document.getElementById("txts");
    let res = document.getElementById("res");
    if (beginning.value.length == 0 || finish.value.length == 0 || step.value.length == 0) {
        res.innerHTML = "Impossible to count!";
        alert("[ERROR] Data missing!");
    } else {
        res.innerHTML = "Counting: <br>";
        let b = Number(beginning.value);
        let f = Number(finish.value);
        let s = Number(step.value);
        if (s <= 0) {
            alert("Invalid step! Considering step 1");
            s = 1;
        };
        if (b < f) {
            // count up
            for (let c = b; c <= f; c+= s) {
                res.innerHTML += `${c} \u{1F449}`;
        };
        } else {
            // countdown
            for (let c = b; c >= f; c-= s){
                res.innerHTML += `${c} \u{1F449}`;
            };
        };
        res.innerHTML += `\u{1F3C1}`;
    };

};

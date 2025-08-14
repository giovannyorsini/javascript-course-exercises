function Click() {
    let name = window.prompt("What is your name?");
    if (name == "") {
        return alert("[ERROR] Please type a name");
    } else {
        let age = window.prompt(`Hi ${name}! How old are you?`);
            if (age == "0" || age == "") {
            return alert("[ERROR] Please type a valid number!");
    } else {
        alert(`I just met ${name}, who is ${age} years old!`);
    };
    };
};

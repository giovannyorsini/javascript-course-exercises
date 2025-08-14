function Click() {
    let name = window.prompt("What is your name?");        //popup to get the user's name//
    if (name == "") {
        return alert("[ERROR] Please type a name");        //if the user don't type a name, return an error message//
    } else {
        let age = window.prompt(`Hi ${name}! How old are you?`);        //popup to get the user's age//
            if (age == "0" || age == "") {
            return alert("[ERROR] Please type a valid number!");        //if the user don't type a number or try to use 0, return an error message//
    } else {
        alert(`I just met ${name}, who is ${age} years old!`);          //after getting the user's name and age, return a message//
    };
    };
};

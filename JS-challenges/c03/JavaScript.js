function Click() {
    let num = window.prompt("Type any integer");        //popup message to ask a number to the user//
    let n = Number(num);                                //turn the "num" string into a number//
    alert(`Before ${n}, we have the number: ${n-1}.
After ${n}, we have the number: ${n+1}`);               //a popup message showing the predecessor and successor of the number//
};

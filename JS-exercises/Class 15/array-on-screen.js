let values = [8, 1, 7, 4, 2, 9];
/*
for (let position = 0; position < values.length; position++) {
    console.log(`The position ${position} has the value of ${values[position]}`);
}
*/
for (let position in values) {
    console.log(`The position ${position} has the value of ${values[position]}`);
}

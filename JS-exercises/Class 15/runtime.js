let num = [5, 8, 2, 9, 3];
num.push(1);    // push a value to the end of the array
num.sort();     // sort the values
console.log(num);
console.log(`Oue array has ${num.length} positions`);
console.log(`the first value of the array is ${num[0]}`);
let pos = num.indexOf(8);       // search for an specific value from the array and return his position in the array
if (pos == -1) {                // if the value was not found in the array "object = -1"
    console.log("The value was not found");
} else {
    console.log(`The value 8 is at position number ${pos}`);
};
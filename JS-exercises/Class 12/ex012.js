let now = new Date()
let hour = now.getHours()
console.log(`Now it's exacty ${hour} hours`);
if (hour >= 6 && hour <= 12) {
    console.log("Good Morning");
} else if (hour <= 18 && hour > 12) {
    console.log("Good Afternoon");
} else if (hour <= 24 && hour > 18) {
    console.log ("Good Evening");
} else {
    console.log("Good Morning");
    // in Brazil we have the word "madrugada" that means any time between 12:01 a.m. and 5 a.m.
    // "madrugada" doesn't exist in English, so we translate it to "morning"
}

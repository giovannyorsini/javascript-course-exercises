let friend = {
  name: "José",
  sex: "M",
  weight: 85.4,
  fattening(w) {
    console.log("Gained weight");
    this.weight += w;
  }
}
friend.fattening(2);
console.log(typeof friend);

console.log(friend.weight);

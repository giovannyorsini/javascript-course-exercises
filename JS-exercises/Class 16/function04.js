function factorial(number) {
  let fac = 1;
  for(let i = number; i > 1; i--) {
    fac *= i;
  }
  return fac;
}

console.log(factorial(5));

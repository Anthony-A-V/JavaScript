let factorial = 1;
let i = 1;
while (i <= 10) {
  factorial *= i;
  i++;
  if (i == 10) {
    console.log(`Factorial de ${i}: ${factorial}`);
    break;
  }
}

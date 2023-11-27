export const sifter = (input) => {
  if (isNaN(input)) {
    return "Error";
  } else if (input < 3) {
    return "Error: Number must be greater than 2."
  }
  const countUpArray = [];
  for (let i = 2; i <= input; i++) {
    if (!(i % 2 === 0)){
      countUpArray.push(i);
    }
  }
  return countUpArray;
}
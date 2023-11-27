export const sifter = (input) => {
  if (isNaN(input)) {
    return "Error";
  } else if (input < 3) {
    return "Error: Number must be greater than 2."
  }
}
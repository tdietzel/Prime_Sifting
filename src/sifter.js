export const sifter = (input) => {
  if (isNaN(input)) {
    return "Error";
  } else if (input < 3) {
    return "Error: Number must be greater than 2."
  }

  const countUpArray = [];
  for (let i = 2; i <= input; i++) {
    countUpArray.push(i);
  }
  // console.log(`CountUpArray: ${countUpArray}`);
  const arrayBuilder = (currentPrime,currentArray) => {
    const newArray = [...currentArray];
    newArray.forEach((number) => {
      if ((number % currentPrime === 0) && !(number === currentPrime)){ 
        const index = newArray.indexOf(number);
        newArray.splice(index, 1);
      }
    });
    const newPrimeLocation = newArray.indexOf(currentPrime);
    const newPrime = newArray[newPrimeLocation + 1];
    if (currentArray.toString() === newArray.toString()) {
      return newArray;
    } else {
      return arrayBuilder(newPrime,newArray);
    }
  }
  
  return arrayBuilder(2,countUpArray);
}

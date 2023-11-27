import { sifter } from "../src/sifter.js";

describe (sifter, () => {

  test("It will return an error if the input is not a number", () => {
    expect(sifter("text")).toEqual("Error");
  });

  test("It will return an error if the inputted number is not greater than 2", () => {
    expect(sifter(2)).toEqual("Error: Number must be greater than 2.");
  });

  test("It will create a list of numbers starting from 2 up to the number that was inputted and remove all multiples of two from the list", () => {
    expect(sifter(5)).toEqual([3,5]);
  });

});
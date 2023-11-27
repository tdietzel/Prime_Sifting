import { sifter } from "../src/sifter.js";

describe (sifter, () => {

  test("It will return an error if the input is not a number", () => {
    expect(sifter("text")).toEqual("Error");
  });

  test("It will return an error if the inputted number is not greater than 2", () => {
    expect(sifter(2)).toEqual("Error: Number must be greater than 2.");
  });
});
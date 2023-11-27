import { sifter } from "../src/sifter.js";

describe (sifter, () => {

  test("It will return an error if the input is not a number", () => {
    expect(sifter("text")).toEqual("Error");
  });
});
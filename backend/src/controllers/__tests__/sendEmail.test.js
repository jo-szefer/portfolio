import { isRequestCorrect } from "../sendEmail";

describe("isRequestCorrect", () => {
  it("should return false if address and message are empty", () => {
    expect(isRequestCorrect("", "")).toEqual(false);
  });
  it("should return false if there is no address", () => {
    expect(isRequestCorrect("", "message")).toEqual(false);
  });
  it("should return false if there is no message", () => {
    expect(isRequestCorrect("address", "")).toEqual(false);
  });
  it("should return false if message is not a string", () => {
    expect(isRequestCorrect("address", 123)).toEqual(false);
  });
  it("should return false if address has wrong format", () => {
    expect(isRequestCorrect("address", "message")).toEqual(false);
  });
  it("should return true if params are OK", () => {
    expect(isRequestCorrect("test.test@gmail.com", "message")).toEqual(true);
  });
});

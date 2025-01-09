import { initializeTimes, updateTimes } from "./times";

describe("initializeTimes", () => {
  test("should return the initial times array", () => {
    const result = initializeTimes();
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });
});

describe("updateTimes", () => {
  test("should return the same times array for a given date (static logic)", () => {
    const date = "2024-01-01"; // Ejemplo de fecha
    const result = updateTimes(date);
    expect(result).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
  });
});

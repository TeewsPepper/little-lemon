// Importa las funciones necesarias para las pruebas
import { initializeTimes, updateTimes } from "./times.js";
import { fetchAPI } from "./api.js";

// Mockea fetchAPI
jest.mock("./api.js", () => ({
  fetchAPI: jest.fn(),
}));

describe("Testing time functions", () => {
  beforeEach(() => {
    // Restablece las llamadas de mock antes de cada test
    fetchAPI.mockReset();
  });

  test("initializeTimes should return the initial times array", () => {
    // Aquí puedes simular lo que debe devolver fetchAPI
    fetchAPI.mockReturnValue(["17:00", "17:30", "18:30", "19:30", "20:00", "21:30", "22:00"]);
    
    const result = initializeTimes(); // Llama a la función que utiliza fetchAPI
    expect(result).toEqual(["17:00", "17:30", "18:30", "19:30", "20:00", "21:30", "22:00"]);
  });

  test("updateTimes should return the updated times array", () => {
    // Mockea un resultado para updateTimes
    fetchAPI.mockReturnValue(["17:00", "17:30", "18:30", "19:00", "20:30", "21:00", "22:00", "23:30"]);
    
    const result = updateTimes(new Date("2025-01-12")); // Llama a la función con una fecha específica
    expect(result).toEqual(["17:00", "17:30", "18:30", "19:00", "20:30", "21:00", "22:00", "23:30"]);
  });
});


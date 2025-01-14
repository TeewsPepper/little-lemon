import { fetchAPI } from "./api.js";

// Inicializa los horarios para la fecha actual
export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};
export const updateTimes = (date) => {
  return fetchAPI(date);
};

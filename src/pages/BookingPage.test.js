import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Simula la navegación
import BookingPage from "./BookingPage"; // Asegúrate de que la ruta sea correcta

describe("BookingPage Component", () => {
  beforeEach(() => {
    // Limpiar localStorage antes de cada prueba
    localStorage.clear();
  });

  test("Carga horarios reservados desde localStorage al inicializar", () => {
    // Configurar horarios reservados simulados
    const mockReservedTimes = ["17:00", "18:30"];
    localStorage.setItem("reservedTimes", JSON.stringify(mockReservedTimes));

    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // Verificar que los horarios reservados están en el estado inicial
    expect(localStorage.getItem).toHaveBeenCalledWith("reservedTimes");
    const bookingForm = screen.getByText(/Show Available Slots/i);
    expect(bookingForm).toBeInTheDocument();
  });

  test("Guarda nuevos horarios reservados en localStorage al reservar", () => {
    // Simular localStorage vacío inicialmente
    localStorage.setItem("reservedTimes", JSON.stringify([]));

    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    // Simular reserva
    const mockTime = "19:00";
    const reserveButton = screen.getByText(/Show Available Slots/i);

    fireEvent.click(reserveButton); // Simular acción para mostrar horarios
    localStorage.setItem("reservedTimes", JSON.stringify([mockTime]));

    // Verificar que `localStorage.setItem` fue llamado correctamente
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "reservedTimes",
      JSON.stringify([mockTime])
    );
  });
});

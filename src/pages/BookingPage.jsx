import React, { useReducer, useState } from "react";
import { initializeTimes, updateTimes } from "../utils/times";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import BookingSlotsList from "../components/BookingSlotsList";

// Reducer para manejar las horas disponibles
const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Aquí podemos agregar lógica para cambiar los horarios según la fecha seleccionada
      return updateTimes(action.payload); 
    default:
      return state;
  }
};

// Inicializar las horas disponibles
const initializeTimes = () => ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, [], initializeTimes);
  const [reservedTimes, setReservedTimes] = useState([]);
  const [showSlots, setShowSlots] = useState(false);

  // Función para manejar las reservas
  const handleReservation = (newReservation) => {
    setReservedTimes((prev) => [...prev, newReservation.time]);
  };

  const toggleSlotsVisibility = () => {
    setShowSlots((prev) => !prev);
  };

  // Función para actualizar las horas disponibles
  const updateTimes = (date) => {
    // Aquí puedes agregar lógica para actualizar los horarios según la fecha
    dispatch({ type: "UPDATE_TIMES", payload: date });
  };

  // Filtrar las horas disponibles según las horas ya reservadas
  const getAvailableTimes = () => {
    return availableTimes.filter((time) => !reservedTimes.includes(time));
  };

  return (
    <>
      <Nav />
      <div className="booking-page">
        {/* Componente del formulario */}
        <BookingForm
          availableTimes={getAvailableTimes()} // Solo pasamos las horas disponibles
          updateTimes={updateTimes}
          onReserve={handleReservation} // Pasamos la función para manejar reservas
        />
        <div className="toggle-slots-container">
          <button onClick={toggleSlotsVisibility}>
            {showSlots ? "Hide Available Slots" : "Show Available Slots"}
          </button>
        </div>

        {showSlots && (
          <BookingSlotsList
            availableTimes={availableTimes}
            onReserve={handleReservation}
            reservedTimes={reservedTimes}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;

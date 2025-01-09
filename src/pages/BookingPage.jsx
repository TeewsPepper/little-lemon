/* import React from "react";
import BookingForm from "../components/BookingForm";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const BookingPage = () => {
  return (
    <>
      <Nav />
      <BookingForm />
      <Footer />
    </>
  );
};

export default BookingPage; */
import React, { useReducer, useState } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import BookingSlotsList from "../components/BookingSlotsList";

// Reducer para manejar las horas disponibles

const timesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Por ahora, devolver las mismas horas disponibles
      return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    default:
      return state;
  }
};

// Inicializar las horas disponibles
const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

const BookingPage = () => {
  const [availableTimes, dispatch] = useReducer(
    timesReducer,
    [],
    initializeTimes
  );

  // Manejo del estado para las horas reservadas
  const [reservedTimes, setReservedTimes] = useState([]);

  // Estado para mostrar/hide horarios
  const [showSlots, setShowSlots] = useState(false);

  // Función para actualizar las horas reservadas
  const handleReservation = (newReservation) => {
    setReservedTimes((prev) => [...prev, newReservation.time]);
  };
  // Función para alternar la visibilidad de los horarios
  const toggleSlotsVisibility = () => {
    setShowSlots((prev) => !prev);
  };

  // Función para actualizar las horas disponibles (ejemplo simple, se puede ampliar según la lógica)
  const updateTimes = (date) => {
    dispatch({ type: "UPDATE_TIMES", payload: date });
  };
  // Aquí puedes añadir más lógica según lo necesites

  return (
    <>
      <Nav />
      <div className="booking-page">
        {/* Componente del formulario */}
        <BookingForm
          availableTimes={availableTimes}
          updateTimes={updateTimes}
          onReserve={handleReservation} // Pasamos la función para actualizar reservas
        />
        <div className="toggle-slots-container">
          <button onClick={toggleSlotsVisibility}>
            {showSlots ? "Hide Available Slots" : "Show Available Slots"}
          </button>
        </div>

        
        {/* Mostrar BookingSlotsList solo si showSlots es true */}
      {showSlots && <BookingSlotsList availableTimes={availableTimes} onReserve={handleReservation} reservedTimes={reservedTimes} />}
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;

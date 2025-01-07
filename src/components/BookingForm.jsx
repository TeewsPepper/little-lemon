import React, { useState } from "react";
import Nav from "./Nav";

const BookingForm = () => {
  // Variables de estado para cada campo del formulario
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  // Estado para las horas disponibles
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  // Manejo del envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      date,
      time,
      guests,
      occasion,
    });
    alert("Reservation submitted!");
  };

  return (
    <>
      
      <div className="booking-form-container">
        <header className="header-form">
          <h1 className="booking-title">Book your Table</h1>
        </header>
        <form onSubmit={handleSubmit} className="booking-form">
          {/* Fecha */}
          <label htmlFor="res-date" className="form-label">
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          {/* Hora */}
          <label htmlFor="res-time" className="form-label">
            Choose time
          </label>
          <select
            id="res-time"
            className="form-select"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {availableTimes.map((timeOption, index) => (
              <option key={index} value={timeOption}>
                {timeOption}
              </option>
            ))}
          </select>

          {/* Número de invitados */}
          <label htmlFor="guests" className="form-label">
            Number of guests
          </label>
          <input
            type="number"
            id="guests"
            className="form-input"
            placeholder="1"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
          />

          {/* Ocasión */}
          <label htmlFor="occasion" className="form-label">
            Occasion
          </label>
          <select
            id="occasion"
            className="form-select"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>

          {/* Botón de envío */}
          <input
            type="submit"
            value="Make Your Reservation"
            className="form-button"
          />
        </form>
      </div>
    </>
  );
};

export default BookingForm;

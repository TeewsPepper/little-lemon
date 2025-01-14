// BookingPage.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import BookingForm from "../components/BookingForm";
import BookingSlotsList from "../components/BookingSlotsList";
import { initializeTimes, updateTimes } from "../utils/times";
import { submitAPI } from "../utils/api"; // Solo importamos submitAPI desde api.js

const BookingPage = () => {
  // src/pages/BookingPage.jsx
const [bookingData, setBookingData] = useState({
  availableTimes: initializeTimes(), // Llama a initializeTimes para los horarios iniciales
  reservedTimes: JSON.parse(localStorage.getItem("reservedTimes") || "[]"), // Verifica si hay datos, de lo contrario usa un array vacío
});

  const [showSlots, setShowSlots] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const isReservationSuccess = submitAPI(formData);

    if (isReservationSuccess) {
      setBookingData((prev) => {
        const updatedReservedTimes = [...prev.reservedTimes, formData.time];
        const updatedAvailableTimes = prev.availableTimes.filter(
          (time) => time !== formData.time
        );

        localStorage.setItem(
          "reservedTimes",
          JSON.stringify(updatedReservedTimes)
        );

        return {
          ...prev,
          reservedTimes: updatedReservedTimes,
          availableTimes: updatedAvailableTimes,
        };
      });

      navigate("/confirmation");
    } else {
      alert("Error al procesar la reserva. Inténtelo de nuevo.");
    }
  };

  useEffect(() => {
    // Convierte `selectedDate` en un objeto Date si no lo es ya
    const updatedTimes = updateTimes(new Date(selectedDate));
    setBookingData((prev) => ({
      ...prev,
      availableTimes: updatedTimes,
    }));
  }, [selectedDate]);

  const toggleSlotsVisibility = () => {
    setShowSlots((prev) => !prev);
  };

  const getAvailableTimes = () => {
    return bookingData.availableTimes.filter(
      (time) => !bookingData.reservedTimes.includes(time)
    );
  };

  return (
    <>
      <Nav />
      <div className="booking-page">
        <BookingForm
          availableTimes={getAvailableTimes()}
          updateTimes={(date) => setSelectedDate(new Date(date))}
          onReserve={submitForm}
        />
        <div className="toggle-slots-container">
          <button onClick={toggleSlotsVisibility}>
            {showSlots ? "Hide Available Slots" : "Show Available Slots"}
          </button>
        </div>
        {showSlots && (
          <BookingSlotsList
            availableTimes={getAvailableTimes()}
            onReserve={submitForm}
            reservedTimes={bookingData.reservedTimes}
          />
        )}
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;

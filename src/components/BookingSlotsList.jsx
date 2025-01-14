import React from "react";
import BookingSlot from "../components/BookingSlot";

const BookingSlotsList = ({ availableTimes, onReserve, reservedTimes }) => {
  return (
    <div className="booking-slots-list">
      <h2>Available Slots</h2>
      <div className="slots-container">
        {availableTimes.map((time, index) => {
          const isReserved = reservedTimes.includes(time); // Verifica si está reservado
          return (
            <div key={index}>
              <BookingSlot
                time={time}
                isReserved={isReserved}
                onReserve={() => {
                  if (!isReserved) {
                    onReserve({ time }); // Llama a onReserve solo si no está reservado
                  }
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BookingSlotsList


import React from "react";
import BookingSlot from "../components//BookingSlot";

const BookingSlotsList = ({availableTimes, onReserve, reservedTimes }) => {
  return (
    <div className="booking-slots-list">
      <h2>Available Slots</h2>
      <ul>
        {availableTimes.map((time, index) => {
          const isReserved = reservedTimes.includes(time);
          return (
            <li key={index}>
              <button
                onClick={() => onReserve({ time })}
                disabled={isReserved}
                style={{
                  backgroundColor: isReserved ? "gray" : "green",
                  cursor: isReserved ? "not-allowed" : "pointer",
                }}
              >
                {isReserved ? "Reserved" : time}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookingSlotsList;

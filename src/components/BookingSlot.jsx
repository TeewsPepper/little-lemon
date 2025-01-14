
import React from "react";
const BookingSlot = ({ time, isReserved, onReserve }) => {
  return (
    <div className={`booking-slot ${isReserved ? "reserved" : "available"}`}>
      <span>{time}</span>
      {isReserved && <span className="status">Reserved</span>}
      <button
        onClick={onReserve}
        disabled={isReserved}
        style={{
          backgroundColor: isReserved ? "gray" : "green",
          cursor: isReserved ? "not-allowed" : "pointer",
        }}
      >
        {isReserved ? "Reserved" : "Reserve"}
      </button>
    </div>
  );
};
export default BookingSlot
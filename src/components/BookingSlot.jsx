import React from "react";

const BookingSlot = ({ time, isReserved }) => {
  return (
    <div className={`booking-slot ${isReserved ? "reserved" : "available"}`}>
      <span>{time}</span>
      {isReserved && <span className="status">Reserved</span>}
    </div>
  );
};

export default BookingSlot;

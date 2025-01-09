import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("Renders the BookingForm heading", () => {
  const mockAvailableTimes = ["12:00 PM", "1:00 PM", "2:00 PM"]; // Valores simulados

  render(<BookingForm availableTimes={mockAvailableTimes} />);
  
  const headingElement = screen.getByText("Book your Table");
  expect(headingElement).toBeInTheDocument();
});
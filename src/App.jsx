
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import BookingPage from './pages/BookingPage';
import ConfirmedBooking from "./pages/ConfirmedBooking";


function App() {
  

  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </>
  )
}

export default App

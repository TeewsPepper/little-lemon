import React, { useState } from 'react';

const Main = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la página
    setShowSuccess(true); // Muestra la notificación
    setTimeout(() => setShowSuccess(false), 3000); // Oculta la notificación después de 3 segundos
  };

  return (
    <main>
      {showSuccess && <div className="success-message">Reservation successfully submitted! Thanks!</div>}
      <form onSubmit={handleSubmit}>
        <h2>¿Who is making the reservation?</h2>
        <section className="inputs-container">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <p className="login">
            If you already have an account, <a href="/login">Log in</a>.
          </p>
        </section>

        <section>
          <h2>Type of Reservation</h2>
          <fieldset className="reservation-type">
            <legend>Reservation Options</legend>
            <div>
              <input type="radio" id="regular" name="reservation_category" value="regular" />
              <label htmlFor="regular">Regular Reservation</label>
            </div>
            <div>
              <input type="radio" id="special" name="reservation_category" value="special" />
              <label htmlFor="special">Special Event</label>
            </div>
            <div>
              <input type="radio" id="outdoor" name="location_category" value="outdoor" />
              <label htmlFor="outdoor">Outdoor</label>
            </div>
            <div>
              <input type="radio" id="indoor" name="location_category" value="indoor" />
              <label htmlFor="indoor">Indoor</label>
            </div>
          </fieldset>
        </section>

        <section>
          <h2>Dinners</h2>
          <fieldset className="dinners">
            <legend>Choose Dinners</legend>
            <div>
              <input type="radio" id="dinner1" name="dinners" value="2" />
              <label htmlFor="dinner1">2</label>
            </div>
            <div>
              <input type="radio" id="dinner2" name="dinners" value="4" />
              <label htmlFor="dinner2">4</label>
            </div>
            <div>
              <input type="radio" id="dinner3" name="dinners" value="6" />
              <label htmlFor="dinner3">6</label>
            </div>
            <div>
              <input type="radio" id="dinner4" name="dinners" value="8" />
              <label htmlFor="dinner4">8</label>
            </div>
            <div>
              <input type="radio" id="dinner5" name="dinners" value="10" />
              <label htmlFor="dinner5">10</label>
            </div>
          </fieldset>
        </section>

        <section>
          <h2>Date and Time</h2>
          <div className="date-time">
            <label htmlFor="reservation-date">Choose a date:</label>
            <input type="date" id="reservation-date" name="reservation_date" required />

            <label htmlFor="reservation-time">Choose a time:</label>
            <input type="time" id="reservation-time" name="reservation_time" required />
          </div>
        </section>

        <button className="btn" type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Main;

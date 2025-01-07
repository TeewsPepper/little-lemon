import React from 'react';

const HighLights = () => {
  const items = ['Lunch', 'Mains', 'A la Carte', 'Desserts', 'Specials'];

  return (
    <section className="highlights-container">
      <h2 className="highlights-title">Orders for Delivery</h2>
      <div className="highlights-scroll">
        {items.map((item, index) => (
          <button key={index} className="highlight-item">
            {item}
          </button>
        ))}
      </div>
    </section>
  );
};

export default HighLights;

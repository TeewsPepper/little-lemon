import React from 'react';


const Specials = () => {
  const specials = [
    {
      id: 1,
      image: './bruchetta.svg', // Reemplaza con URLs reales
      name: 'Grilled Salmon',
      price: '$25.99',
      description: 'Freshly grilled salmon served with seasonal vegetables and a tangy sauce.',
    },
    {
      id: 2,
      image: './lemon dessert.jpg',
      name: 'Steak and Fries',
      price: '$19.99',
      description: 'Juicy steak cooked to perfection, served with crispy golden fries.',
    },
    {
      id: 3,
      image: './fish.jpg',
      name: 'Pasta Primavera',
      price: '$14.99',
      description: 'Delicious pasta with fresh vegetables in a light garlic and olive oil sauce.',
    },
  ];

  return (
    <div className="specials-container">
      <div className="specials-header">
        <h2 className="specials-title">This Week's Specials</h2>
        <button className="online-menu-button">Online Menu</button>
      </div>
      <div className="specials-grid">
        {specials.map((special) => (
          <div key={special.id} className="special-card">
            <img src={special.image} alt={special.name} className="special-image" width={200} height={200} />
            <div className="special-info">
              <div className="special-name-price">
                <h3 className="special-name">{special.name}</h3>
                <span className="special-price">{special.price}</span>
              </div>
              <p className="special-description">{special.description}</p>
              <button className="order-button">
                Order Now
                <img src="./bike.jpg" alt="logo-delivery" width={50} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;

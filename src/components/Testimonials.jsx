import React from 'react';


const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: './user1.jpg', // Reemplaza con URLs reales
      name: 'Jane Doe',
      rating: 5,
      review: 'Amazing food! The flavors were incredible, and the service was fantastic.',
    },
    {
      id: 2,
      image: './user2.jpg',
      name: 'John Smith',
      rating: 4,
      review: 'Great experience overall. The dishes were delicious and fresh!',
    },
    {
      id: 3,
      image: './user3.jpg',
      name: 'Emily Davis',
      rating: 4,
      review: 'I loved the desserts! Highly recommend this place for sweet lovers.',
    },
    {
      id: 4,
      image: './user4.jpg',
      name: 'Michael Brown',
      rating: 3,
      review: 'Good food, but the service was a bit slow during peak hours.',
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i <= rating ? '#FFD700' : '#E0E0E0'}
          viewBox="0 0 24 24"
          className="star-icon"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="testimonials-container">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-review">"{testimonial.review}"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;


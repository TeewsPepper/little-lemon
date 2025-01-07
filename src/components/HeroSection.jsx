import React from 'react'

const HeroSection = () => {
  return (
    <>
     <section className='hero-container'>
            <header className='hero-header'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
            </header>
            <div className="hero-content">
                <p className='description'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <img src="./greek salad.jpg" width={170} height={170} alt="" className="hero-image" />
            </div>
            <a href="/booking"><button className='hero-btn'>Reserve a Table</button></a>
     </section>
    </>
  )
}

export default HeroSection
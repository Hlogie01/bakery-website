import React from 'react';

const HomePage = () => (
  <div>
    <h1>Welcome to Hlogi's Confectioneries</h1>
    <video controls>
      <source src="path_to_your_welcome_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>Welcome to Hlogi's Bakery! We offer a variety of delicious pastries made with love and the finest ingredients.</p>
    <div className="pastry-of-the-week">
      <img src="path_to_pastry_of_the_week_image.jpg" alt="Pastry of the Week" />
      <p>Our Pastry of the Week: A delectable treat you don't want to miss!</p>
    </div>
    <button>
      <a href="/menu">Our Menu</a>
    </button>
  </div>
);

export default HomePage;

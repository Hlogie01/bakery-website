import React from 'react';

const HomePage = () => (
  <div>
    <h1>Welcome to Hlogi's Confectioneries</h1>
    <video controls>
      <source src="path_to_your_welcome_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <p>Step into Hlogi’s Confectioneries, where we delight in crafting an array of delectable pastries using the finest ingredients and a generous sprinkle of love.</p>
    <div className="pastry-of-the-week">
      <img src="path_to_pastry_of_the_week_image.jpg" alt="Pastry of the Week" />
      <p>Introducing our Pastry of the Week—a tantalizing delight you won’t want to overlook!</p>
    </div>
    <p>Discover our menu by clicking the button below:</p>
    <button>
      <a href="/menu">Our Menu</a>
    </button>
  </div>
);

export default HomePage;

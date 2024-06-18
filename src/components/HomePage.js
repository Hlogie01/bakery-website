import React from 'react';
import welcomeVideo from '../assets/videos/bakery.mp4';
import pastryImage from '../assets/images/bakery2.jpg';
import chef1 from '../assets/images/chef1.jpg';
import '../App.css';

const HomePage = () => (
  <div className="home-page">
    <h1>Welcome to Hlogi's Confectioneries</h1>
    <div className="video-menu-section">
      <video controls autoPlay muted loop>
        <source src={welcomeVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="menu-info">
        <p>Explore our delicious pastries here:</p>
        <button>
          <a href="/menu">Our Menu</a>
        </button>
      </div>
    </div>
    <p className="intro-text">
      Step into Hlogi’s Confectioneries, where we delight in crafting an array of delectable pastries using the finest ingredients and a generous sprinkle of love.
    </p>
    <div className="pastry-of-the-week">
      <img src={pastryImage} alt="Pastry of the Week" />
      <p>Introducing our Pastry of the Week—a tantalizing delight you won’t want to overlook!</p>
    </div>
    <div className="our-chefs">
      <h2>Our Chefs</h2>
      <div className="chefs">
        <div className="chef">
          <img src={chef1} alt="Chef 1" />
          <h3>Chef Lehlogonolo</h3>
          <p>Pastry Master</p>
        </div>
      </div>
    </div>
    <div className="business-description">
      <h2>About Our Business</h2>
      <p>
        At Hlogi's Confectioneries, we are dedicated to providing our customers with the finest pastries, crafted with passion and expertise. Our goal is to create delightful experiences with every bite.
      </p>
      <button className="read-more-button">
        <a href="/about">Read More</a>
      </button>
    </div>
  </div>
);

export default HomePage;

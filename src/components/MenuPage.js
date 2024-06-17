import React from 'react';
import '../App.css'; // Adjusted path to import App.css

// Import images
import chocolateCake from '../assets/images/Fudge Blackberry Cake.jpg';
import vanillaCake from '../assets/images/cake.jpg';
import carrotCake from '../assets/images/CarrotCake.jpg';
import butterCroissant from '../assets/images/croisants11.jpg';
import chocolateCroissant from '../assets/images/croisants12.jpg';
import chocCroissant from '../assets/images/croissant10.jpg';
import chocolateChipCookie from '../assets/images/cookies10.jpg';
import oatmealRaisinCookie from '../assets/images/cookies11.jpg';
import oatmealCookie from '../assets/images/cookies12.jpg';
import blueberryMuffin from '../assets/images/muffin11.jpg';
import bananaNutMuffin from '../assets/images/muffin10 (1).jpg';

// Sample menu items
const menuItems = {
  cakes: [
    { name: 'Chocolate Cake', description: 'Rich and moist chocolate cake', price: 'R250.00', image: chocolateCake },
    { name: 'Snickers Cheesecake', description: 'Light and fluffy Snickers cheesecake', price: 'R190.00', image: vanillaCake },
    { name: 'Carrot Cake', description: 'Rich, delicious and fluffy carrot cake', price: 'R240.00', image: carrotCake },
  ],
  croissants: [
    { name: 'Chocolate Cream Croissant', description: 'Flaky and buttery chocolate croissant', price: 'R35.00', image: butterCroissant },
    { name: 'Pistachio and Matcha Croissant', description: 'Croissant filled with matcha and pistachio', price: 'R35.00', image: chocolateCroissant },
    { name: 'Raspberry Fruit Cruffin', description: 'Croissant filled with rich chocolate', price: 'R35.00', image: chocCroissant },
  ],
  cookies: [
    { name: 'Coco Chocolate Cookie', description: 'Classic coco chocolate cookie', price: 'R19.00', image: chocolateChipCookie },
    { name: 'Walnut Chocolate Cookie', description: 'Crunchy, delicious and rich cookie', price: 'R19.00', image: oatmealRaisinCookie },
    { name: 'Chocolate truffle Cookie', description: 'laxurious flavored chocolate cookie', price: 'R19.00', image: oatmealCookie },
  ],
  muffins: [
    { name: 'Almonds and chocolate Muffin', description: 'Muffin packed with fresh almonds on top', price: '$23.00', image: blueberryMuffin },
    { name: 'White chocolate and Vanilla Muffin', description: 'Classic chocolate and vanilla muffin', price: 'R23.00', image: bananaNutMuffin },
  ],
};

const MenuPage = () => (
  <div className="menu-page">
    <h1>Our Menu</h1>
    {Object.keys(menuItems).map((section) => (
      <div key={section} className="menu-section">
        <h2>{section.charAt(0).toUpperCase() + section.slice(1)}</h2>
        <div className="menu-items">
          {menuItems[section].map((item, index) => (
            <div key={index} className="menu-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
              <button className="buy-button">Buy</button>
            </div>
          ))}
        </div>
      </div>
    ))}
    <div className="more-items">
      <p>We will be adding more items to our menu soon. Be on the lookout!</p>
      <p>Thank you for visiting Hlogi's Confectioneries.</p>
    </div>
  </div>
);

export default MenuPage;

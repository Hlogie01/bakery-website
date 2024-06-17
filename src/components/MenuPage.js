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
    { name: 'Chocolate Cake', description: 'Rich and moist chocolate cake', price: '$20', image: chocolateCake },
    { name: 'Vanilla Cake', description: 'Light and fluffy vanilla cake', price: '$18', image: vanillaCake },
    { name: 'Carrot Cake', description: 'Light and fluffy vanilla cake', price: '$18', image: carrotCake },
  ],
  croissants: [
    { name: 'Butter Croissant', description: 'Flaky and buttery croissant', price: '$3', image: butterCroissant },
    { name: 'Chocolate Croissant', description: 'Croissant filled with rich chocolate', price: '$4', image: chocolateCroissant },
    { name: 'Chocolate Croissant', description: 'Croissant filled with rich chocolate', price: '$4', image: chocCroissant },
  ],
  cookies: [
    { name: 'Chocolate Chip Cookie', description: 'Classic chocolate chip cookie', price: '$1.5', image: chocolateChipCookie },
    { name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal raisin cookie', price: '$1.5', image: oatmealRaisinCookie },
    { name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal raisin cookie', price: '$1.5', image: oatmealCookie },
  ],
  muffins: [
    { name: 'Blueberry Muffin', description: 'Muffin packed with fresh blueberries', price: '$2.5', image: blueberryMuffin },
    { name: 'Banana Nut Muffin', description: 'Muffin with banana and crunchy nuts', price: '$2.5', image: bananaNutMuffin },
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

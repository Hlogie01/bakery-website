import React from 'react';
import '../App.css'; // Adjusted path to import App.css

// Sample menu items
const menuItems = {
  cakes: [
    { name: 'Chocolate Cake', description: 'Rich and moist chocolate cake', price: '$20', image: 'assets/images/chocolate_cake.jpg' },
    { name: 'Vanilla Cake', description: 'Light and fluffy vanilla cake', price: '$18', image: 'assets/images/vanilla_cake.jpg' },
    { name: 'Vanilla Cake', description: 'Light and fluffy vanilla cake', price: '$18', image: 'assets/images/vanilla_cake.jpg' },
  ],
  croissants: [
    { name: 'Butter Croissant', description: 'Flaky and buttery croissant', price: '$3', image: 'assets/images/butter_croissant.jpg' },
    { name: 'Chocolate Croissant', description: 'Croissant filled with rich chocolate', price: '$4', image: 'assets/images/chocolate_croissant.jpg' },
    { name: 'Chocolate Croissant', description: 'Croissant filled with rich chocolate', price: '$4', image: 'assets/images/chocolate_croissant.jpg' },
  ],
  cookies: [
    { name: 'Chocolate Chip Cookie', description: 'Classic chocolate chip cookie', price: '$1.5', image: 'assets/images/chocolate_chip_cookie.jpg' },
    { name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal raisin cookie', price: '$1.5', image: 'assets/images/oatmeal_raisin_cookie.jpg' },
    { name: 'Oatmeal Raisin Cookie', description: 'Healthy oatmeal raisin cookie', price: '$1.5', image: 'assets/images/oatmeal_raisin_cookie.jpg' },
  ],
  muffins: [
    { name: 'Blueberry Muffin', description: 'Muffin packed with fresh blueberries', price: '$2.5', image: 'assets/images/blueberry_muffin.jpg' },
    { name: 'Banana Nut Muffin', description: 'Muffin with banana and crunchy nuts', price: '$2.5', image: 'assets/images/banana_nut_muffin.jpg' },
     { name: 'Banana Nut Muffin', description: 'Muffin with banana and crunchy nuts', price: '$2.5', image: 'assets/images/banana_nut_muffin.jpg' },
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

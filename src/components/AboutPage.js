import React from 'react';

const AboutPage = () => (
  <div>
    <h1>About Us -  Hlogi's Confectioneries</h1>
    <section>
      <h2>Our Company</h2>
      <p>
        Hlogi's Confectioneries was founded in 2024 with a simple mission: to bring the joy of freshly baked pastries to our community. We are a family-owned bakery dedicated to creating delightful and memorable experiences through our delicious offerings.
      </p>
    </section>
    <section>
      <h2>Our Motivation</h2>
      <p>
        At Hlogi's Confectioneries, we believe in the power of a good pastry to brighten anyone's day. Our motivation comes from the smiles and satisfaction of our customers. We are passionate about using only the finest ingredients to craft our pastries, ensuring every bite is a moment of pure joy.
      </p>
    </section>
    <section>
      <h2>Our Goal</h2>
      <p>
        Our goal is to be the go-to bakery for our community, known for our high-quality pastries and exceptional customer service. We aim to expand our reach and share our love for baking with even more people, creating a loyal customer base that trusts us for their every pastry need.
      </p>
    </section>
    <section>
      <h2>Client Reviews</h2>
      <div className="reviews">
        <div className="review">
          <p>"Absolutely the best bakery in town! The pastries are always fresh and delicious. Highly recommend!"</p>
          <p><strong>- Emily R.</strong></p>
        </div>
        <div className="review">
          <p>"I love visiting Hlogi's Confectioneries. The staff is so friendly and the atmosphere is cozy. Their croissants are to die for!"</p>
          <p><strong>- Michael T.</strong></p>
        </div>
        <div className="review">
          <p>"Great variety and everything tastes amazing. I've never been disappointed with anything I've tried here."</p>
          <p><strong>- Sarah L.</strong></p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;

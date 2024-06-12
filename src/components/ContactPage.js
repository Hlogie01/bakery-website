import React from 'react';

const ContactPage = () => (
  <div>
    <h1>Hlogi's Confectioneries</h1>
    <p>Get in touch with us by filling in the form below:</p>
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <button type="submit">Send</button>
    </form>
  </div>
);

export default ContactPage;

import React from 'react';
import '../App.css';

const ContactPage = () => (
  <div className="contact-page">
    <h1>HLOGI'S CONFECTIONERIES</h1>
    <p>Get in touch with us by filling in the form below:</p>
    <form className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="tel" id="phone" name="phone" required />
      </div>
      <div className="form-group">
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" required />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit" className="submit-button">Send</button>
    </form>
    <div className="thank-you-message">
      <p>Thank you for reaching out to us. We will get back to you as soon as possible.</p>
    </div>
  </div>
);

export default ContactPage;

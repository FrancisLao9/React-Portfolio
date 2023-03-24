import React, { useState } from 'react';
import {validateEmail} from '../utils/helpers';

function Contact() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !userName || !message) {
      setErrorMessage('Valid Username and/or Email Address is Required');
      return;
    }
    setUserName('');
    setEmail('');
    setMessage('');
  };

  const handleChange = (e) => {
    const {target} = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };



  return (
    <section id="reach-me" className="contact">
      <div className="row">
        <h2>Contact Me</h2>
      </div>

      <div className="contact-form">
        <form className="form">
          <label htmlFor="contact-name">Name:</label>
          <input
            value={userName}
            name="userName"
            onChange={handleChange}
            type="text"
            id="contact-name"
          />

          <label htmlFor="contact-email">Email:</label>
          <input
            value={email}
            name="email"
            onChange={handleChange}
            type="text"
            id="contact-email"
          />

          <label htmlFor="contact-message">Message:</label>
          <textarea
            value={message}
            name="message"
            onChange={handleChange}
            type="text"
            id="contact-message"
          />

          <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </section>
  );
}

export default Contact;

import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import AOS from 'aos';
import '../../../node_modules/aos/dist/aos.css';


function Contact() {
  AOS.init({
    once: true
  })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      console.log('Submit Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Enter valid email.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  };

  return (
    <section>
      <div className='flex-row'>
        <h1 className='contact'>Get in touch</h1>
      </div>
      <div className='badge-container'>
        <div className='badge' data-aos='fade-right' data-aos-delay='500'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='400'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='300'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='200'></div>
        <div className='badge' data-aos='fade-right' data-aos-delay='100'></div>
        <div className='badge' data-aos='fade-right'></div>
      </div>
      <div className='email'>
        <button className='bg-gradient-to-r from-violet-400 via-pink-400 to-sky-400 text-white font-medium py-2 rounded-full w-32 animate-pulse'>Dev.Amanda.Perry@gmail.com</button>
      </div>

      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button data-testid="button" type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;

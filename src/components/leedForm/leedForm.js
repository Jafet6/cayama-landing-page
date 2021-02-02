import React, { useState } from 'react';
import axios from 'axios';
import './leedForm.css';

function LeedForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('')
  const [instagram, setInstagram] = useState('');
  const [wpp, setWpp] = useState('')
  const [leedFormMessage, setLeedFormMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    return axios
      .post('https://localhost.../', {
        name,
        email,
      })
      .then((res) => {
        if (!res) return setLeedFormMessage('Something went wrong =(');
        console.log(res);
        return setLeedFormMessage('Your request was received =)');
      })
      .catch((err) => {
        console.log(err);
        return setLeedFormMessage('Something went wrong =(');
      })
  }

  return (
    <section id='leedForm' className='leedForm-container'>
      <div className='leedForm-content'>
        <div className='leedForm-text-content'>
          <h3
            className='leedForm-title'
          >
            Quero vender mais pela Internet
          </h3>
          <p className='leedForm-p'>
            Deixe seu nome e email que iremos lhe informar quando iniciarmos as operações!
          </p>
        </div>
        <div className='leedForm-input-container'>
          <div className="leedForm-input-content">
            <input
              data-testid='userName'
              label="userName"
              onChange={(e) => setName(e.target.value)}
              className="leedForm-input"
              type="text"
              placeholder="Nome"
            />
            <input
              data-testid='userEmail'
              label="userEmail"
              onChange={(e) => setEmail(e.target.value)}
              className="leedForm-input"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="leedForm-input-content">
            <input
              label="wppNumber"
              onChange={(e) => setWpp(e.target.value)}
              className="leedForm-input"
              type="text"
              placeholder="WhatsApp"
            />
            <input
              label="instagram"
              onChange={(e) => setInstagram(e.target.value)}
              className="leedForm-input"
              type="text"
              placeholder="Instagram"
            />
          </div>
          <button
            onClick={(e) => handleClick(e)}
            className="leedForm-send-button"
            type="button"
            >
            Send
          </button>
        </div>
        {leedFormMessage ? <p className="leedForm-p">{leedFormMessage}</p> : null}
      </div>
    </section>
  );
}

export default LeedForm;
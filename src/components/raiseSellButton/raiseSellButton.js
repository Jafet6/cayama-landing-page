import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './raiseSellButton.css'

function RaiseSellButton() {
  return (
    <div className="raise-sell-button-container">
      <HashLink to='/#leedForm'><button className="raise-sell-button">Quero aumentar minhas vendas agora mesmo</button></HashLink>
    </div>
  )
}

export default RaiseSellButton;
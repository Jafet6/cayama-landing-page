import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './footer.css';
import union from '../images/homePage/union.svg'
import logo from '../images/homePage/logo.svg';
import twitter from '../images/homePage/twitter.svg';
import instagram from '../images/homePage/instagram.svg';
import facebook from '../images/homePage/facebook.svg';
import Divider from '../components/divider/divider';

function Footer() {
  return (
    <footer className="footer-container">
      <h2 className="footer-h2">Inscreva-se e seja um dos primeiros lojistas!</h2>
      <span className="footer-span">Leva menos de 1 minuto</span>
      <button className="footer-btn">
        <HashLink to='/#leedForm' className="footer-btn-container">
          <img src={union} alt='calendar' />
          <div className="footer-btn-text">
            <span>Cadastre-se e receba novidades</span>
            <span>Leva menos de 1 minuto</span>
          </div>
        </HashLink>
      </button>
      <HashLink className="footer-link-purple" to='/#leedForm'>Inscreva-se</HashLink>
      {/* <div className="footer-bottom">
        <div className="footer-hapus-logo">
          <img src={logo} alt='Hapu`s logo' />
        </div>
        <div className="footer-links-container">
          <Link className="footer-normal-link" to='/9'>Share Your Nanny</Link>
          <Link className="footer-normal-link" to='/10'>Our Story</Link>
          <Link className="footer-normal-link" to='/11'>Blog</Link>
          <Link className="footer-normal-link" to='/11'>Terms & Privacy</Link>
        </div>
        <div className="footer-social-media-container">
          <Link to='/12' className="footer-social-media">
            <img src={facebook} alt='Facebook`s logo' />
          </Link>
          <Link to='/13' className="footer-social-media">
            <img src={twitter} alt='Twitter`s logo' />
          </Link>
          <Link to='/14' className="footer-social-media">
            <img src={instagram} alt='Instagram`s logo' />
          </Link>
        </div>
      </div>
      <div className="footer-divider">
        <Divider />
      </div> */}
      <p className="copyright">Copyright © 2021 Cayama Limited All rights reserved</p>
    </footer>
  );
}

export default Footer;
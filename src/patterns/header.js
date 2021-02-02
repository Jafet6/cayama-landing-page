import React from 'react';
import { Link } from "react-router-dom";
import './header.css';
import shape from '../images/homePage/shape.svg';


function Header() {
  return (
    <header>
      <nav className="nav-container">
        <div className="left-nav">
          <div className="shape-container">
            <img src={shape} alt="Hapu Logo" />
          </div>
          <div className="left-links">
            <div>
              <Link className='header-link' to='/influencer'>Influencer</Link>
              <Link className='header-link' to='/'>Lojista</Link>
            </div>
            {/* <Link className='header-link' to='/3'>Our Story</Link> */}
          </div>
        </div>
        <div className="right-nav">
          <div className="right-links">
            <button className="become-a-nanny-share"><h5 className="become-a-nanny-share-title">Inscreva-se</h5></button>
            {/* <Link className='header-link' to='/4'>Sign in</Link> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;

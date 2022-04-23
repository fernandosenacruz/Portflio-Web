import React from 'react';
import CTA from './CTA';
import HeaderSocial from './HeaderSocial';
import Me from '../../assets/fatnando_no_bg.png';
import MeCartoon from '../../assets/fatnando_cartoon.jpg';
import './header.css';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hi there! I'm</h4>
        <h1>
          FATnando Sena
          { 
            <img src={ MeCartoon } alt="cartoon" className="img__cartoon"/>
          }
        </h1>
        <h5 className="text-ligth">and I'm a Fullsatck Develper stundet.</h5>
        <CTA />
        <HeaderSocial />
        <span className='me'>
        <img src={ Me } alt="man reclining with coat" className='me__img'/>
      </span>
      <a href="#contact" className='scroll__down'>Scroll down</a>
      </div>
    </header>
  )
}

export default Header;

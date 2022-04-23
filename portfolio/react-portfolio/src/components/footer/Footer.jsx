import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">FATnando</a>

      <ul className="footer__list">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#comment">Comments</a></li>
      </ul>

      <div className="footer__copyright">
        <small>&copy;FATnando All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer;

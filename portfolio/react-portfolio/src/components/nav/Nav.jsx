import { React, useState } from 'react';
import { GoHome } from 'react-icons/go';
import { IoLogoGameControllerA } from 'react-icons/io';
import { BsCodeSlash } from 'react-icons/bs';
import { AiOutlineComment } from 'react-icons/ai';
import { MdContactMail } from 'react-icons/md';
import './nav.css';

const Nav = () => {
  const [active, setActive] = useState('#');
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActive('#')}
        className={ active === '#' ? 'active' : '' }
        >
          <GoHome />
      </a>
      <a
        href="#about"
        onClick={() => setActive('#about')}
        className={ active === '#about' ? 'active' : '' }
        >
          <IoLogoGameControllerA />
        </a>
      <a
        href="#experience"
        onClick={() => setActive('#experience')}
        className={ active === '#experience' ? 'active' : '' }
       >
        <BsCodeSlash />
      </a>
      <a
        href="#comment"
        onClick={() => setActive('#comment')}
        className={ active === '#comment' ? 'active' : '' }
        >
          <AiOutlineComment />
        </a>
      <a
        href="#contact"
        onClick={() => setActive('#contact')}
        className={ active === '#contact' ? 'active' : '' }
        >
          <MdContactMail />
        </a>
    </nav>
  )
}

export default Nav;

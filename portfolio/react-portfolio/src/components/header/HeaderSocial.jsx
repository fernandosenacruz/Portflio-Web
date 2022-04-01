import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a
        href="https://www.linkedin.com/in/fernandosenacruz/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
      <a
        href="https://github.com/fernandosenacruz"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
    </div>
  )
}

export default HeaderSocial;

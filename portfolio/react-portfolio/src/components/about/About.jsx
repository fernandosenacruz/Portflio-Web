import React from 'react';
import MeWithIt from '../../assets/fatnando_it.png';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <h5>A little</h5>
      <h2>About Myself</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ MeWithIt } alt="Man badguy with It the clown" />            
          </div> 
        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <h5>Experience</h5>
            <small></small>
          </article>
        </div>
      </div>
    </section>
  )
}

export default About;

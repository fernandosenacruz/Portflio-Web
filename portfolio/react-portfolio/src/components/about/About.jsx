import React from 'react';
import MeWithIt from '../../assets/fatnando_it.png';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { RiFolderChartFill } from 'react-icons/ri';
import { SiGithubactions } from 'react-icons/si';
import { GiSharpSmile } from 'react-icons/gi';
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
        
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <HiOutlineAcademicCap className="about__card-icon" />
              <h5>Experience</h5>
              <small>Trybe student (july 2022)</small>
            </article>

            <article className="about__card">
              <RiFolderChartFill className="about__card-icon" />
              <h5>Projects</h5>
                <a href="https://github.com/fernandosenacruz?tab=repositories"><SiGithubactions /></a>
            </article>
          </div>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio veritatis eos molestiae itaque, natus delectus sint eius et deleniti tempore magnam voluptatum officiis quam, quisquam omnis sapiente numquam voluptatem perspiciatis, eaque optio laboriosam. Hic asperiores ex veniam animi odit illo. Aliquid, mollitia nisi voluptatem nemo quasi pariatur debitis sunt officiis!
          </p>

          <a href="#contact" className="btn btn-primary">Let's talk <GiSharpSmile /> </a>

        </div>
      </div>
    </section>
  )
}

export default About;

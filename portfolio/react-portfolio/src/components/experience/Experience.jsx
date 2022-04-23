import React from 'react';
import { FaCheckSquare } from 'react-icons/fa';
import coachDepression from '../../assets/coach_depression.gif';
import recipesApp from '../../assets/trybe_recipes-app.gif';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>Some Skills</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__itens">
          <h3>Fullsatck Developement</h3>
          <div className="experience__content">
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>HTML CSS JS</h4>
                <small>intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>React Redux/Context</h4>
                <small>intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4 className="text-light">JestS</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>Bootstrap/MUI</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>MYSQL</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>Node.JS</h4>
                <small>intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <FaCheckSquare className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small>intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__itens">
          <h3>Coach Depression</h3>
          <div>
            <a href="https://coach-da-depressao-front.vercel.app/" target="_blank" rel="noreferrer">
              <img src={coachDepression} alt="git deploy coach depression" className="experience__details-img"/>
            </a>
          </div>
        </div>
        <div className="experience__itens">
          <h3>Recipes App</h3>
          <div>
            <a href="https://projeto-trybe-recipes-app.vercel.app/" target="_blank" rel="noreferrer">
              <img src={recipesApp} alt="git deploy recipes app" className="experience__details-img"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

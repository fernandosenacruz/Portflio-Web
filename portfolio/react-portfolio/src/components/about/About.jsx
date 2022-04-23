import React, { useEffect, useState } from 'react';
import MeWithIt from '../../assets/fatnando_it.png';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { RiFolderChartFill } from 'react-icons/ri';
import { SiGithubactions } from 'react-icons/si';
import { GiSharpSmile } from 'react-icons/gi';
import './about.css';

const testemonial = {
  portuguese: 'Enfermeiro de formação, após decepções na carreira decidi migrar para o desenvolvimento web. Apaixonado por games e tecnologia ouvi minha esposa, que é minha maior incentivadora, e megulhei de cabeça neste mundo fantático. A trybe foi fundamental para minha formação. Aprendi muito do que sei e, sobretudo entendi que o que ainda não sei está há algumas pesquisas de distância. Fiz bons amigos que me ajudam em meu crescimento pessoal e profissional. O projetos desenvolvidos ao longo do curso foram e são muito difíceis para mim, ao passo que não avançaria sem o apoio deles, bem como do corpo de instrutores. Desenvolvi o sentimento de grupo para cooperação, ouvir e aprender com outras formas de pensar e, sobretudo a não desistir.',
  english: "Nurse by training, after career disappointments I decided to migrate to web development. Passionate about games and technology, I listened to my wife, who is my biggest supporter, and I plunged headlong into this fantastic world. Trybe was fundamental for my training. I learned a lot of what I know and, above all, I understood that what I still don't know is a few researches away. I made good friends who help me in my personal and professional growth. The projects developed throughout the course were and are very difficult for me, as I would not have progressed without their support, as well as the instructor's team. I developed the group feeling for cooperation, listening and learning from other ways of thinking and, above all, not giving up."
}

const About = () => {
  const [paragraph, setParagraph] = useState(testemonial.english);
  const [turnOn, setTurnOn] = useState(true);

  useEffect(() => {
    turnOn === true ? setParagraph(testemonial.english) : setTurnOn(testemonial.portuguese);
    if (!turnOn) setParagraph(testemonial.portuguese);
  }, [turnOn]);

  const handleClick= () => {
    turnOn === true ? setTurnOn(false) : setTurnOn(true);
  }

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

          <div>
            <p className='paragraph'>{paragraph}</p>
            
            {turnOn === true
              ? <button
              type="button"
              className="btn btn-primary"
              onClick={ handleClick }
            >
              Translate
            </button>
              : <button
              type="button"
              className="btn btn-primary"
              onClick={ handleClick }
            >
              Traduzir
            </button>}
          </div>      

          <a href="#contact" className="btn btn-primary">Let's talk <GiSharpSmile /> </a>

        </div>
      </div>
    </section>
  )
}

export default About;

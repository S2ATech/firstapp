import React from 'react'
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div>
      <h1 className='titlecp'>About Me</h1>
        <section className="aboutme">
            <div className="me">
            <div className="mypict">
                <img src="https://www.training.bproodev.com/storage/instructor/1/profile.png" alt="Me" />
            </div>
            <div className="decsme">
                <h4>Salut! Je suis</h4>
                <h1>Duplex Kamdjou</h1>
                 <p>Ingenieur Informaticien et Developeur Web Full-Stack. Au cours de ces dernières années, j'ai appris 500+ d'étudiants à devenir des développeurs web full-stack. A partir de maintenant, j'ai pour mission d’aider les developeurs novices et professionnels à accroître leurs compétences, à gagner plus d’argent et, en fin de compte, à améliorer leur vie.</p>
            </div>
            </div>
        </section>
    </div>
  )
}

export default AboutMe
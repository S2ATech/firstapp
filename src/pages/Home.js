import React from 'react';
import Programes from '../components/Programes';
import './Home.css';
import Plans from '../components/Plans'
import AboutMe from '../components/AboutMe';
import Testimonial from '../components/Testimonial';
import SignIn from '../components/SignIn';
import Footer from '../components/Footer';

const Home = () => {
  return (
  <div className='home'>
    <div className="schome">
    <section className='landHead'>
    <div className='main'>
      <div className="header">
        <h1>Tout est mis sur pieds pour vous suivre et vous transformez</h1>
        <p>Grâce à notre expérience, nous avons compris ce qu'il faut pour vous aider à devenir un développeur en très peu de temps. D'ou j'ai mis sur pied Bproo Dev_ pour pouvoir aider toutes personnes ayant la passion ou tout développeur junior ou intermediare a ce faire accompagnier pour devenir un bon développeur et décrocher son job de reve. Souscrivez dès maintenant et je vous prendrais à partir de la, pour que ensemble on pousuivent l'avanture...</p>
        <input type='button' value='Explorer tout nos cours' />
      </div>
      <div className="img_pers">
        <img src='https://www.training.bproodev.com/frontend/img/landing.png' alt="" />
      </div>
    </div>
    </section>
    <Programes />
    <Plans/>
    <AboutMe />
    <Testimonial />
    <Footer />
  </div>
  </div>
  )
}

export default Home
import React from 'react'
import { FaDiscourse,FaAtlas,FaCommentAlt,FaAward,FaBriefcase } from "react-icons/fa";
import './Programes.css';

const data = [
    {
        id:1,
        icon: <FaDiscourse />,
        ttl: "Chate",
        desc: "Pour échager les idées",
    },
    {
        id:2,
        icon: <FaAtlas />,
        ttl: "Cours",
        desc: "Developpeur web fullStack",
    },
    {
        id:3,
        icon: <FaCommentAlt />,
        ttl: "Conseils",
        desc: "Collectifs des enseignants",
    },
    {
        id:4,
        icon: <FaAward />,
        ttl: "Challenges",
        desc: "Pour renforcer les aquis",
    },
    {
        id:5,
        icon: <FaBriefcase />,
        ttl: "Outils",
        desc: "Requis pour l'apprentissage",
    },
]

const Programes = () => {
  return (
   <><h1 className='titlecp'>Programmes</h1>
 <section className='prog'>
  <div className="programes-cl">
   {data.map(({id,icon,ttl,desc}) => {return ( <div key={id} className="card">{icon}<h1>{ttl}</h1> <h5>{desc}</h5> </div> )  })} 
  </div>
 </section></>
  )
}

export default Programes
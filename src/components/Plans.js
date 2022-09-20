import React from 'react';
import './Plans.css'

const data = [
    {
        id:1,
        prix: "500F",
        ttl: "CLASSIC",
        desc: "Accès pour un moi",
        options: [
            {option: 'Accès a la communauté privée'},
            {option: 'Accès aux codes sources'},
            {option: 'Accès aux resources'},
            {option: 'Accès sur un moi aux contenus'},
            {option: 'Certifications (HTML&CSS, JS, PHP,etc...)'},
            {option: 'Zoom herbdomadaire Questions - Reponses'},
        ]
    },
    {
        id:2,
        prix: "50000F",
        ttl: "PRO",
        desc: "Accès pour un an",
        options: [
            {option: 'Accès a la communauté privée'},
            {option: 'Accès aux codes sources'},
            {option: 'Accès aux resources'},
            {option: 'Accès sur un an aux contenus'},
            {option: 'Certifications (HTML&CSS, JS, PHP,etc...)'},
            {option: 'Zoom herbdomadaire Questions - Reponses'},
            {option: 'Appeles et consultations privée 3/étutiants'},
            {option: 'Economiser jusqu`a 70 000 fcfa'},
        ]
    },
    {
        id:3,
        prix: "250000F",
        ttl: "VIP",
        desc: "Accès illimité",
        options: [
            {option: 'Accès a la communauté privée'},
            {option: 'Accès aux codes sources'},
            {option: 'Accès aux resources'},
            {option: 'Accès illimités aux contenus'},
            {option: 'Certifications (HTML&CSS, JS, PHP,etc...)'},
            {option: 'Zoom herbdomadaire Questions - Reponses'},
            {option: 'Appeles et consultations privée 10/étutiants'},
            {option: 'Conseils + Assitances'},
            {option: ' Zoom Herbdomadaire Questions - Rponses'},
        ]
    },
]
const Plans = () => {
  return (
     <>
     <h1 className='titlecp'>Plans</h1>
       <section className='st-plans'>
        <div className="plans-cl">
         {
         data.map(
            ({id,options,prix,ttl,desc}) => 
         {
            return (
              <div key={id} className="card1">
              <h3>{ttl}</h3>
              <small>{desc}</small>
              <h1>{prix}</h1>
             {
               options.map(({option}, index) => { return (<p key={index}>{option}</p>)})
             }
              <input type='button' value='Suscrit' />
              </div>  
 )}) }
        </div>
       </section></>
        

  )}

export default Plans
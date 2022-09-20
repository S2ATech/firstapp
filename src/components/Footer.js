import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="cndt">
            <ul>
                <li>Resources</li>
                <li>Inscription</li>
                <li>Connexion</li>
                <li>Politique de confidentialité</li>
                <li>Conditions d'utilisation</li>
            </ul>
        </div>
        <div className="copyr">
            <img src="./images/logo.png" alt="" />
            <p>Copyright © 2022, BPROO DEV. Tous droits réservés.</p>
        </div>
    </div>
  )
}

export default Footer
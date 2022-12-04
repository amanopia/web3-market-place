import React, {useState} from 'react';
import './footer.css';
import Logo from '../../assets/fenti-removebg-preview.png'
const Footer = () => {
  return (
    <section className="container footer__container">
      {/* Icon and email box */}
      <div className="contact__holder">
        <img src={Logo} alt="site-logo" />
      </div>
      <div className="links__container">

      </div>
    </section>
  )
}

export default Footer
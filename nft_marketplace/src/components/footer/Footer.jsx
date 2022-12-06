import React, {useState} from 'react';
import './footer.css';
import Logo from '../../assets/fenti-removebg-preview.png'
import FooterLower from '../footer__lower__content/footer__lower';
const Footer = () => {
  return (
    <div>
    <section className="container footer__container">
      {/* Icon and email box */}
      <div className="contact__holder">
        <img src={Logo} alt="site-logo" />
        <p>Enter your email to get notified by fenti for latest updates</p>
        <input type="text" placeholder='Email address' />
      </div>
      {/* Links */}
      <div className="links__container">
        <div className="links__column">
          <h4 className="links__heading">Fenti</h4>
          <a href="#deedee">Explore</a>
          <a href="#deedee">All NFTs</a>
          <a href="#deedee">About</a>
        </div>
        <div className="links__column">
          <h4 className="links__heading">My Account</h4>
          <a href="#href">Profile</a>
          <a href="#href">Favourites</a>
          <a href="#href">Watchlist</a>
          <a href="#href">My Collections</a>
          <a href="#href">Settings</a>
        </div>
        <div className="links__column">
          <h4 className="links__heading">Resources</h4>
          <a href="#href">Platform Status</a>
          <a href="#href">Partners</a>
          <a href="#href">Taxes</a>
          <a href="#href">Newsletter</a>
        </div>
        <div className="links__column">
          <h4 className="links__heading">Community</h4>
          <a href="#href">Help Center</a>
          <a href="#href">Fenti Token</a>
          <a href="#href">Suggest Feature</a>
          <a href="#href">Subscribe</a>
        </div>
      </div>
    </section>
    <FooterLower />
    </div>
  )
}

export default Footer
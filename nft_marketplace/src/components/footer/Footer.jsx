import React, {useState} from 'react';
import './footer.css';
import Logo from '../../assets/fenti-removebg-preview.png'
const Footer = () => {
  return (
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
          <a>Explore</a>
          <a>All NFTs</a>
          <a>About</a>
        </div>
        <div className="links__column">
          <h4 className="links__heading">My Account</h4>
          <a>Profile</a>
          <a>Favourites</a>
          <a>Watchlist</a>
          <a>My Collections</a>
          <a>Settings</a>
        </div>
        <div className="links__column">
          <h4 className="links__heading">Resources</h4>
          <a>Platform Status</a>
          <a>Partners</a>
          <a>Taxes</a>
          <a>Newsletter</a>
        </div>
        <div className="links__column">
          <h4 className="links__heading">Community</h4>
          <a>Help Center</a>
          <a>Fenti Token</a>
          <a>Suggest Feature</a>
          <a>Subscribe</a>
        </div>
      </div>
    </section>
  )
}

export default Footer
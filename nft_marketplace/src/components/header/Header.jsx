import React from 'react';
import './header.css';
import logoImage from '../../assets/fenti-removebg-preview.png';
import {FiMenu} from 'react-icons/fi'
import {GrClose} from 'react-icons/gr';

const Header = () => {
    return (
        <header id="header">
            <div className="container header__container">

            {/* logo */}
                <div className="header__image">
                    <img src={logoImage} alt="logo"/>
                </div>
            {/*  Links */}
                <div className="header__links">
                    <a href="#explore">Explore</a>
                    <a href="#howitworks">How it works</a>
                    <a href="#community">Community</a>
                    <a href="#signin">Sign In</a>
                    <button className="btn btn-secondary">Create</button>
                </div>
                <div className="mobile__navbar__button">
                    <FiMenu className="nav__icon" name="menu-icon"/>
                    <GrClose className="nav__icon" name="close-icon"/>
                </div>
            </div>

        </header>
    )
}

export default Header;

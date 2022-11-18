import React from 'react';
import './banner.css';
import Card from '../Cards/Card';
import Image1 from '../../assets/8machine-_-uT4XkN39vcw-unsplash.jpg';
import Image2 from '../../assets/8machine-_-GVAYgLlpeZ8-unsplash.jpg';

const Banner = () => {
    return (
        <section id="banner">
            <div className='container banner__container'>
                <div className='textual__information'>
                    <p>Sell, buy, discover, and collect NFT arts</p>
                    <div className="group__two">
                        <p>With its constantly growing artist community and NFT-powered copyrights, the origin platform offers a safe haven for artits to express their creativity.</p>
                        <button className='btn banner__btn'>
                        <p>Explore Marketplace</p>
                        </button>
                    </div>
                </div>
                <div className='pictures'> </div>
                {/* CARD1 */}
                <Card image={Image1}/>
                {/* CARD2 */}
                <Card image={Image2}/>
            </div>
        </section>
        
    )
}

export default Banner;

// give grid display to banner__container
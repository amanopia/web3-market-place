import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <section id="banner">
            <div className='container banner__container'>
                <div className='textual__information'>
                    <h1>Sell, buy, discover, and collect NFT arts</h1>
                    <div className="group__two">
                        <p>With its constantly growing artist community and NFT-powered copyrights, the origin platform offers a safe haven for artits to express their creativity</p>
                        <button>Explore Marketplace</button>
                    </div>
                </div>
                <div className='pictures'>
                {/* CARD1 */}
                {/* CARD2 */}
                </div>
            </div>
        </section>
        
    )
}

export default Banner;

// give grid display to banner__container
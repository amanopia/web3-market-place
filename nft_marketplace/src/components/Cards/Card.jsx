import React from 'react';
import './card.css'
import Image1 from '../../assets/8machine-_-uT4XkN39vcw-unsplash.jpg';
// import {Image2} from '../../assets/8machine-_-GVAYgLlpeZ8-unsplash.jpg';


const Card = () => {
    return (
        <div className='container'>
            <div className='card'>
                <img src={Image1} alt="im"/>
                <div className='text__belows'>
                    <h3>Futuristc Tunnel #209</h3>
                    <div className='text__belows__inner'>
                        <p>price 1.78</p>
                        <p>Creator 331j32e3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;
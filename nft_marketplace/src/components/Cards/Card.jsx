import React from 'react';
import './card.css'

const Card = (props) => {
    return (
        <div className='card__container'>
            <div className='card'>
                {/* 1    */}
                <img src={props.image} alt="im" className=''/>
                {/* 2 */}
                <div className='card__text'>
                    <h3>Futuristc Tunnel #209</h3>
                    <div className='card__text__inner'>
                        <div className='price__data'>
                            <small>Price</small>
                            <div>
                                <p>1.78 BNB</p>
                                <small>-$232.32</small>
                            </div>
                        </div>
                        <div className='creator__data'>
                            <small>Creator</small>
                            <p>ENEJFTI 55B5</p>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Card;
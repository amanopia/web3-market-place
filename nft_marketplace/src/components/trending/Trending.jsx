import React from 'react'
import './trending.css';

import {AiOutlineArrowUp} from 'react-icons/ai';

const Trending = () => {
  return (
    <section className="container trending__container" id="trending">
        <h1>Trending Auctions Just For You</h1>
        <small>Collection of unique arts from Meta.io, NFTforia, and Interstellar, create with DALL-E 2</small>
        <button className="trending__button">
          <AiOutlineArrowUp className="trending__icon"/>
        </button>
    </section>
  )
}

export default Trending
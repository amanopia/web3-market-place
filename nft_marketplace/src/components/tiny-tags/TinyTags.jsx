import React from 'react'
import './tiny-tags.css'
const TinyTags = (props) => {
  return (
    <div className='tinyTags'>
        <a href="#ee" className="tag">
            {props.icon}
            {props.description}
        </a>
    </div>
  )
}

export default TinyTags;
//Newstemplate.jsx
import React from 'react'
import './newsTemplate.css'

export const NewsTemplate = (props) => {
    const { heading, desc, image, link } = props.data;
  return (
    <a href={link} target="_blank">
      {/* <div className="newsBox">
      <img src={image} alt='newsImage'/>
      <div className="description">
        <p className='heading'>
          {heading}
        </p>
        <p>{desc}</p>
      </div>
    </div> */}
      <div class="container">
  <div class="text-center">
  </div>
  <div class="container">
    <div class="card-columns">
      <div class="card">
        <a href="#" />
        <img class="card-img-top" src={image} alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{heading}</h5>
          <p class="card-text">{desc}</p>
      </div>
      </div>
      </div>
      </div>
      </div>
    </a>
  )
}

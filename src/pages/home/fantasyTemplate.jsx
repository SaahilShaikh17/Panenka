//FantasyTemplate.jsx
import React from 'react'

export const FantasyTemplate = (props) => {
    const { heading, desc, image, link } = props.data;
  return (
    <a href={link} target="_blank"><div className="newsBox">
      <img src={image} alt='FantasyImage'/>
      <div className="description">
        <p>
          <b style={{color: 'black'}}>{heading}</b>
        </p>
        <p>{desc}</p>
      </div>
    </div></a>
  )
}

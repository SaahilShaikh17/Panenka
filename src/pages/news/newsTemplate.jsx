import React from 'react'
export const NewsTemplate = (props) => {
    const { heading, desc, image, link } = props.data;
  return (
    <a href={link} target="_blank"><div className="newsBox">
      <img src={image} alt='newsImage'/>
      <div className="description">
        <p className='heading'>
          {heading}
        </p>
        <p>{desc}</p>
      </div>
    </div></a>
  )
}

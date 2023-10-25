import React from 'react';
import './uncontrolledexample.css'
import Carousel from 'react-bootstrap/Carousel';
import News1 from '../assets/news1.webp'
import News2 from '../assets/news2.webp'
import News3 from '../assets/news3.webp'

export const UncontrolledExample = () => {
  return (
        <div className='car'>
            <Carousel>
        <Carousel.Item>
        <a href='https://www.goal.com/en-in/lists/joel-matip-winners-losers-nine-man-liverpool-blow-it-klopp-var/blt1d50c084b7891c7b' target='_'><img src={News1} className='image'></img></a>
        <Carousel.Caption>
            <h3 className='carouselHeading'>"PGMOL... OR LOL?"</h3>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <a href='https://www.goal.com/en-in/lists/man-utd-player-ratings-vs-crystal-palace-marcus-rashford-rasmus-hojlund/bltba89b3f4314a691c' target='_'><img src={News2} className='image'></img></a>
      <Carousel.Caption>
        <h3 className='carouselHeading'>Rashford goes missing in latest Man Utd debacle</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <a href='https://www.goal.com/en-in/lists/man-city-player-ratings-vs-wolves-erling-haaland-julian-alvarez/blte93c876980382439' target='_'><img src={News3} className='image'></img></a>
      <Carousel.Caption>
        <h3 className='carouselHeading'>Maybe he's human after all</h3>
       
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel></div>
  );
}
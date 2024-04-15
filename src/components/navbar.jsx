//navbar.jsx
import "./navbar.css"
import React from 'react';
// import { Link } from 'react-router-dom';
import LoginImg from '../assets/login2.svg';

export const Navbar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">Paneka</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav mx-auto"> 
          <li className="nav-item">
            <a className="nav-link" href="/fixtures">Fixtures</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/table">Table</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/Dashboard">Forum</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/news">News</a>
          </li>
          
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" role="button">
            Clubs
          </a>
          <ul className="dropdown-menu grid-menu">
            <div className="grid-container">
              <li><a className="dropdown-item" href="https://www.arsenal.com/" target="_">Arsenal</a></li>
              <li><a className="dropdown-item" href="https://www.avfc.co.uk/" target="_">Aston Villa</a></li>
              <li><a className="dropdown-item" href="https://www.afcb.co.uk/" target="_">Bournemouth</a></li>
              <li><a className="dropdown-item" href="https://www.brentfordfc.com/en" target="_">Brentford</a></li>
              <li><a className="dropdown-item" href="https://www.brightonandhovealbion.com/" target="_">Brighton & Hove Albion</a></li>
              <li><a className="dropdown-item" href="https://www.burnleyfootballclub.com/" target="_">Burnley</a></li>
              <li><a className="dropdown-item" href="https://www.chelseafc.com/en" target="_">Chelsea</a></li>
              <li><a className="dropdown-item" href="https://www.cpfc.co.uk/" target="_">Crystal Palace</a></li>
              <li><a className="dropdown-item" href="https://www.evertonfc.com/" target="_">Everton</a></li>
              <li><a className="dropdown-item" href="https://www.fulhamfc.com/" target="_">Fulham</a></li>
              <li><a className="dropdown-item" href="https://www.liverpoolfc.com/" target="_">Liverpool</a></li>
              <li><a className="dropdown-item" href="https://www.lutontown.co.uk/" target="_">Luton Town</a></li>
              <li><a className="dropdown-item" href="https://www.mancity.com/" target="_">Manchester City</a></li>
              <li><a className="dropdown-item" href="https://www.manutd.com/" target="_">Manchester United</a></li>
              <li><a className="dropdown-item" href="https://www.nufc.co.uk/" target="_">Newcastle United</a></li>
              <li><a className="dropdown-item" href="https://www.nottinghamforest.co.uk/" target="_">Nottingham Forest</a></li>
              <li><a className="dropdown-item" href="https://www.sufc.co.uk/" target="_">Sheffield United</a></li>
              <li><a className="dropdown-item" href="https://www.tottenhamhotspur.com/" target="_">Tottenham Hotspur</a></li>
              <li><a className="dropdown-item" href="https://www.whufc.com/" target="_">West Ham United</a></li>
              <li><a className="dropdown-item" href="https://www.wolves.co.uk/" target="_">Wolverhampton Wanderers</a></li>
            </div>
          </ul>
        </li>

          <li className="nav-item">
            <a className="nav-link" href="/about">About</a>
          </li>
        </ul>
      </div>
      {/* <div className="nav-login">
        <a className="nav-link" href="http://localhost:3000/users/login">Login<img src={LoginImg} alt="Login"></img></a>
      </div> */}
    </div>
  </nav>



    // <div className='navbar'>
    //     <div className="home">
    //     <Link to='/home'>Paneka</Link>
    //     </div>
    //     <div className='links'>
    //         <Link to='/fixtures'>Fixtures</Link>
    //         <Link to='/table'>Table</Link>
    //         <Link to='/forum'>Forum</Link>
    //         <Link to='/news'>News</Link>
    //         <Link to='/about'>About</Link>
    //     </div>
    //     <div className="login">
    //     <Link to='/login'><p/>Log in&nbsp;<img src={LoginImg} alt="Login"></img></Link>
    //     </div>
    // </div>
  )
}
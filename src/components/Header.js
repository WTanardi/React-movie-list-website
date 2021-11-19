import React, {useState} from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const modeToggle = () => {
      document.body.classList.toggle('dark')
  }
  
  return (
    <nav className="topnav">
        <div className="topnav-container">
            <Link to='/' className='topnav-logo'>
                <img src={require('../img/logo.png')} alt="logo" />
            </Link>
            <div className="wrapper">
                <Link to='/'>
                    <i className="fas fa-home fa-2x"></i>
                </Link>
                <label className="switch">
                    <input type="checkbox" id="mode-toggle" onChange={modeToggle}/>
                </label>
                <Link to='/watchlist' >
                    <i className="fas fa-eye fa-2x"></i>
                </Link>
            </div>
            <div className={click ? 'hamburger active' : 'hamburger'} onClick={handleClick}></div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className="nav-item">
                    <h1 className="nav-item--header">appreciating great movies of our time</h1>
                </li>
                <li className="nav-item">
                    <img src={require("../img/Oscar.gif")} alt="Spinning Oscar" id="oscar" />
                </li>
                <li className="nav-item">
                    <h2 className="nav-item--email"><a href="mailto:william.tanardi@gmail.com">william.tanardi@gmail.com</a></h2>
                    <div className="nav-item--social">
                        <a href="https://www.instagram.com/williamtanardi/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-3x"></i></a>
                        <a href="https://www.linkedin.com/in/william-t-478205204/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-3x"></i></a>
                        <a href="https://github.com/WTanardi" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-3x"></i></a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header;
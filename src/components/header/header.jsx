import React from 'react';
import './header.css'
import Logo from '../../assets/logo-white.svg'
const Header = () => {
    return (
        <div className='header'>
            <div className="header-logo">
                <img src={Logo} width={140} alt="" />
            </div>
            <div className="menu">
                <ul>
                  <a href=""><li id='home'>Inicio</li></a>  
                  <a href=""><li>Inicio</li></a>  
                  <a href=""><li>Inicio</li></a>  
                  <a href=""><li>Inicio</li></a>  
                  <a href=""><li>Inicio</li></a>  
                  <button>Portugues</button>
                </ul>
                
            </div>
        </div>
    );
}

export default Header;

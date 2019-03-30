import React from 'react'
import {Link} from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <div className="header">
        <Link className="header__btn" to="/"> Redux Auth </Link>
        <Link className="header__btn" to="/signup"> Sign Up </Link>
        <Link className="header__btn" to="/signin"> Sign In </Link>
        <Link className="header__btn" to="/features"> Feature </Link>
    </div>
  )
}

export default Header

import React from 'react'
import { NavLink } from 'react-router-dom'

function Header(props) {
    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <p className="header__logo_text">{props.name}</p>
                </div>
                <div className="header__burgermenu">
                    <NavLink to="/menu" ><img src="menu.png" alt="burger-menu" /></NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header


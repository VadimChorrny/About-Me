import React from 'react'

function Header() {

    
    
    return (
        <div className="header">
            <div className="header__inner">
                <div className="header__logo">
                    <p className="header__logo_text">Vadim Chorrny</p>
                </div>
                <div className="header__burgermenu">
                    <a href="#"><img src="menu.png" alt="burger-menu" /></a>
                </div>
            </div>
        </div>
    )
}

export default Header

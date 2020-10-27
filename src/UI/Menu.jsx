import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
    return (
        <div id="#menu" className="menu">
            <div className="menu__inner">
                <div className="about-bar">
                    <img src="instagram.png" alt="vadim-icon" />
                    <p className="about-cont">CONTACT DETAILS </p>
                    <p className="about-gmail">chorrny228@gmail.com</p>
                    <p className="about-number">+38(068)34-86-211</p>
                    <span>SOCIAL MEDIA</span>
                    <div className="about-img">
                        <a href="https://github.com/VadimChorrny" target="_blank"><img src="github.png" alt="github-icon" /></a>
                        <a href="https://twitter.com/Vadim95242747" target="_blank"><img src="twitter.png" alt="twitter-icon" /></a>
                        <a href="https://www.facebook.com/vadim.chorny.31/" target="_blank"><img src="facebook.png" alt="facebooj-icon" /></a>
                        <a href="https://www.instagram.com/chorrny/" target="_blank"><img src="instagram.png" alt="instagram-icon" /></a>
                    </div>

                </div>
                <div className="side-bar">
                    <span>Home</span>
                    <p>About</p>
                    <p>Contact</p>
                    <p>My work</p>
                    <p>Services</p>


                </div>
                <div className="close">
                    <NavLink to="/home"><img src="cancel.png" alt="cancel-icon" /></NavLink>

                </div>
            </div>
        </div>
    )
}

export default Menu

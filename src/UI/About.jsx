import React from 'react'

function About() {
    return (
        <div className="about">
            <div className="about__inner">
                <div className="about-block-help">
                    <h1>How can i help you?</h1>
                    <p>
                        As a freelance digital designer,
                        I am here to make you stand out in the digital world.
                        The combination of my passion for design
                        and your vision will ensure a great end result.
                    </p>
                </div>
                <div className="about-block-design">
                    <span>DESIGN</span>
                    <p>Web Design</p>
                    <p>Prototyping</p>
                    <p>Branding</p>
                    <p>Illustration</p>
                </div>
                <div className="about-block-development">
                    <span>Development</span>
                    <p>Web Development</p>
                </div>
            </div>
        </div>
    )
}

export default About

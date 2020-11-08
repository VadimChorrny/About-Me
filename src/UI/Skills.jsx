import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


function Skills() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="skills">
                <div className="skills__inner">
                    <div className="our-services">
                        <h1>Our Services</h1>
                        <p>We are a full-service creative agency, we have a service for all your design, web and marketing needs! World here and now!</p>
                    </div>
                    <div className="skill-box">
                        <div className="box-first" onClick={handleShow}>
                            <p className="box-logo">Des</p>
                            <p className="box-design">Design.</p>
                            <span>Branding</span>
                            <span>UI/UX Design</span>
                            <span>Brand Ambassadors</span>
                        </div>
                        <div className="box-first" onClick={handleShow}>
                            <p className="box-logo">Bui</p>
                            <p className="box-design">Build.</p>
                            <span>Website Development</span>
                            <span>Web-Applications</span>
                            <span>Support and Maintenance</span>
                        </div>
                        <div className="box-first" onClick={handleShow}>
                            <p className="box-logo">Ma</p>
                            <p className="box-design">Market.</p>
                            <span>Didgital Marketing</span>
                            <span>Video Production</span>
                            <span>Outsourced Marketing</span>
                        </div>

                    </div>
                </div>

            </div>
            <div className="modal-window">
                <Modal className="general-modal" show={show} onHide={handleClose}>
                    <Modal.Title className="h-modal">Modal heading</Modal.Title>
                    <Modal.Body className="b-modal">Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Quae nesciunt assumenda
                    porro ratione neque harum, recusandae facilis
                voluptates saepe pariatur.</Modal.Body>
                </Modal>
            </div>

        </>
    )
}

export default Skills

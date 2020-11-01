import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'


function ModalWindow() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
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
    );
}

export default ModalWindow

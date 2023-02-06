import React, { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Showcase from './components/Showcase'
import Newsletter from './components/Newsletter'
import Boxes from './components/Boxes'
import Learn from './components/Learn'
import Questions from './components/Questions'
import Instructors from './components/Instructors'
import ContactAndMap from './components/ContactAndMap'
import Footer from './components/Footer'
import './style.css'
import { Button, Modal } from 'react-bootstrap'
import Login from '../Registration/Login'


function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch static backdrop modal
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}


function Bbw(props) {

    const menuItems = [
        { id: "1", text: "Home", href: "/" },
        { id: "2", text: "Login", href: "/login" },
        { id: "8", text: "Register", href: "/register" },
        { id: "3", text: "Axios", href: "/axios" },
        { id: "4", text: "Fetch", href: "/fetch" },
        { id: "5", text: "Clicker", href: "/clicker" },
        { id: "6", text: "Lists", href: "/lists" },
        { id: "7", text: "MTC", href: "/mtc" },
    ]

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Nav handleClose={handleClose} handleShow={handleShow} items={menuItems} />
            <Showcase />
            <Newsletter />
            <Boxes />
            <Learn />
            <Questions />
            <Instructors />
            <ContactAndMap />
            <Footer />

           <>
           <>
           

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Login to the platform </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Login></Login>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
           </>


        </div>
    )
}

export default Bbw
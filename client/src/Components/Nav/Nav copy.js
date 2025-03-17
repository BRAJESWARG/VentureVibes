import React, { useEffect, useState } from 'react';
import './Nav.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import jsPDF from 'jspdf';
// import { Link } from "react-router-dom";
// import axios from 'axios';
import Logo from '../../Assets/VentureVibes-logo.png';
import LogoFlight from '../../Assets/LogoFlight.png';
import LogoHotel from '../../Assets/LogoHotel.png';
import LogoTrain from '../../Assets/LogoTrain.png';
import LogoBus from '../../Assets/LogoBus.png';
import LogoCab from '../../Assets/LogoCab.png';

const NavComponent = () => {

  // const [yourTrip, setYourTrip] = useState([]);

  // useEffect(() => {

  //   axios.get(`http://localhost:8040/api/v1/MakeYourTrip`).then(
  //     data => setYourTrip(data.data)
  //   )

  // }, [])

  const [isSolid, setIsSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSolid(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [show, setShow] = useState(false);
  const [thankYoushow, setThankYouShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleThankYouClose = () => setThankYouShow(false);
  const handleThankYouShow = () => {
    setShow(false)
    setThankYouShow(true)
  };

  let [displayData, setDisplayData] = useState(false)
  const [formData, setFormData] = useState(
    {
      firstName: "",
      lastName: "",
      email: "",
      telephoneNumber: ""

    }
  )

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log(formData)
    setDisplayData(!displayData)
  }

  const handleDownload = (event) => {
    event.preventDefault()
    var doc = new jsPDF();
    doc.text(
      10,
      10,
      "First Name: " + formData.firstName +
      "Last Name: " + formData.lastName +
      "Email: " + formData.email +
      "Mobile No.: " + formData.telephoneNumber


    );

    doc.save("form.pdf");
  };

  // const displayHandler = () => {
  //     setDisplayData((prev) => !prev)
  // }

  return (
    // <nav className={`navbar ${isSolid ? 'solid' : 'transparent'}`}>
    <Navbar className={`navContainer ${isSolid ? 'solid' : 'transparent'}`} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src={Logo} height="200rem" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 CategoryComponents"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link href="/" className='NavCategory'>Home</Nav.Link> */}
            {
              // yourTrip.filter((value) => value.ID === '1').map((val, index) => (

              //   <Nav.Link href={`/${val.Category}`} className='NavCategory' key={index} >
              //     <img src={LogoHotel} height="32rem" alt="LogoHotel" />
              //     {val.Category}
              //   </Nav.Link>
              // ))
            }
            <Nav.Link href='/Hotels' className='NavCategory' >
              <img src={LogoHotel} height="32rem" width='50rem' alt="LogoHotel" />
              Hotels
            </Nav.Link>
            <Nav.Link href='/Flights' className='NavCategory' >
              <img src={LogoFlight} height="32rem" width='60rem' alt="LogoFlight" />
              Flights
            </Nav.Link>
            <Nav.Link href='/Train' className='NavCategory' >
              <img src={LogoTrain} height="32rem" width='60rem' alt="LogoTrain" />
              Train
            </Nav.Link>
            <Nav.Link href='/Bus' className='NavCategory' >
              <img src={LogoBus} height="32rem" width='60rem' alt="LogoBus" />
              Bus
            </Nav.Link>
            <Nav.Link href='/Cab' className='NavCategory' >
              <img src={LogoCab} height="32rem" width='60rem' alt="LogoCab" />
              Cab
            </Nav.Link>
          </Nav>
          <Form className="d-flex">

            <Button variant="outline-success" className='login'>Login</Button>
            <Button variant="outline-success primary" className='get-started' onClick={handleShow}>Get Started</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form
            onSubmit={submitHandler}
          >

            <div className="name-row">
              <input
                type="text"
                required
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
            </div>

            <div className="contact-row">
              <input
                type="email"
                required
                placeholder="Email Address"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />

              <input
                type="Telephone Number"
                placeholder="Telephone Number"
                onChange={handleChange}
                name="telephoneNumber"
                value={formData.telephoneNumber}
              />
            </div>

            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleThankYouShow} className="btn" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
      <Modal
        show={thankYoushow}
        onHide={handleThankYouClose}
        backdrop="static"
        keyboard={false}
      >

        <Modal.Body>
          <h1>Thank You</h1>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDownload}>
            Take print of data
          </Button>
          <Button variant="primary" onClick={handleThankYouClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavComponent;

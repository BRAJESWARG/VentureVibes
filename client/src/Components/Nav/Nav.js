import React, { useEffect, useState } from 'react';
import './Nav.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';
import Logo from '../../Assets/VentureVibes-logo.png';
import LogoFlight from '../../Assets/LogoFlight.png';
import LogoHotel from '../../Assets/LogoHotel.png';
import LogoTrain from '../../Assets/LogoTrain.png';
import LogoBus from '../../Assets/LogoBus.png';
import LogoCab from '../../Assets/LogoCab.png';
import LogIN from '../LogIN&Register/LogIN';
import Register from '../LogIN&Register/Register';

import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  // MDBTabsPane,
  // MDBBtn,
  // MDBIcon,
  // MDBInput,
  // MDBCheckbox
}
  from 'mdb-react-ui-kit';

const NavComponent = () => {

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

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  return (
    <Navbar className={`navContainer ${isSolid ? 'solid' : 'transparent'}`} expand="lg">
      <Container fluid>
        <Navbar.Brand href="/Hotels">
          <img src={Logo} height="200rem" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 CategoryComponents"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href='/Hotels' className='NavCategory' >
              <img src={LogoHotel} className='NavCategoryLogo' alt="LogoHotel" />
              Hotels
            </Nav.Link>
            <Nav.Link href='/Flights' className='NavCategory' >
              <img src={LogoFlight} className='NavCategoryLogo' alt="LogoFlight" />
              Flights
            </Nav.Link>
            <Nav.Link href='/Train' className='NavCategory' >
              <img src={LogoTrain} className='NavCategoryLogo' alt="LogoTrain" />
              Train
            </Nav.Link>
            <Nav.Link href='/Bus' className='NavCategory' >
              <img src={LogoBus} className='NavCategoryLogo' alt="LogoBus" />
              Bus
            </Nav.Link>
            <Nav.Link href='/Cab' className='NavCategory' >
              <img src={LogoCab} className='NavCategoryLogo' alt="LogoCab" />
              Cab
            </Nav.Link>
          </Nav>
          <Form className="d-flex ">
            <Button variant="outline-success primary contained" color="primary" className='login-button' onClick={handleShow}>LOGIN / SIGNUP</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <MDBContainer className="p-3 my-5 ">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                  Log In
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                  Register
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>
              {(() => {
                if (justifyActive === 'tab1') {
                  return (
                    <LogIN handleThankYouShow={handleThankYouShow} />
                  );
                } else if (justifyActive === 'tab2') {
                  return (
                    <Register handleThankYouShow={handleThankYouShow} />
                  );
                }
              })()}

            </MDBTabsContent>

          </MDBContainer>
        </Modal.Body>
        {
          // <Modal.Body>
          //   <form className='' onSubmit={handleSubmit}>
          //     <input
          //       label="First Name"
          //       variant="filled"
          //       required
          //       value={firstName}
          //       onChange={(e) => setFirstName(e.target.value)}
          //     />
          //     <input
          //       label="Last Name"
          //       variant="filled"
          //       required
          //       value={lastName}
          //       onChange={(e) => setLastName(e.target.value)}
          //     />
          //     <input
          //       label="Email"
          //       variant="filled"
          //       type="email"
          //       required
          //       value={email}
          //       onChange={(e) => setEmail(e.target.value)}
          //     />
          //     <input
          //       label="Password"
          //       variant="filled"
          //       type="password"
          //       required
          //       value={password}
          //       onChange={(e) => setPassword(e.target.value)}
          //     />
          //     <div>
          //       <Button variant="contained" onClick={handleClose}>
          //         Cancel
          //       </Button>
          //       <Button type="submit" variant="contained" onClick={handleThankYouShow} color="primary">
          //         Signup
          //       </Button>
          //     </div>
          //   </form>
          //   {
          //     // <form
          //     //   onSubmit={submitHandler}
          //     // >

          //     //   <div className="name-row">
          //     //     <input
          //     //       type="text"
          //     //       required
          //     //       placeholder="First Name"
          //     //       onChange={handleChange}
          //     //       name="firstName"
          //     //       value={formData.firstName}
          //     //     />
          //     //     <input
          //     //       type="text"
          //     //       required
          //     //       placeholder="Last Name"
          //     //       onChange={handleChange}
          //     //       name="lastName"
          //     //       value={formData.lastName}
          //     //     />
          //     //   </div>

          //     //   <div className="contact-row">
          //     //     <input
          //     //       type="email"
          //     //       required
          //     //       placeholder="Email Address"
          //     //       onChange={handleChange}
          //     //       name="email"
          //     //       value={formData.email}
          //     //     />

          //     //     <input
          //     //       type="Telephone Number"
          //     //       placeholder="Telephone Number"
          //     //       onChange={handleChange}
          //     //       name="telephoneNumber"
          //     //       value={formData.telephoneNumber}
          //     //     />
          //     //   </div>

          //     //   <Modal.Footer>
          //     //     <Button variant="secondary" onClick={handleClose}>
          //     //       Close
          //     //     </Button>
          //     //     <Button variant="primary" onClick={handleThankYouShow} className="btn" type="submit">
          //     //       Submit
          //     //     </Button>
          //     //   </Modal.Footer>
          //     // </form>
          //   }
          // </Modal.Body>
        }
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
          <Button variant="primary" onClick={handleThankYouClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default NavComponent;
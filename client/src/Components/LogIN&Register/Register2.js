import React from 'react';
import './LogIN.css';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

const Register = ({handleThankYouShow}) => {
  return (
    <MDBContainer fluid className="p-3 my-5">

      <MDBRow>

        <MDBCol col='4' md='6'>

          <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' />
          <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' />
          <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' />

          <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div>

          <MDBBtn className="mb-4 w-100" onClick={handleThankYouShow} >Sign up</MDBBtn>


        </MDBCol>

        <MDBCol col='12' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className='img-fluid' alt="GirlImage" />
        </MDBCol>

      </MDBRow>
      <MDBRow>
        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0">OR</p>
        </div>

        <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
          <MDBIcon fab icon="facebook-f" className="mx-2" />
          Continue with facebook
        </MDBBtn>

        <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#55acee' }}>
          <MDBIcon fab icon="twitter" className="mx-2" />
          Continue with twitter
        </MDBBtn>
      </MDBRow>

    </MDBContainer>
  );
}

export default Register;

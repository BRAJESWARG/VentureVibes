import React from 'react';
import { MDBInput, MDBRow, MDBCol } from 'mdb-react-ui-kit';

const HotelSearch = () => {
  return (
    <>
      <MDBRow>
        <MDBCol>
          <MDBInput id='form10Example1' label='Name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form10Example2' label='Email address' type='email' />
        </MDBCol>
      </MDBRow>

      <hr />

      <MDBRow>
        <MDBCol>
          <MDBInput id='form10Example3' label='First name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form10Example4' label='Last name' />
        </MDBCol>
        <MDBCol>
          <MDBInput id='form10Example5' label='Email address' type='email' />
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default HotelSearch;
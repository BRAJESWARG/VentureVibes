import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  // MDBBtn,
  MDBRipple
} from 'mdb-react-ui-kit';

export default function Product(props) {
  return (
    <MDBCard>
      <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
        <MDBCardImage src={props.url} fluid alt={props.name} />
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{props.name}</MDBCardTitle>
        <MDBCardText>
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
  );
}

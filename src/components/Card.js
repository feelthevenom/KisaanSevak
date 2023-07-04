import React from 'react';
import "./styles.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

export default function Card(props) {
  return (
    
    <MDBCard className='mainCard'>
      <MDBCardImage src={props.img} position='top' alt='...' className='imgtag'/>
       <MDBCardBody className='content'>
        <MDBCardTitle className='title'>{props.title}</MDBCardTitle>
        <MDBCardText >
          <div className='info'>{props.detail}<a href='{props.full_detail}'>More</a></div>
        </MDBCardText>
      </MDBCardBody> 
    </MDBCard>
  );
}
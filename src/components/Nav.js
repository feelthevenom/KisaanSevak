import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
} from 'mdb-react-ui-kit';


function Nav()
{
  const [showNavRight, setShowNavRight] = useState(false);
 
   return (
     <MDBNavbar expand='lg' light bgColor='#283618'>
       <MDBContainer fluid>
         <MDBNavbarBrand ><div className="logo">KisaanSevak</div></MDBNavbarBrand>
 
         <MDBNavbarToggler
          type='button'
          data-target='#navbarRightAlignExample'
          aria-controls='navbarRightAlignExample'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowNavRight(!showNavRight)}
        >
        <p className="navicon">☰</p>
         </MDBNavbarToggler>
 
         <MDBCollapse navbar show={showNavRight}>
           <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
               <MDBNavbarItem>
               <MDBNavbarLink >Home</MDBNavbarLink>
             </MDBNavbarItem>
             <MDBNavbarItem>
               <MDBNavbarLink >Link</MDBNavbarLink>
             </MDBNavbarItem>
             <MDBNavbarItem>
               <MDBNavbarLink >About</MDBNavbarLink>
             </MDBNavbarItem>
           </MDBNavbarNav>
         </MDBCollapse>
       </MDBContainer>
     </MDBNavbar>
   );
 }

export default Nav;
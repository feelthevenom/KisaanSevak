import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
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
           <MDBIcon icon='menu-burger' />
         </MDBNavbarToggler>
 
         <MDBCollapse navbar show={showNavRight}>
           <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0'>
               <MDBNavbarItem>
               <MDBNavbarLink href='#'>Home</MDBNavbarLink>
             </MDBNavbarItem>
             <MDBNavbarItem>
               <MDBNavbarLink href='#'>Link</MDBNavbarLink>
             </MDBNavbarItem>
             <MDBNavbarItem>
               <MDBNavbarLink href='#'>About</MDBNavbarLink>
             </MDBNavbarItem>
           </MDBNavbarNav>
 
           {/* <form className='d-flex input-group w-auto'>
             <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
             <MDBBtn color='#a3b18a'>Search</MDBBtn>
           </form> */}
         </MDBCollapse>
       </MDBContainer>
     </MDBNavbar>
   );
 }

export default Nav;
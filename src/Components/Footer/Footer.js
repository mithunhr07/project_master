import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './Footer.css'
import BrowserHistory from "../Utils/BrowserHistory";
const FooterPage = () => {

  return (
    <MDBFooter color="blue" className="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="2" className="font-size">
            <h5 className="title, font-size">Company Address</h5>
            <p>
              P.Hosahalli,Belagola Hobli,Sr Patna Taluk<br></br>Mandya District-571438
            </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title, font-size">Telephone Number</h5>
            <p className="font-size">
              +91-9844367467 
            </p>
            
          </MDBCol>
          <MDBCol md="3" className="font-size">
            <h5 className="email">Email</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">mithunhrm07@gmail.com</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">bindushreerm10@gmail.com</a>
              </li>
            </ul>
          </MDBCol>
          <MDBCol md="3">
          <button type="button" className="btn btn-outline-primary"><a href="/Payment_page">BOOK A MACHINERY</a></button>
          </MDBCol>
          <MDBCol md="1" className="font-size">
          <a href="#" className="fb_icon"><i class="fa fa-facebook"></i></a>
			    <a href="#" className="twi_icon"><i class="fa fa-twitter"></i></a>
			    <a href="#" className="goo_icon"><i class="fa fa-google-plus"></i></a>
		      
          </MDBCol>
         </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3 font-size">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.agricultural_Machinery.com">Company Machinery</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}


export default FooterPage;
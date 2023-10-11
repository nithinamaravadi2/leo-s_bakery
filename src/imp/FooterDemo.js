import React from 'react'
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footerstyle.css'
import 'bootstrap/dist/css/bootstrap.css';
//import './ChocolateDemo.css'
//import InstagramIcon from '@mui/icons-material/Instagram';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faInstagram, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'; 
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
//import { Icon } from '@mui/material';

const Footerfunc = () => {
    return (
    <div className="follow-us-section pt-5 pb-5">
            <Col xs={12}>
                <h1 class="follow-us-section-heading">Follow Us</h1>
            </Col>
            <Col xs={12}>
                <div className="d-flex flex-row justify-content-center">
                <div className="follow-us-icon-container">
                {/* <FontAwesomeIcon icon={faInstagram} /> */}
                <i class="fab fa-instagram icon"></i> 
                     
                </div>
                <div className="follow-us-icon-container">
               {/*  <FontAwesomeIcon icon={faFacebook} /> */}
                <i class="fab fa-instagram icon"></i> 
                {/* <svg data-testid="InstagramIcon"></svg> */}
                {/* <i class="fab fa-instagram icon"></i> */}
                </div>
                <div className="follow-us-icon-container">
                <i class="fab fa-instagram icon"></i> 
                {/* <FontAwesomeIcon icon={faTwitter} /> */}
                </div>
                </div>
            </Col>
    </div>
    );
}

export default Footerfunc;
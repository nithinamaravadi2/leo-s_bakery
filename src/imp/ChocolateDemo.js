import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import './ChocolateDemo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
const ChocolateDemo = () => {
    return (
      
         <div className="explore-about-section pt-5 pb-5">
            <div className="mt-5" style={{margin:'100px'}}>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <h1 className="about-us-section-heading text-center">About Our Services</h1>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={4}>
                      <div className="shadow-lg about-item-card about-us-card-below p-4 mb-3" >
                        <img
                          src="https://img.freepik.com/premium-photo/oil-splatters-giant-glistening-doughnut-dark-red-candy-apple-top-dripping-down-sides-floating-black-back-drop-digitally-generated-image-based-any-actual-scene-pattern_479694-6150.jpg"
                          className="about-item-image w-100 pd-0"
                        />
                            <h1 className="about-card-title pt-0"><b>Doughnuts</b></h1>
                            <a href="#" className="about-item-link ">
                            View All
                            <svg width="16px" height="16px" viewBox="0 0 16 16" className="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path
                                fill-rule="evenodd"
                                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                />
                            </svg>
                            </a>
                        
                      </div>
                    </Col>
                    <Col xs={12} md={6} lg={4} xl={4}>
                        <div class="shadow-lg about-item-card about-us-card-below p-3 mb-3 ">
                          <div class="mb-3 pb-4">
                            <img
                              src="https://us.123rf.com/450wm/ahmadfarazswl/ahmadfarazswl2304/ahmadfarazswl230402451/203485951-chocolate-bar-and-red-hot-chili-peppers-on-a-black-background.jpg?ver=6"
                              class="about-item-image w-100"
                            />
                            <h1 class="about-card-title"><b>Chocolates</b></h1>
                            <a href="#" class="about-item-link">
                              View All
                              <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </Col>
                      <Col xs={12} md={6} lg={4} xl={4}>
                        <div class="shadow-lg about-item-card about-us-card-below p-3 mb-3">
                          <div class="mb-3 pb-4">
                            <img
                              src="https://img.freepik.com/premium-photo/piece-chocolate-with-dark-background-piece-chocolate-it_853645-4747.jpg"
                              class="about-item-image w-100"
                            />
                            <h1 class="about-card-title"><b>Pastery</b></h1>
                            <a href="#" class="about-item-link about-us-link">
                              View All
                              <svg width="16px" height="16px" viewBox="0 0 16 16" class="bi bi-arrow-right-short about-item-link" fill="#d0b200" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  fill-rule="evenodd"
                                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                                />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </Col>
                  </Row>
                </Container>
          </div>
      </div>
         
          
    )
}
export default ChocolateDemo;
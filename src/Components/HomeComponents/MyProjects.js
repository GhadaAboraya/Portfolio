import React from 'react';
import { Container ,Row ,Col} from 'reactstrap';
import '../Styles/HomeStyles/MyProjects.css';
import { Link } from 'react-router-dom';
import One from '../../Images/mountana.png';
import Two from '../../Images/tasty.png';
import Three from '../../Images/timePiece.jpg';
import Four from '../../Images/trips.jpg';
import Five from '../../Images/it.jpg';
import Six from '../../Images/travel.jpg';



const MyProjects =() => {
    return(
        <div className="proj" id="Proj">
            <h1>My projects</h1>
               <Container>
                  <Row>
                      <Col className="col-md-4 col-xs-12">
                          <div className="content">
                                <a href="https://hungry-ardinghelli-213b93.netlify.com" target="_blank">
                                    <img src={One} className="myimg"/>
                                    <h3>Project Name: Montana Resort App</h3>
                                </a>
                            </div>
                      </Col>
                      <Col className="col-md-4 col-xs-12">
                            <div className="content">
                            <a href="https://focused-ritchie-bd90f5.netlify.com" target="_blank">
                              <img src={Two} className="myimg"/>
                              <h3>Project Name: Tasty App</h3>
                            </a>
                            </div>
                      </Col>
                      <Col className="col-md-4 col-xs-12">
                            <div className="content">
                            <a href="https://friendly-noether-9928b5.netlify.com" target="_blank">
                              <img src={Three} className="myimg"/>
                              <h3>Project Name: Time Piece Product</h3>
                              </a>
                            </div>
                      </Col>
                  </Row>
                  <Row>
                      <Col className="col-md-4">
                          <div className="content">
                          <a href="https://pensive-volhard-a5e863.netlify.com" target="_blank">
                              <img src={Four} className="myimg"/>
                              <h3>Project Name: Trips Template</h3>
                            </a>
                          </div>
                      </Col>
                      <Col className="col-md-4">
                            <div className="content">
                            <a href="https://unruffled-goldstine-c3f76c.netlify.com" target="_blank">
                              <img src={Five} className="myimg"/>
                              <h3>Project Name: It-Services Templates</h3>
                              </a>
                            </div>
                      </Col>
                      <Col className="col-md-4">
                            <div className="content">
                            <a href="https://amazing-curran-7827c3.netlify.com" target="_blank">
                              <img src={Six} className="myimg"/>
                              <h3>Project Name: Traveller Template</h3>
                            </a>
                            </div>
                      </Col>
                  </Row>
              </Container>
        </div>
      );
}
export default MyProjects;
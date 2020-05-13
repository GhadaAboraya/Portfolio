import React from 'react';
import { Container , Row , Col, Button, Form, Input } from 'reactstrap';
import '../Styles/HomeStyles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


const Contact =() => {
    return(
        <div className="contact" id="Con">
            <h1>Contact with me</h1>
            <Container>
                <Row>
                    <Col className="col-md-6">
                        <p>Hope you find what you search for ,</p>
                        <p>So if you want to contact with me you could send an Email </p>
                        <Form className="myform">
                            <Input className="mail" type="email" name="email" id="exampleEmail" placeholder="Enter your Mail" />
                            <Input className="msg" type="textarea" name="text" id="exampleText" />
                            <Button className="btn">Send</Button>
                        </Form>
                    </Col>
                    <Col className="col-md-6">
                        <h3>And Here is my Social Networks</h3>
                        <div className="data">
                            <a href="https://www.facebook.com/" target="_blank" className="iconn"><FontAwesomeIcon icon={icons.faFacebook} /></a>
                            <a href="https://www.linkedin.com/feed/" target="_blank" className="iconn"><FontAwesomeIcon icon={icons.faLinkedinIn} /></a>
                            <a href="https://github.com/GhadaAboraya" target="_blank" className="iconn"><FontAwesomeIcon icon={icons.faGithub} /></a>
                            <a href="https://drive.google.com/drive/my-drive" target="_blank" className="iconn"><FontAwesomeIcon icon={icons.faGoogleDrive} /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Contact;
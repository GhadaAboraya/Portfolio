import React from 'react';
import '../Styles/HomeStyles/Home.css';
import About from '../HomeComponents/About';
import MyProjects from '../HomeComponents/MyProjects';
import Contact from '../HomeComponents/Contact';
import { Container , Row , Col, Button} from 'reactstrap';


const Home = () =>{
  return(
    <div className="home" id="Homee">
        <div className="header">
            <Container>
                <Row>
                    <Col className="col-md-6">
                         <div className="data">
                             <h1>Hello, I'm Ghada Mohamed</h1>
                             <p>I'm a UI/UX Developer , FrontEnd Developer 
                                 and i'm a fresh graduated from faculty of computers and Artificial Intelligence Cairo University,
                                  I'm seeking to know and learn more, to find a place where I can apply my knowledge, 
                                  work on real projects and gain more knowledge and experience on this Career</p>
                         </div>
                         <div className="info">
                             <a href="#Abo" className="test"><Button className="btn">More About Me</Button></a>
                         </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <About/>
        <MyProjects/>
        <Contact/>
    </div>
 );
}
export default Home;
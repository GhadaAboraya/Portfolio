import React from 'react';
import '../Styles/HomeStyles/About.css';
import { Container,Row,Col } from 'reactstrap';
import img from '../../Images/img.jpg';

const About =() => {
    return(
       <div className="aboutt" id="Abo">
           <Container>
               <Row>
                   <Col className="col-md-6" >
                        <h1>About Me </h1>
                         <p>I'm a UI/UX Developer , FrontEnd Developer 
                        and i'm a fresh graduated from faculty of computers and Artificial Intelligence Cairo University,
                        I'm seeking to know and learn more, to find a place where I can apply my knowledge, 
                        work on real projects and gain more knowledge and experience on this Career</p>
                        <h1>My Skills</h1>
                        <ul>
                            <li> Html,Html5</li>
                            <li> Css,Css3</li>
                            <li> Adobe XD</li>
                            <li> Java Script & (Es6)</li>
                            <li> JQuery</li>
                            <li> Responsive Design from scratch with media Queries</li>
                            <li> Sass</li>
                            <li> React Js</li>
                            <li> React Router</li>
                            <li> Fetch,Axios</li>
                            <li>  Git & Github</li>
                        </ul>
                   </Col>
                    <Col className="col-md-6">
                         <img src={img} className="img"/>
                    </Col>
               </Row>
           </Container>
       </div>
    );
}
export default About;
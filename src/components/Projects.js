import { Container, Row, Col, Nav, Tab } from "react-bootstrap";

import projImg1 from "../assets/img/projImg1.png"
import projImg2 from "../assets/img/projImg2.png"
import projImg3 from "../assets/img/projImg3.png"
import projImg4 from "../assets/img/projImg4.png"
import projImg5 from "../assets/img/projImg5.png"
import projImg6 from "../assets/img/projImg6.png"
import projImg7 from "../assets/img/projImg7.png"
import projImg8 from "../assets/img/projImg8.png"
import projImg9 from "../assets/img/projImg44.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

    const projects = [
    {
      title: "Piscinas Bahia",
      description: "Diseño y desarrollo",
      imgUrl: projImg1,
    },
    {
      title: "Mi Portafolio Personal",
      description: "Diseño y desarrollo",
      imgUrl: projImg9,
    },
    {
      title: "D'Licieuse Restaurant",
      description: "Diseño y desarrollo",
      imgUrl: projImg2,
    },
    {
      title: "Asona Yoga",
      description: "Diseño y desarrollo",
      imgUrl: projImg8,
    },
    {
      title: "Rick and Morty App",
      description: "Diseño, consumo de Api's y recolección de datos",
      imgUrl: projImg3,
    },
    {
      title: "The blog of Lena",
      description: "Desarrollo y diseño",
      imgUrl: projImg4,
    },
    {
      title: "Click Counter",
      description: "Diseño y desarrollo",
      imgUrl: projImg5,
    },
    {
      title: "Starbucks Home Page",
      description: "Animacion, diseño y desarrollo",
      imgUrl: projImg6,
    },
    {
      title: "Student testimonials",
      description: "App simple de testimonios",
      imgUrl: projImg7,
    },
  ];
  return (
  <section className="hidden">
    <section className="project" id="project">
        <Container>
          <Row>
            <Col size={12}>
              <TrackVisibility>
                {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                  <h2>Projectos</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">React</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Javascript</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Otros</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                      <Row>
                          <Col sm={6} md={4}>
                            <div className="proj-imgbx">
                            <a className="NoDecoration" href="https://piscinasbahia.vercel.app/" rel="noreferrer" >
                                <img src={projImg1}  alt = ""/>
                                <div className="proj-txtx">
                                <h4>Piscinas Bahia</h4>
                                <span>Diseño y desarrollo</span>
                                </div>
                              </a>    
                          </div>  
                          </Col>
                          <Col sm={6} md={4}>
                            <div className="proj-imgbx">
                              <a className="NoDecoration" href="https://portfolio-maximo.vercel.app/" rel="noreferrer" >
                                <img src={projImg9} alt = ""/>
                                <div className="proj-txtx">
                                <h4>Portafolio Personal</h4>
                                <span>Diseño y desarrollo</span>
                                </div>
                              </a>    
                          </div>  
                          </Col>
                        <Col sm={6} md={4}>
                          <div className="proj-imgbx">
                            <a className="NoDecoration" href="https://info-rick-and-mort-y.netlify.app//" rel="noreferrer" >
                                <img src={projImg3} alt = "" />
                                <div className="proj-txtx">
                                  <h4>Rick and Morty App</h4>
                                  <span>Diseño, consumo de Api's y recolección de datos</span>
                                </div>
                              </a> 
                          </div>  
                        </Col>
                      </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                      <Row>
                        <Col sm={6} md={4}>
                          <div className="proj-imgbx">
                            <a className="NoDecoration" href="https://dlicieuse.netlify.app/" rel="noreferrer" >  
                                <img src={projImg2} alt = "" />
                                <div className="proj-txtx">
                                  <h4>D'Licieuse Restaurant</h4>
                                  <span>Diseño y desarrollo</span>
                                </div>
                              </a>  
                          </div>  
                        </Col>
                        <Col sm={6} md={4}>
                          <div className="proj-imgbx">
                            <a className="NoDecoration" href="https://pagina-yoga.vercel.app/" rel="noreferrer" >  
                                <img src={projImg8}  alt = ""/>
                                <div className="proj-txtx">
                                  <h4>Asana Yoga</h4>
                                  <span>Diseño y desarrollo</span>
                                </div>
                              </a>  
                          </div>  
                        </Col>
                        <Col sm={6} md={4}>
                          <div className="proj-imgbx">
                              <a className="NoDecoration" href="https://the-blog-of-lena.netlify.app/" rel="noreferrer" >  
                              <img src={projImg4}  alt = ""/>
                              <div className="proj-txtx">
                                <h4>The blog of Lena</h4>
                                <span>Desarrollo y diseño</span>
                                </div>  
                              </a>  
                          </div>  
                          </Col>
                          <Col sm={6} md={4}>
                          <div className="proj-imgbx">
                              <a className="NoDecoration" href="https://starbucks-lobby.netlify.app/" rel="noreferrer" >
                                <img src={projImg6}  alt = ""/>
                                <div className="proj-txtx">
                                <h4>Starbucks Home Page</h4>
                                <span>Animacion, desarrollo y diseño</span>
                                </div>
                              </a>  
                          </div>  
                        </Col>
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Col sm={6} md={4}>
                          <div className="proj-imgbx">
                          <a className="NoDecoration" href="https://testimonios-students.netlify.app/" rel="noreferrer" > 
                            <img src={projImg7}  alt = ""/>
                            <div className="proj-txtx">
                              <h4>Student testimonials</h4>
                              <span>App simple de testimonios</span>
                              </div>
                            </a>
                          </div>  
                        </Col> 
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}
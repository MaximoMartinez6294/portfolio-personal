import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/moon.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Web Designer", "Front End Designer" ];
    const period = 2000;


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

    return(
        <section className="hidden">
         <section className="banner" id="home">
           <Container>
             <Row className="aling-items-center">
               <Col xs={12} md={6} xl={7}>
                 <TrackVisibility>
                  {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated " : ""}>
                     <span className="tagline">Bienvenido a mi portfolio!</span>
                     <h1>{"Hola, soy Maximo Martinez!    "}<span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'> {text} </span></h1>
                     <p> Soy un desarrollador web independiente de Argentina, Bahia Blanca. 
                     Actualmente me dedico al desarrollo y diseño de paginas web. Estoy en busca de un empleo el cual me permita dejar mi marca en la web y me haga crecer profesionalmente. </p>
                     <a className="button-a" href="#connect">
                      <button className="button-o" onClick={() => console.log("connect")}> Let's Connect <ArrowRightCircle size={20}/></button>
                    </a>                     
                  </div>
                  }
                </TrackVisibility>
              </Col>
              <Col xs={12} md={8} xl={5}>
                <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img className="fotito" src={headerImg} alt="fotito"/>
                  </div>}
              </TrackVisibility>
              </Col>
            </Row>
          </Container>
        </section>
      </section>  
    )
}
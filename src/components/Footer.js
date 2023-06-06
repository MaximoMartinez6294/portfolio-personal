import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailChimpForm.js"
import logo from "../assets/img/maximologo1.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.png"

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/maximo-martinez-b99a78261/" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a href="mailto:maximo-martinez@hotmail.es" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/maximomartinezz/" rel="noreferrer"><img src={navIcon3} alt="Icon" /></a>
              <a href='https://github.com/MaximoMartinez6294'rel="noreferrer"><img src={navIcon4} alt="" /></a>
            </div>
            <p>Copyright 2023 Maximo Martinez. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
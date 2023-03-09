import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/img/maximologo1.png"
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.png"
import navIcon3 from "../assets/img/nav-icon3.svg"
import navIcon4 from "../assets/img/nav-icon4.png"


export const NavBar = () => {
    const [activeLink, setActiveLink]= useState("home");
    const [scrolled, seScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    
  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === "project" ? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("projects")}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a href='https://www.linkedin.com/in/maximo-martinez-b99a78261/' target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="mailto:maximomartinez6294@gmail.com" target="_blank"><img src={navIcon2} alt="" /></a>
                <a href='https://www.instagram.com/maximomartinezz/' target="_blank"><img src={navIcon3} alt="" /></a>
                <a href='https://github.com/MaximoMartinez6294' target="_blank"><img src={navIcon4} alt="" /></a>
            </div>
            <a href='#connect'>
              <button  className='vvd' onClick={() => console.log("connect")}>
                <span>Let's Connect</span>
              </button>
            </a>   
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

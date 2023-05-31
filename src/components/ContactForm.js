import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import {Toaster, toast} from "react-hot-toast"

export default function ContactForm (){

    const notify = () => toast.success('Mail enviado');

    const [datos, setDatos] =useState({
        name: "",
        user_email: "",
        message: ""
    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value,
        })
        
    }

    const ref = useRef();
    
    const [success, setSuccess] = useState(null);


    function sendEmail(e){
        e.preventDefault();
        emailjs.sendForm("service_ej73mfm","template_1vsnuz8",e.target,"aoEGWnZymwAvyATH7")
        .then(
            (result) => {
              console.log(result.text);
              setSuccess(true);
            },
            (error) => {
              console.log(error.text);
              setSuccess(false);
            }
          );
    }


    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <form ref={ref} onSubmit={sendEmail}>
                            <Row>
                                <Col 
                                sm={6} className="px-1">
                                    <input 
                                    type="text" 
                                    name="name"
                                    placeholder="Nombre"
                                    onChange={handleInputChange}
                                    required
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="text" 
                                    name="lastname"
                                    placeholder="Apellido" 
                                    onChange={handleInputChange}
                                    required
                                    />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="email" 
                                    name="user_email"
                                    placeholder="Email" 
                                    onChange={handleInputChange}/>
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="Numero de telefono" 
                                    onChange={handleInputChange}/>
                                </Col>
                                <Col>
                                    <textarea row="6"
                                    type="text"
                                    name="message"
                                    placeholder="Mensaje"
                                    onChange={handleInputChange}>
  
                                    </textarea>
                                    <button 
                                    className="glow-on-hoverC'"
                                    onClick= {notify}
                                    type="submit"
                                    >
                                    Enviar Mail
                                    </button>
                                    
                                    {success &&
                                    "Your message has been sent. We'll get back to you soon :)"}
                                </Col>
                            </Row>
                        </form>
                        <Toaster
                         position="top-center"
                         />
                    </Col>
                </Row>
            </Container>       
        </section>
    )
}

export const amount = 500
export const firstName = "Sharooq"
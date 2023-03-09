import { Col } from "react-bootstrap"
import projImg1 from "../assets/img/projImg1.png"
import projImg5 from "../assets/img/projImg5.png"

export const ProjectCard2 = ({title, description, imgUrl}) =>{
  return(
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={projImg1} />
        <div className="proj-txtx">
          <h4>Piscinas Bahia</h4>
          <span>Diseño y desarrollo</span>
        </div>  
      </div>  
    </Col>
  )
}
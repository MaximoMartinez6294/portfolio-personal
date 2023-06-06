import "./botonwpStyle.css";
import ImgWp from "../assets/img/whatsapp.png"


export default function BotonWp (){
    return(
        <div>
            <a href="https://wa.me/5492914372061?text=Hola%20Maximo%20,%20vi%20tu%20pagina%20web%20y%20me%20gustaría%20comunicarme%20con%20usted." className="btn-wsp" target="_blank">
                <img className="botonwp" src={ImgWp} />
            </a>
        </div>    
    );
}

export const amountt = 500
export const secondName = "Sharooq"
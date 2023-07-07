import "./NavPedidos.css";
import {Link} from "react-router-dom"

export default function NavPedidos(){
         return(
            <nav>
                <h1>Estanislao Resto-Bar</h1>
                <ul>
                    <li className="nav"><Link to="./VerPedidos">HOME</Link></li>
                    <li className="nav"><Link to="../CargarMenu">CARGAR NUEVO MENU</Link></li>
                    <li className="nav"><Link to="../CambiarPrecio">CAMBIAR PRECIOS MENU</Link></li>
                    <li className="nav"><Link to="./">SALIR</Link></li>
                </ul>
            </nav>
         )
}
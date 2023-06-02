import "./NavPedidos.css";
//import {Link} from "react-router-dom"

export default function NavPedidos(){
         return(
            <nav>
                <h1>Estanislao Resto-Bar</h1>
                <ul>
                    <li className="nav"><a href="./VerPedidos">HOME</a></li>
                    <li className="nav"><a href="./CargarMenu">CARGAR NUEVO MENU</a></li>
                    <li className="nav"><a href="./CambiarPrecio">CAMBIAR PRECIOS MENU</a></li>
                    <li className="nav"><a href="./">SALIR</a></li>
                </ul>
            </nav>
         )
}
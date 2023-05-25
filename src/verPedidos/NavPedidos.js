import "./NavPedidos.css";

export default function NavPedidos(){
         return(
            <nav>
                <h1>Estanislao Resto-Bar</h1>
                <ul>
                    <li><a href="./VerPedidos">HOME</a></li>
                    <li><a href="./CargarMenu">CARGAR NUEVO MENU</a></li>
                    <li><a href="./">SALIR</a></li>
                </ul>
            </nav>
         )
}

import "./Home.css"
import BotonIng from "./Boton"
export default function Home(){
    return(
        <header className="body">
            <form>
                <legend>"Bienvenido a Estanislao"</legend>
                <label>Ingrese Nombre de Usuario</label>
                <input></input>
                <label>Ingrese su contraseña</label>
                <input></input>
                <BotonIng dato="INGRESAR" infoPath="./VerPedidos"/>
            </form>
        </header>
        
    )
}
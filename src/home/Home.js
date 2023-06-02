
import "./Home.css"
import BotonIng from "./Boton"
export default function Home(){
    return(
        <header className="body">
            <form action="https://api-estanislao.onrender.com/ingresoApp"  method="POST">
                <legend>"Bienvenido a Estanislao"</legend>
                <label htmlFor="usuario">Ingrese Nombre de Usuario</label>
                <input type="texto" id="usuario" name="usuario" ></input>
                <label htmlFor="contraseña">Ingrese su contraseña</label>
                <input type="password" id="contraseña" name="contraseña" ></input>
                <BotonIng dato="INGRESAR" infoPath="./VerPedidos"/>
            </form>
        </header>
        
    )
}
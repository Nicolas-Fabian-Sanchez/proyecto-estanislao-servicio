import NavPedidos from "../verPedidos/NavPedidos";
import BotonIng from "../home/Boton";
import "./CambiarMenu.css";



export default function CambiarPrecio(){
    

    return( 
        <header>
            <NavPedidos/>
            <>
              <form className="formulario">
                    <legend>INGRESE MENU A CAMBIAR AQUI:</legend>
                    <input className="input" placeholder="Ingrese nombre del menu"></input><BotonIng dato="Buscar Menu"/>
              </form>
            </>
    

        </header>
    )      
}
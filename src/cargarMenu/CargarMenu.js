import  NavPedidos from "../verPedidos/NavPedidos";
import BotonIng from "../home/Boton"
import "./fomulario.css"
import { useState } from "react";
import { Link } from "react-router-dom";

export default function CargarMenu(){
  console.log("me hiccieron clik")
  const [mensajeOculto,setMensajeOculto]=useState(true);
 
  const cargarMenu=async (event)=>{
    console.log("estoy conectado")
    event.preventDefault();
    const form=JSON.stringify({
        "tipo":event.target[0].value,
        "variedad":event.target[1].value,
        "precio":event.target[2].value
         })
    console.log(form)
    /*const form=JSON.stringify(new FormData(event.target))*/
    const response= await fetch("https://api-estanislao.onrender.com/cargarMenu",{
        method:'POST',
        body:form,
        headers:{
            'Content-Type': 'application/json',
            }
    })
    if (response.ok){
        setMensajeOculto(false);
    }
}
     return(
        <header>
             <NavPedidos/>
             <>
             { mensajeOculto == true ?
              <form  className="formulario" onSubmit={(event)=>{cargarMenu(event)}} >
                  <legend>INGRESE NUEVO MENU AQUI:</legend>
                  <label htmlFor="tipo">Tipo :</label>
                  <input type="texto" id="tipo" name="tipo"></input>
                  <label htmlFor="variedad">Variedad :</label>
                  <input type="texto" id="variedad" name="variedad" ></input>
                  <label htmlFor="precio">Precio :</label>
                  <input type="texto" id="precio" name="precio"></input>
                  {/*<BotonIng dato="Carga Menu" infoPath="/CargarMenu"/>*/}
                  <input type="submit" value="CARGAR" className="boton"/>
              </form>:
              <div className="formulario">
                <Link to="/CargarMenu" className="button" id="botonMensaje"onClick={()=> setMensajeOculto(true)}>
                <strong>Menu Cargado con EXITO!!!</strong>
                </Link>
              </div>
              }
             </>
        </header>
      )

}
import  NavPedidos from "../verPedidos/NavPedidos";
import BotonIng from "../home/Boton"
import "./fomulario.css"
import { useState } from "react";

export default function CargarMenu(){
  const [mensajeOculto,setMensajeOculto]=useState(true);
  const cargarMenu=async (event)=>{
    event.preventDefault();
    const form=JSON.stringify({
        "tipo":event.target[0].value,
        "variedad":event.target[1].value,
        "precio":event.target[2].value
         })
   
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
              <form  className="formulario" onSubmit={(event)=>{cargarMenu(event)}} method="POST">
                  <legend>INGRESE NUEVO MENU AQUI:</legend>
                  <label htmlFor="tipo">Tipo :</label>
                  <input type="texto" id="tipo" name="tipo"></input>
                  <label htmlFor="variedad">Variedad :</label>
                  <input type="texto" id="variedad" name="variedad" ></input>
                  <label htmlFor="precio">Precio :</label>
                  <input type="texto" id="precio" name="precio"></input>
                  <BotonIng dato="Carga Menu"/>
              </form>:
              <div className="formulario">
                <button type="button" className="button" id="botonMensaje"onClick={()=> setMensajeOculto(true)}>
                <strong>Menu Cargado con EXITO!!!</strong>
                </button>
              </div>
              }
             </>
        </header>
      )

}
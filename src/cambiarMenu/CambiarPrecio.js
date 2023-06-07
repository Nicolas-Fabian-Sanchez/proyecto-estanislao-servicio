import { useState } from "react";
import NavPedidos from "../verPedidos/NavPedidos";
import BotonIng from "../home/Boton";
import "./CambiarMenu.css";



export default function CambiarPrecio(){
    const [mensajeOculto,setMensajeOculto]=useState(true);
    let [datos,setDatos] = useState();

    const llamarInfo=async(event)=>{
        event.preventDefault();
        console.log(event.target.value)
        let plato= event.target.value
        await fetch(`https://api-estanislao.onrender.com/buscarMenu/${plato}}`)
          .then((res)=>res.json())
          .then((dato)=>setDatos(dato))
          .catch((error)=>document.write(`se produjo un error ${error}`))
          console.log(datos)
          return setMensajeOculto(false)
    }
    const cambiarInfo=async(event)=>{
        event.preventDefault();
        let formData = new FormData(event.target);
        await fetch ("https://api-estanislao.onrender.com/cambiarPrecio",{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json'
            },
            body:formData
        })
        if(Response.ok){
            return setMensajeOculto(true)
        }
    }


   return( 
        <header>
            <NavPedidos/>
            <>
            { mensajeOculto == true ?
              <form className="formulario" onSubmit={(event)=>{llamarInfo(event)}} method="GET">
                    <label htmlFor="filtro">INGRESE MENU A CAMBIAR AQUI:</label>
                    <input className="input" placeholder="Ingrese nombre del menu" type="text" id="filtro"name="filtro">
                    </input>
                    <BotonIng dato="Buscar Menu"/>
              </form>:
              <form  className="formulario"  onSubmit={(event)=>{cambiarInfo(event)}} >
                  <legend>INGRESE LOS CAMBIOS DESEADOS:</legend>
                  <label htmlFor="tipo">Tipo :</label>
                  <input type="texto" id="tipo" name="tipo" value={datos.tipo}></input>
                  <label htmlFor="variedad">Variedad :</label>
                  <input type="texto" id="variedad" name="variedad" value={datos.variedad}></input>
                  <label htmlFor="precio">Precio :</label>
                  <input type="texto" id="precio" name="precio" value={datos.precio}></input>
                  <BotonIng dato="Cambiar" /*onClick={()=> setMensajeOculto(true)}*//>
              </form>
             }
            </>
            

        </header>
    )      
}
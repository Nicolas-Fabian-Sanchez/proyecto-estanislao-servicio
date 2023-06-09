import { useState } from "react"
import Pedido from "./SeccionPedidos"
import "./Tarjetas.css"
//import {Link} from "react-router-dom"

export default function Tarjetas({info}){
          let[eliminado,seteliminado]=useState(false)

          const eliminarMesa=async(info)=>{
            await fetch("https://api-estanislao.onrender.com/eliminarMesa",{
                 method:"DELETE",
                 headers:{
                  'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({ "mesa": info })
            })
            .then(respuesta => respuesta.json())
            .then(data => console.log(data))
            //.then(data=>seteliminado(true))
            .catch(error => console.log("HAY UN ERROR!!" +error))
            return seteliminado(true)
          }
          let llave = "ahgyt"
          let suma = 0
          
          return(
               <>
                <div className="contenedor">
                    <div className="tarjeta">
                         <h3>MESA {info.mesa}</h3>
                         <h4 className="pedido">PEDIDO:</h4>
                         <div className="conteiner">
                              <div>
                                   {info.pedido.map((info)=>{
                                        llave += "A1"
                                        return<Pedido key={llave} data={info}/>
                                   })}
                              </div>
                              <div>
                                   {info.totalPagar.map((informacion)=>{
                                         suma += parseInt(informacion)
                                         return <ul>
                                             <li className="precio"> $ {informacion}</li>
                                        </ul>
                                   })}
                              </div>
                         </div>
                         
                         <h4>Total a Pagar:   <span className="pagar"> ${suma}</span></h4> 
                         <button className="botonTarjeta" onClick={()=>eliminarMesa(info.mesa)}>Cerrar Mesa</button>
                         
                    </div>
                    {eliminado === false ? "":
                    <div>
                    <button type="button" id="eliminar"><a href="/VerPedidos" className="colorA">
                    <strong>La mesa {info.mesa} se ha cerrado con exito!!!</strong></a>
                    </button>
                    
                    </div>
                    }
                </div>
                </>
          )
          
}
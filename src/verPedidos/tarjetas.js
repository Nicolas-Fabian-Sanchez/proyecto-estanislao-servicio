import Pedido from "./SeccionPedidos"
import "./Tarjetas.css"


export default function Tarjetas({info}){
          

          const eliminarMesa=async()=>{
            await fetch("https://api-estanislao.onrender.com/eliminarMesa",{
                 method:"DELETE",
                 headers:{
                  'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({ "titulo": info.mesa })
            })
            .then(respuesta => respuesta.json())
            .then(data => console.log(data))
            .catch(error => console.log("HAY UN ERROR!!" +error))
          }
         
          let suma = 0
          return(
                <div className="tarjeta">
                     <h3>MESA {info.mesa}</h3>
                     <h4 className="pedido">PEDIDO:</h4>
                     <div className="conteiner">
                         <div>
                              {info.pedido.map((info)=>{
                              return<Pedido key={info} data={info}/>
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
                     <button className="botonTarjeta" onClick={()=>eliminarMesa()}>Cerrar Mesa</button>
                </div>
          )
          
}
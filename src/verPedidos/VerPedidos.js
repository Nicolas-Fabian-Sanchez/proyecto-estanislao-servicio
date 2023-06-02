import {useEffect,useState} from "react";
import "./VerPedidos.css";
import  NavPedidos from "./NavPedidos.js"
import Tarjetas from "./tarjetas";

export default function VerPedidos(){

       let [datos,setDatos] = useState([]);

       const traerInfo=async()=>{
             await fetch("https://api-estanislao.onrender.com/traerPedido")
             .then((res)=>res.json())
             .then((dato)=>setDatos(dato))
             .catch((error)=>document.write(`se produjo un error ${error}`))
             console.log(datos)
       }
       useEffect(()=>{
        traerInfo();

       },[])
       return(
        <>
         <NavPedidos/>
         <header className="centrado" >
             <h1>Mesas Ocupadas</h1>
             <div className="mesas">
                {datos.map((dato)=>{
                  return <Tarjetas key={datos} info={dato}/>
                  })}
              </div>
         </header>
        </>
       
       )
}
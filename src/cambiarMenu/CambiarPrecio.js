import { useState} from "react";
import NavPedidos from "../verPedidos/NavPedidos";
import "./CambiarMenu.css";
import swal from 'sweetalert';
import { redirect, useNavigate} from "react-router-dom";

export default function CambiarPrecio(){
    const [mensajeOculto,setMensajeOculto]=useState(true);
    let [datos,setDatos] = useState();
    let err=""
    /*const[form,setForm]=useState({//para actualizar los datos del formulario
        tipo:'',
        variedad:'',
        precio:''
    });*/
    const llamarInfo=async(event)=>{
        event.preventDefault();
        console.log(event.target[0].value)
        let plato=event.target[0].value 
        let response =await fetch(`https://api-estanislao.onrender.com/buscarMenu/${plato}`)
          .then((res)=>res.json())
          .then((dato)=>setDatos(dato))
          .catch((error)=>err=error)
          //console.log(datos)
        if(response == err){
            return swal("Error","el plato no esta registrado","error"),setMensajeOculto(true)
        }else{
            setMensajeOculto(false)
        }
    }
    
    //para poder actualizar el formulario realizo esta funcion atra vez del evento onChange
    /*const handleChange= (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    };
    document.write(`se produjo un error ${error}`)*/
    
    const cambiarInfo=async(event)=>{
        event.preventDefault();
        //let apiToken=localStorage.getItem("clave")
        const formData=JSON.stringify({
            "tipo":event.target[0].value,
            "variedad":event.target[1].value,
            "precio":event.target[2].value
             })
        //console.log(formData)
        const res=await fetch ("https://api-estanislao.onrender.com/cambiarPrecio",{
            method:"PUT",
            headers:{
                'Content-Type': 'application/json',
                //"Authorization": `Bearer ${apiToken}`
            },
            body:formData
        })
        if(res.ok){
            return setMensajeOculto(true),
            swal("Bien Hecho","El Precio Fue Actualizado con EXITO","success")
        }else{
            return  swal("Error","a surgido un error , pruebe mas tarde","error"),
            setMensajeOculto(true)
        }
    }
    return( 
        <header>
            <NavPedidos/>
            <>
            { mensajeOculto == true ?
              <form className="formulario" onSubmit={(event)=>{llamarInfo(event)}} method="GET">
                    <label htmlFor="filtro" className="subtitulo">INGRESE MENU A CAMBIAR AQUI:</label>
                    <input className="input" placeholder="Ingrese nombre del menu" type="text" id="filtro"name="filtro">
                    </input>
                    <input type="submit" value="BUSCAR"  className="boton"/>
                    
              </form>:
              <form  className="formulario"  onSubmit={(event)=>{cambiarInfo(event)}} >
                  <legend>INGRESE EL PRECIO ACTUALIZADO DEL PLATO:</legend>
                  <label htmlFor="tipo">Tipo :</label>
                  <input type="texto" id="tipo" name="tipo" value={datos.tipo} readOnly></input>
                  <label htmlFor="variedad">Variedad :</label>
                  <input type="texto" id="variedad" name="variedad" value={datos.variedad} readOnly></input>
                  <label htmlFor="precio">Precio :</label>
                  <input type="texto" id="precio" name="precio" defaultValue={datos.precio}></input>
                  <input type="submit" value="CAMBIAR"  className="boton"/>
                
              </form>
             }
            </>
        </header>
    )      
}
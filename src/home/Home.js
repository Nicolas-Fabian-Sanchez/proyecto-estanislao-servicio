
import swal from "sweetalert";
import "./Home.css"
import {  redirect } from "react-router-dom";

//import BotonIng from "./Boton"
export default function Home(){

    const ingresarUsu=async(event)=>{
        event.preventDefault();
        const form=JSON.stringify({
            "nombre":event.target[0].value,
            "contrasenia":event.target[1].value
        })
        const response= await fetch("https://api-estanislao.onrender.com/ingresoApp",{
            method:"POST",
            body:form,
            headers:{
                'Content-Type': 'application/json',
            }
            
        })
        console.log(form)
        if (response.ok){
            return redirect("/VerPedidos")
        }else{
            return swal ("Incorrecto","Usuario o Contraseña incorrectas","error")
        }
    }


    return(
        <header className="body">
            <form onSubmit={(event)=>{ingresarUsu(event)}}>
                <legend>"Bienvenido a Estanislao"</legend>
                <label htmlFor="usuario">Ingrese Nombre de Usuario</label>
                <input type="texto" id="usuario" name="usuario" ></input>
                <label htmlFor="contrasenia">Ingrese su contraseña</label>
                <input type="password" id="contrasenia" name="contrasenia" ></input>
                <input type="submit" value="Ingresar" className="button" />
                {/*<BotonIng dato="INGRESAR" infoPath="./VerPedidos"/>*/}
            </form>
        </header>
        
    )
}
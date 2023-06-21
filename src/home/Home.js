
import swal from "sweetalert";
import "./Home.css"
import { useNavigate} from "react-router-dom";


export default function Home(){
    const navigation=useNavigate();
    let res=""
    let error=""

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
        .then((response)=>response.json())
        .then((response)=>res=response)
        .catch((err)=>error=err)
        
        if (res == error){
            return swal ("Error en la conexcion","Intente mas Tarde","error")
        }else if (res == "usuario no registrado"){
            return swal ("usuario no registrado","usuario o contraseña invalida ","error")
        }else if (res == "usuario registrado"){
            return navigation("/VerPedido");
        }else{
            //localStorage.setItem("clave",res)
            return navigation("/VerPedidos")
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
            </form>
        </header>
    )
}
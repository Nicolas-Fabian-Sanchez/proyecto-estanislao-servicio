import  NavPedidos from "../verPedidos/NavPedidos";
import BotonIng from "../home/Boton"
import "./fomulario.css"

export default function CargarMenu(){

  const cargarMenu=async (event)=>{
    event.preventDefault();
    const form=JSON.stringify({
        "tipo":event.target[0].value,
        "variedad":event.target[1].value,
        "precio":event.target[2].value
         })
   
    const response= await fetch("http://localhost:4001/cargarMenu",{
        method:'POST',
        body:form,
        headers:{
            'Content-Type': 'application/json',
            
        }
    })
  
}
     return(
        <header>
             <NavPedidos/>
             <>
              <form  className="formulario" onSubmit={(event)=>{cargarMenu(event)}} method="POST">
                  <legend>INGRESE NUEVO MENU AQUI:</legend>
                  <label>Tipo :</label>
                  <input></input>
                  <label>Variedad :</label>
                  <input></input>
                  <label>Precio :</label>
                  <input></input>
                  <BotonIng dato="Carga Menu"/>
              </form>
             </>
        </header>
      )

}
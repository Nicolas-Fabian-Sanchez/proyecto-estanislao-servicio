import NavPedidos from "../verPedidos/NavPedidos";
import BotonIng from "../home/Boton";
import "./CambiarMenu.css";



export default function CambiarPrecio(){
    //const [mensajeOculto,setMensajeOculto]=useState(true);
    /*let [datos,setDatos] = useState([]);

    const traerInfo=async()=>{
          await fetch("https://api-estanislao.onrender.com/buscarMenu/${variedad}")
          .then((res)=>res.json())
          .then((dato)=>setDatos(dato))
          .catch((error)=>document.write(`se produjo un error ${error}`))
          console.log(datos)
    }
    useEffect(()=>{
     traerInfo();

    },[])
    
    */
    
    return( 
        <header>
            <NavPedidos/>
            <>
            {/*{ mensajeOculto == true ?*/}
              <form className="formulario">
                    <legend>INGRESE MENU A CAMBIAR AQUI:</legend>
                    <input className="input" placeholder="Ingrese nombre del menu"></input><BotonIng dato="Buscar Menu"/*onClick={()=> setMensajeOculto(false)}*//>
              </form>
              <form  className="formulario"  method="PUT" /*onSubmit={(event)=>{CambiarMenu(event)}}*/>
                  <legend>INGRESE LOS CAMBIOS DESEADOS:</legend>
                  <label htmlFor="tipo">Tipo :</label>
                  <input type="texto" id="tipo" name="tipo"></input>
                  <label htmlFor="variedad">Variedad :</label>
                  <input type="texto" id="variedad" name="variedad" ></input>
                  <label htmlFor="precio">Precio :</label>
                  <input type="texto" id="precio" name="precio"></input>
                  <BotonIng dato="Cambiar" /*onClick={()=> setMensajeOculto(true)}*//>
              </form>
            
            </>
            

        </header>
    )      
}
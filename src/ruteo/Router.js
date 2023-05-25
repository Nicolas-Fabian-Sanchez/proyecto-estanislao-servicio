import {BrowserRouter,Routes,Route} from "react-router-dom";
import VerPedidos from "../verPedidos/VerPedidos";
import CargarMenu from "../cargarMenu/CargarMenu";
import Home from "../home/Home";

export default function RouterComponent(){
    return(
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/VerPedidos" element={<VerPedidos/>}/>
                <Route  path="/CargarMenu" element={<CargarMenu/>}/>
            </Routes>
        </BrowserRouter>
    )
}
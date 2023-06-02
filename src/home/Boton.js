import {Link} from "react-router-dom";
import "./Home.css"

export default function BotonIng ({dato,infoPath}){
    return(
        <Link  type="submit" className="button" to={infoPath}>{dato}</Link>
    )
}
import {Link} from "react-router-dom";
import "./Home.css"

export default function BotonIng ({dato,infoPath}){
    return(
        <Link className="button" type="submit">{dato}</Link>
    )
}
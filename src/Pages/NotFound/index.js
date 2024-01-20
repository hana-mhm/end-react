

import { Style } from "./style";
import { Link } from "react-router-dom";

export default function NotFound(){
    return(

    <Style >
   <div className="container">
    
    <h1 className="found">404 page</h1>
    <Link to="/">go to home.!</Link>
    </div>

 
</Style>

    );
}
import React, {FC} from "react";
import PizzaF from "../features/PIzzaF";
import { Link } from "react-router-dom";


const PizzaPage: FC = ()=>{
    return(
        <>
            <PizzaF/>
            <Link to='/'>На главную</Link>
        </>
        
    )
}

export default PizzaPage
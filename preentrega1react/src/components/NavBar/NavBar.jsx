import React from "react"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"


const NavBar = () => {

    return(

        <>

           
            <h1>Alquimia Pastelería</h1>

            <ul>
                <li>
                    <a>Inicio</a>
                </li>
                <li>
                <a>Catering</a>
                </li>
                <li><a>Contacto</a></li>
                <li>
                <a>Nosotros</a>
                </li>
                
                
            </ul>

            
            <CartWidget/>
        </>

    )
}

export default NavBar
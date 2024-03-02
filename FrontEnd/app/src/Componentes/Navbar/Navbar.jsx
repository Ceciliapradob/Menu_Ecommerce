import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import cardIcon from '../assets/cart_icon.png';
import './Navbar.css'; 



const Navbar = () => {
    const [menu, setMenu] = useState()
    return (
        <>
            <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="" />
                <p>TIENDA</p>
            </div>

            <li className="nav-menu">
                <li onClick={()=>{setMenu('Tienda')}}>Tienda{menu === "Tienda"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu('Hombres')}}>Hombre{menu === "Hombres"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu('Mujeres')}}>Mujer{menu === "Mujeres"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu('Niños')}} >Niños{menu === "Niños"? <hr/>:<></>}</li>
            </li>
            <div className="nav-login">
                <button>Ingresar</button>
                <img src={cardIcon} alt="" />
                <div className="nav-cuenta">0</div>
            </div>

            </div></>
    )
}

export { Navbar }
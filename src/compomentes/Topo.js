import React from "react";
import { Link } from "react-router-dom";

export  default function Topo (){
    return (
        <header>
            <div>
            <img src="assets/img/logo.png" alt="ola"/>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Sabores">Sabores</Link>
                <Link to="/Sobre">Sobre</Link>
            </nav>
            </div>
        </header>
    )
}
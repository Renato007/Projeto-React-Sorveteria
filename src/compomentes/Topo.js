import "./Topo.css"
import React from "react";
import { Link } from "react-router-dom";

export  default function Topo (){
    return (
        <header>
            <div className="limitar-secao">
            <img src="assets/img/logo.png" alt="ola"/>
            <nav>
                <Link to="/"  className="link-topo">Home</Link>
                <Link to="/Sabores" className="link-topo">Sabores</Link>
                <Link to="/Sobre" className="link-topo">Sobre</Link>
            </nav>
            </div>
        </header>
    )
}


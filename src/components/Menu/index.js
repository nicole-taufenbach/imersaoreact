import React from 'react';
import logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from './Button'
// import ButtonLink from './components/ButtonLink/Index';

function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
            <img className="Logo" src={logo} alt="NintendoFlix Logo" />
            </a>

        <Button as="a" className="ButtonLink" href="/">
            Novo Vídeo
        </Button>

        </nav>
    );
}

export default Menu;
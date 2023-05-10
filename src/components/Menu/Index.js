import React from 'react';
import style from './Menu.modelo.css';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <>
            <div className={style.menu}>
                <div class="header">
                <Link to ="/">
                    <div class="logo">
                     H
                    </div>
                </Link>
                    <header>
                     
                            <nav>
                                <div class="cabecalho-link">
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/servico">Servico</Link></li>
                                    <li><Link to="/sobre">Sobre</Link></li>
                                    <li><Link to="/contato">Contato</Link></li>
                                </div>
                            </nav>
                    </header>
                </div>
            </div>
        </>
    )
}
export default Menu;
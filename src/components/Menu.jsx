import React from 'react';
import "./Menu.css";

// import { Container } from './styles';

function Menu() {
  return(
    <>
        <nav className="Menu">
            <ul>
                <li>Início</li>
                <li>Orçamentos</li>
                <li>
                    Consultas▼
                    <ul className="DropdownMenu">
                        <li>Orçamentos</li>
                        <li>Clientes</li>
                        <li>Produtos</li>
                        <li>Categorias de produtos</li>                       
                        <li>Fornecedores</li>
                    </ul>

                </li>
                <li>
                    Cadastros▼
                    <ul className="DropdownMenu">
                        <li>Orçamentos</li>
                        <li>Clientes</li>
                        <li>Produtos</li>
                        <li>Categorias de produtos</li>      
                    </ul>
                </li>
                <li>Ajuda</li>
            </ul>
        </nav>
    </>
  )  
}

export default Menu;
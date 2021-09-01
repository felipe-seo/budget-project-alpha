import React from 'react';
import "./Menu.css";
import { Link} from "react-router-dom";

// import { Container } from './styles';

function Menu() {
  return(
    <>
        <nav className="Menu">
            <ul>
                <li><Link to="/panel">Início</Link></li>
                <li>Orçamentos</li>
                <li className="Consultas">
                    Consultas▼
                    <ul className="DropdownMenu" >
                        <Link><li>Orçamentos</li></Link>
                        <Link><li>Clientes</li></Link>
                        <Link><li>Produtos</li></Link>
                        <Link><li>Categorias de produtos</li></Link>                  
                        <Link><li>Fornecedores</li></Link>
                    </ul>

                </li>
                <li className="Cadastros">
                    Cadastros▼
                    <ul className="DropdownMenu">
                        <Link to="/register-budgets"><li>Orçamentos</li></Link>
                        <Link to="/register-clients"><li>Clientes</li></Link>
                        <Link to="/register-products"><li>Produtos</li></Link>
                        <Link to="/register-categories"><li>Categorias de produtos</li></Link>    
                        <Link to="/register-suppliers"><li>Fornecedor</li></Link>
                    </ul>
                </li>
                <li>Minha Conta </li>
            </ul>
        </nav>
    </>
  )  
}

export default Menu;
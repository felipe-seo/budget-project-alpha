import React from 'react';
import "./Panel.css";
import PanelLogo from '../components/PanelLogo';
import Menu from '../components/Menu';
import RegisterClientes from '../components/RegisterClients';



// import { Container } from './styles';

function Suppliers() {
  return (
  <>
    <PanelLogo/>        
    <Menu/>
    
    <RegisterClientes/>

  </>
  );
}

export default Suppliers;
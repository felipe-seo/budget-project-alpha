import React from 'react';
import "./Panel.css";
import PanelLogo from '../components/PanelLogo';
import Menu from '../components/Menu';
import RegisterClients from '../components/RegisterSuppliers';



// import { Container } from './styles';

function Clients() {
  return (
  <>
    <PanelLogo/>        
    <Menu/>
    <RegisterClients/>

  </>
  );
}

export default Clients;
import React from 'react';
import "./Panel.css";
import PanelLogo from '../components/PanelLogo';
import Menu from '../components/Menu';
import RegisterSuppliers from '../components/RegisterSuppliers';



// import { Container } from './styles';

function Suppliers() {
  return (
  <>
    <PanelLogo/>        
    <Menu/>
    
    <RegisterSuppliers/>

  </>
  );
}

export default Suppliers;
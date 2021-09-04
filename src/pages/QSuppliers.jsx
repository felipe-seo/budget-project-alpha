import React from 'react';
import "./Panel.css";
import PanelLogo from '../components/PanelLogo';
import Menu from '../components/Menu';
import {QuerySuppliers} from '../components/QuerySuppliers';



// import { Container } from './styles';

function QSuppliers() {
  return (
  <>
    <PanelLogo/>        
    <Menu/>
    <QuerySuppliers/>

  </>
  );
}

export default QSuppliers;
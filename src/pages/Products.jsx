import React from 'react';
import "./Panel.css";
import PanelLogo from '../components/PanelLogo';
import Menu from '../components/Menu';
import RegisterProducts from '../components/RegisterProducts';



// import { Container } from './styles';

function Clients() {
  return (
  <>
    <PanelLogo/>        
    <Menu/>
    <RegisterProducts/>

  </>
  );
}

export default Clients;
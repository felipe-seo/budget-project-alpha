import React from 'react';
import "./Panel.css";
import PanelLogo from '../components/PanelLogo';
import Menu from '../components/Menu';
import Home from '../components/Home';


function Panel() {
  return (
    <>
        <PanelLogo/>        
        <Menu/>
        <Home/>
    </>
  );
}

export default Panel;
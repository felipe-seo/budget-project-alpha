import React from 'react'
import logo from "../assets/images/logo.svg";
import "./PanelLogo.css";

// import { Container } from './styles';

function PanelLogo() {
  return (
    <img src={logo} alt="Our Logo" className="LogoPanel"/>
  );
}

export default PanelLogo;
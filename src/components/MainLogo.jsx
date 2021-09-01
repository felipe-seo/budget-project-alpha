import React from 'react'
import logo from "../assets/images/logo.svg";
import './MainLogo.css';
// import { Container } from './styles';

function MainLogo() {
  return (
    <img src={logo} alt="Our Logo" className="Logo"/>
  );
}

export default MainLogo;
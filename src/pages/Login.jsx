import React from 'react';
import "./Login.css";
import MainLogo from '../components/MainLogo';
import  {SuccessButton, PinkButton}  from "../components/Buttons"

// import { Container } from './styles';

function Login() {
  return (
      <>
        <MainLogo/>
        <div id="CardHome">
          <SuccessButton nameButton="Usuários" route="user-login" />
          <PinkButton />
        </div>
      </>
  );
}

export default Login;
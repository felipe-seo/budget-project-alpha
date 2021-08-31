import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import MainLogo from '../components/MainLogo';
import  { TitleLogin }  from "../components/Titles"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SuccessButton } from "../components/Buttons";

// import { Container } from './styles';

function LoginUser() {
  return (
      <>
        <MainLogo />
        <div id="CardHome">
            <TitleLogin nameTitle="Login de Usuários"/>
            <Formik
                initialValues={{ user: '', password: '' }}
                validate={
                    values => {
                        const errors = {};
                        if (!values.user){
                            errors.user = "Campo Obrigatório"
                        }
                        return errors;
                    }
                }
                onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }
                }
            >
                
            {({ isSubmitting }) => (
                <Form className="FormLoginMain">
                    <Field type="text" name="user" className="FormLogin" placeholder="Nome de Usuário"/>
                    <ErrorMessage name="user" component="div" />
                    <Field type="password" name="password" className="FormLogin" minLength="5" maxlength="8" placeholder="Senha de Usuário"/>
                    <ErrorMessage name="password" component="div" />
                    
                    <SuccessButton nameButton="Entrar"></SuccessButton>
                    <Link to="/forgotten" className="Links">Recuperar senha</Link>
                </Form>
            )}

            </Formik>
        </div>
      </>
  );
}

export default LoginUser;


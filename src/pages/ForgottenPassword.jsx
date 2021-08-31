import React from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import MainLogo from '../components/MainLogo';
import  { TitleLogin }  from "../components/Titles"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SuccessButton } from "../components/Buttons";

// import { Container } from './styles';

function ForgottenPassword() {
  return (
      <>
        <MainLogo />
        <div id="CardHome">
            <TitleLogin nameTitle="Recuperar Senha"/>
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
                    <Field type="text" name="email" className="FormLogin" placeholder="Nome de Usuário"/>
                    <ErrorMessage name="user" component="div" />
                    <SuccessButton nameButton="Recuperar Senha"></SuccessButton>
                    <Link to="/user-login" className="Links">Voltar</Link>
                </Form>
            )}

            </Formik>
        </div>
      </>
  );
}

export default ForgottenPassword;


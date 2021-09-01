import React from 'react';
import "./RegisterSuppliers.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';


// import { Container } from './styles';

function RegisterSuppliers() {
  return (
      <>

<Formik>
                
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
         
      </>
  );
}

export default RegisterSuppliers;


import React from 'react';
import "./RegisterSuppliers.css"
import "./RegisterClients.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {TitleLogin} from "./Titles.jsx";
import {SendButton, ClearButton} from "./Buttons.jsx";


// import { Container } from './styles';

function RegisterClients() {
  return (
      <>

<TitleLogin nameTitle="Cadastro de Clientes"/>
<Formik>
    <Form className="FormRegisterSupplier">
        <Field type="text" name="name" className="FormSuppliers FormSuppliers-S1" placeholder="Nome/Razão Social"/>
        <ErrorMessage name="user" component="div" />
        <Field type="text" name="document" className="FormSuppliers FormSuppliers-S2" maxLength="20" placeholder="CNPJ/CPF"/>
        <ErrorMessage name="document" component="div" />
        <Field type="text" name="responsible_person" className="FormSuppliers FormSuppliers-S1" maxLength="20" placeholder="Responsável"/>
        <ErrorMessage name="responsible_person" component="div" />
        <Field type="email" name="email" className="FormSuppliers FormSuppliers-S2" maxLength="80" placeholder="E-mail"/>
        <ErrorMessage name="E-mail" component="div" />
        <Field type="number" name="phone_ddd" className="FormSuppliers FormSuppliers-S3" maxLength="3" placeholder="DDD"/>
        <ErrorMessage name="DDD" component="div" />
        <Field type="number" name="phone_number" className="FormSuppliers FormSuppliers-S4" maxLength="9" placeholder="Telefone"/>
        <ErrorMessage name="phone_number" component="div" />
        <Field type="text" name="address" className="FormSuppliers FormSuppliers-S1" maxLength="250" placeholder="Endereço"/>
        <ErrorMessage name="address" component="div" />   
        <Field type="number" name="zip_code" className="FormSuppliers FormSuppliers-S2" maxLength="9" placeholder="CEP"/>
        <ErrorMessage name="zip_code" component="div" />  
        <Field type="text" name="city" className="FormSuppliers FormSuppliers-S4" maxLength="80" placeholder="Cidade"/>
        <ErrorMessage name="city" component="div" />     
        <Field type="text" name="uf" className="FormSuppliers FormSuppliers-S3" maxLength="2" placeholder="UF"/>
        <ErrorMessage name="uf" component="div" />  
        
        <ClearButton nameButton="Limpar"/>
        <SendButton nameButton="Enviar"/>
        
    </Form>
</Formik>
         
      </>
  );
}

export default RegisterClients;


import React from 'react';
import "./RegisterSuppliers.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {TitleLogin} from "./Titles.jsx";
import {SendButton, ClearButton} from "./Buttons.jsx";


// import { Container } from './styles';

function RegisterSuppliers() {
  return (
      <>

<TitleLogin nameTitle="Cadastro de fornecedor"/>

<Formik>
                
    {({ isSubmitting }) => (
        <Form className="FormRegisterSupplier">
            <Field type="text" name="name" className="FormSuppliers FormSuppliers-S1" placeholder="Fornecedor"/>
            <ErrorMessage name="user" component="div" />
            <Field type="text" name="document" className="FormSuppliers FormSuppliers-S2" maxlength="20" placeholder="CNPJ/CPF"/>
            <ErrorMessage name="document" component="div" />
            <Field type="text" name="responsible_person" className="FormSuppliers FormSuppliers-S1" maxlength="20" placeholder="Responsável"/>
            <ErrorMessage name="responsible_person" component="div" />
            <Field type="email" name="email" className="FormSuppliers FormSuppliers-S2" maxlength="80" placeholder="E-mail"/>
            <ErrorMessage name="E-mail" component="div" />
            <Field type="number" name="phone_ddd" className="FormSuppliers FormSuppliers-S3" maxlength="3" placeholder="DDD"/>
            <ErrorMessage name="DDD" component="div" />
            <Field type="number" name="phone_number" className="FormSuppliers FormSuppliers-S4" maxlength="9" placeholder="Telefone"/>
            <ErrorMessage name="phone_number" component="div" />
            <Field type="text" name="address" className="FormSuppliers FormSuppliers-S1" maxlength="250" placeholder="Endereço"/>
            <ErrorMessage name="address" component="div" />   
            <Field type="number" name="zip_code" className="FormSuppliers FormSuppliers-S2" maxlength="9" placeholder="CEP"/>
            <ErrorMessage name="zip_code" component="div" />  
            <Field type="text" name="city" className="FormSuppliers FormSuppliers-S4" maxlength="80" placeholder="Cidade"/>
            <ErrorMessage name="city" component="div" />     
            <Field type="text" name="uf" className="FormSuppliers FormSuppliers-S3" maxlength="2" placeholder="UF"/>
            <ErrorMessage name="uf" component="div" />  

        <SendButton nameButton="Enviar"/>

        <ClearButton nameButton="Limpar"/>
         
        </Form>
    )}

</Formik>
         
      </>
  );
}

export default RegisterSuppliers;


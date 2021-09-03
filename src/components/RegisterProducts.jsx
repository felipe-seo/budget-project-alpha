import React from 'react';
import "./RegisterSuppliers.css"
import "./RegisterClients.css"
import "./RegisterProducts.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {TitleLogin} from "./Titles.jsx";
import {SendButton, ClearButton} from "./Buttons.jsx";


// import { Container } from './styles';

function RegisterClients() {
  return (
      <>

<TitleLogin nameTitle="Cadastro de Produtos"/>
<Formik>
    <Form className="FormRegisterSupplier">
        <Field type="text" name="product_name" className="FormSuppliers FormSuppliers-S1" placeholder="Nome do produto"/>
        <ErrorMessage name="user" component="div" />
        <Field type="number" name="qt_product" className="FormSuppliers FormSuppliers-S2" maxLength="20" placeholder="Quantidade"/>
        <ErrorMessage name="qt_product" component="div" />
        <Field type="text" name="serial_number" className="FormSuppliers FormSuppliers-S1" maxLength="15" placeholder="Número de série"/>
        <ErrorMessage name="serial_number" component="div" />
        <Field type="number" name="sale_value" className="FormSuppliers FormSuppliers-S2" maxLength="80" placeholder="Preço"/>
        <ErrorMessage name="sale_value" component="div" />        
        <Field as="select" name="id_supplier" className="FormSuppliers FormSuppliers-S1 P1">
             <option value="option">Selecione um fornecedor</option>             
        </Field>
        <Field as="select" name="id_group" className="FormSuppliers FormSuppliers-S1 P1">
             <option value="option">Selecione uma categoria</option>             
        </Field>
        

        
        <ClearButton nameButton="Limpar"/>
        <SendButton nameButton="Enviar"/>
        
    </Form>
</Formik>
         
      </>
  );
}

export default RegisterClients;


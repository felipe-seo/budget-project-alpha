import React, { useState } from 'react';
import "./RegisterSuppliers.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {TitleLogin} from "./Titles.jsx";
import {SendButton, ClearButton} from "./Buttons.jsx";


// import { Container } from './styles';

function RegisterSuppliers() {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [responsible_person, setResponsible_person] = useState("");
  const [email, setEmail] = useState("");
  const [phone_ddd, setPhone_ddd] = useState(0);
  const [phone, setPhone] = useState(0);  
  const [address, setAddress] = useState("");
  const [zip_code, setZip_code] = useState(0);
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  return (
      <>

<TitleLogin nameTitle="Cadastro de fornecedor"/>
<Formik>
    <Form className="FormRegisterSupplier">
        <Field type="text" name="name" className="FormSuppliers FormSuppliers-S1" placeholder="Fornecedor"/>
        <p>{setName}</p>
        <Field type="text" name="document" className="FormSuppliers FormSuppliers-S2" maxlength="20" placeholder="CNPJ/CPF"/>
        
        <Field type="text" name="responsible_person" className="FormSuppliers FormSuppliers-S1" maxlength="20" placeholder="Responsável"/>
        
        <Field type="email" name="email" className="FormSuppliers FormSuppliers-S2" maxlength="80" placeholder="E-mail"/>
        
        <Field type="number" name="phone_ddd" className="FormSuppliers FormSuppliers-S3" maxlength="3" placeholder="DDD"/>
        
        <Field type="number" name="phone_number" className="FormSuppliers FormSuppliers-S4" maxlength="9" placeholder="Telefone"/>
        
        <Field type="text" name="address" className="FormSuppliers FormSuppliers-S1" maxlength="250" placeholder="Endereço"/>
        
        <Field type="number" name="zip_code" className="FormSuppliers FormSuppliers-S2" maxlength="9" placeholder="CEP"/>
        
        <Field type="text" name="city" className="FormSuppliers FormSuppliers-S4" maxlength="80" placeholder="Cidade"/>
        
        <Field type="text" name="uf" className="FormSuppliers FormSuppliers-S3" maxlength="2" placeholder="UF"/>
        
        
        <ClearButton nameButton="Limpar"/>
        <SendButton nameButton="Enviar"/>
        
    </Form>
</Formik>
         
      </>
  );
}

export default RegisterSuppliers;


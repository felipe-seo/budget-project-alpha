import React, { useState, useEffect } from 'react';
import "./RegisterSuppliers.css"
import { Formik, Form, Field } from 'formik';
import {TitleLogin} from "./Titles.jsx";
import {SendButton, ClearButton} from "./Buttons.jsx";
import api from "../services/api";

// import { Container } from './styles';


function RegisterSuppliers() {
  const [name, setName] = useState("");
  const [document, setDocument] = useState("");
  const [responsible_person, setResponsible_person] = useState("");
  const [email, setEmail] = useState("");
  const [phone_ddd, setPhone_ddd] = useState(0);
  const [phone_number, setPhone_number] = useState(0);  
  const [address, setAddress] = useState("");
  const [zip_code, setZip_code] = useState(0);
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");
  
  let arr = [name, document, responsible_person, email, phone_ddd, phone_number, responsible_person, email, city, uf]
/*
  console.log(`
   name: ${name} 
   document ${document}
   responsible_person ${responsible_person}
   email ${email}
   phone_ddd ${phone_ddd}
   phone ${phone_number}
   responsible_person ${address}
   email ${zip_code}
   city ${city}
   phone ${uf}
   
    `);
*/
    //Function for requisition
    let Post_supplier = function(...arr){
        useEffect(() => {
            api
            .post("http://localhost:3001/suppliers",{
                name_supplier:name,
                doc_ident:document,
                responsible_person:responsible_person,
                email: email,
                phone_ddd: phone_ddd,
                phone_number: phone_number,
                address: address,
                city:city,
                uf:uf,
                zip_code:zip_code,
                creation_date:"2021-05-26",
                id_user:1
        })
            .then((response) => setName(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        }, []);
    }    

console.log(...arr);
  return (
      <>

<TitleLogin nameTitle="Cadastro de fornecedor"/>
<Formik>
    <Form className="FormRegisterSupplier">
        <Field type="text" name="name" className="FormSuppliers FormSuppliers-S1" placeholder="Fornecedor"
            onChange={e => setName(e.target.value)} 
        />
        
        <Field type="text" name="document" className="FormSuppliers FormSuppliers-S2" maxLength="20" placeholder="CNPJ/CPF"
            onChange={e => setDocument(e.target.value)}
        />
        
        <Field type="text" name="responsible_person" className="FormSuppliers FormSuppliers-S1" maxLength="20" placeholder="Responsável"
            onChange={e => setResponsible_person(e.target.value)}
        />
        
        <Field type="email" name="email" className="FormSuppliers FormSuppliers-S2" maxLength="80" placeholder="E-mail"
            onChange={e => setEmail(e.target.value)}
        />
        
        <Field type="number" name="phone_ddd" className="FormSuppliers FormSuppliers-S3" maxLength="3" placeholder="DDD"
            onChange={e => setPhone_ddd(e.target.value)}
        />
        
        <Field type="number" name="phone_number" className="FormSuppliers FormSuppliers-S4" maxLength="9" placeholder="Telefone"
            onChange={e => setPhone_number(e.target.value)}
        />
        
        <Field type="text" name="address" className="FormSuppliers FormSuppliers-S1" maxLength="250" placeholder="Endereço"
            onChange={e => setAddress(e.target.value)}
        />
        
        <Field type="number" name="zip_code" className="FormSuppliers FormSuppliers-S2" maxLength="9" placeholder="CEP"
            onChange={e => setZip_code(e.target.value)}
        />
        
        <Field type="text" name="city" className="FormSuppliers FormSuppliers-S4" maxLength="80" placeholder="Cidade"
            onChange={e => setCity(e.target.value)}
        />
        
        <Field type="text" name="uf" className="FormSuppliers FormSuppliers-S3" maxLength="2" placeholder="UF"
            onChange={e => setUf(e.target.value)}
        />
        
        
        <ClearButton nameButton="Limpar"/>
        <SendButton nameButton="Enviar"
        onClick={Post_supplier(arr)}
        />
        
    </Form>
</Formik>
         
      </>
  );
}

export default RegisterSuppliers;


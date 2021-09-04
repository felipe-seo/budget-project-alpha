import React from 'react';
import "./RegisterSuppliers.css"
import { Formik, Form, Field } from 'formik';
import {TitleLogin} from "./Titles.jsx";
import {SendButton, ClearButton} from "./Buttons.jsx";
import axios from 'axios';

function RegisterSuppliers() {
    
  return (
      <>

<TitleLogin nameTitle="Cadastro de fornecedor"/>
<Formik 
    initialValues = {
        {
            name: '', 
            document: '', 
            responsible_person: '', 
            email: '', 
            phone_ddd: '', 
            phone_number: '', 
            address: '', 
            zip_code: '',
            city: '', 
            uf: ''
        }
    }

    onSubmit={(values, { setSubmitting }) => {
            /*setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400);*/

            // let convertValues = JSON.stringify(values);
            setSubmitting(false);
            axios.post(`http://localhost:3001/suppliers`, { values })
            .then(res => {
              console.log(res);
              console.log(res.data);
            })

        }
    }
>

{({ isSubmitting }) => (
    <Form className="FormRegisterSupplier">
        <Field type="text" name="name" className="FormSuppliers FormSuppliers-S1" placeholder="Fornecedor"
            
        />
        
        <Field type="text" name="document" className="FormSuppliers FormSuppliers-S2" maxLength="20" placeholder="CNPJ/CPF"
            
        />
        
        <Field type="text" name="responsible_person" className="FormSuppliers FormSuppliers-S1" maxLength="20" placeholder="Responsável"
           
        />
        
        <Field type="email" name="email" className="FormSuppliers FormSuppliers-S2" maxLength="80" placeholder="E-mail"
            
        />
        
        <Field type="number" name="phone_ddd" className="FormSuppliers FormSuppliers-S3" maxLength="3" placeholder="DDD"
           
        />
        
        <Field type="text" name="phone_number" className="FormSuppliers FormSuppliers-S4" maxLength="9" placeholder="Telefone"
            
        />
        
        <Field type="text" name="address" className="FormSuppliers FormSuppliers-S1" maxLength="250" placeholder="Endereço"
           
        />
        
        <Field type="text" name="zip_code" className="FormSuppliers FormSuppliers-S2" maxLength="9" placeholder="CEP"
            
        />
        
        <Field type="text" name="city" className="FormSuppliers FormSuppliers-S4" maxLength="80" placeholder="Cidade"
            
        />
        
        <Field type="text" name="uf" className="FormSuppliers FormSuppliers-S3" maxLength="2" placeholder="UF"
            
        />
        
        
        <ClearButton nameButton="Limpar"/>
        <SendButton nameButton="Enviar" disabled={isSubmitting}/>
        
    </Form>
    )}
</Formik>
         
      </>
  );
}

export default RegisterSuppliers;


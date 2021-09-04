import React from 'react';
import './QuerySuppliers.css';
import { Formik, Form, Field } from 'formik';
import {TitleLogin} from "./Titles.jsx";
import axios from 'axios';
// import { Container } from './styles';


function QuerySuppliers() {
  state = {
    persons: []
  }

  
  axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      const persons = res.data;
      this.setState({ persons });
    })
  

  return (
    <>
      <TitleLogin nameTitle="Consulta de Fornecedores"/>
      <Formik 
        initialValues={
          {search: ''}
        }
      >
        <Form className="FormRegisterSupplier">
          <Field type="text" name="search" className="SearchSup" placeholder="Buscar por CPF/CNPJ ou Nome"
  
          />
        </Form>
      </Formik>

      <table className="TableSup">
        <thead className="TableHead">
          <th>Nome</th>
          <th>Telefone</th>
          <th>E-mail</th>
          <th>Excluir</th>
          <th>Atualizar</th>
          <th>Consultar</th>
        </thead>

        <tbody className="TableBody">
          <tr>
            <td>Rodolfo</td>
            <td>83991260104</td>
            <td>teste@teste.com</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

        </tbody>
      </table>
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    </>

  )
}

export default QuerySuppliers;
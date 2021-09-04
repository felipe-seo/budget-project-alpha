import React, { useState, Component } from 'react';
import './QuerySuppliers.css';
import { Formik, Form, Field } from 'formik';
import {TitleLogin} from "./Titles.jsx";
import axios from 'axios';
// import { Container } from './styles';


export class QuerySuppliers extends Component{
  
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`http://localhost:3001/suppliers`)
        .then(res => {
          const persons = res.data.rows;
          console.log(persons);
          this.setState({ persons });
          
          
          
        })

    }
  

  render() {
    
    /*teste.map(e => console.log(e.name_supplier))*/
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
          { this.state.persons.map(e => 
        <tr>
          <td>{e.name_supplier}</td>
          <td>{e.phone_ddd+e.phone_number}</td>
          <td>{e.email}</td> 
          <td></td>
          <td></td>
          <td></td>
        </tr>)}
  
          </tbody>
        </table>
        <ul>
        
        

        
        </ul>
      </>
  
    )
  }

}
import React, {Component} from 'react';
import './Titles.css'

// import { Container } from './styles';

type Props = {
    nameTitle: String,
  };
  

export class TitleLogin extends Component<Props>{
    render(){
        return (
            <h1 className="TitleLogin">{this.props.nameTitle}</h1>
        )
    }
}
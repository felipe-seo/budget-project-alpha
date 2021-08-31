import React, {Component} from 'react';
import "./Buttons.css";

// import { Container } from './styles';

type Props = {
    nameButton: String;
}

export class SuccessButton extends Component<Props>{
    render(){
        return (
            <button className="SuccessButton">{this.props.nameButton}</button>
        )
    }
}

export class PinkButton extends Component {
    render(){
        return (
            <button className="PinkButton">Administradores</button>
        )
    }
}



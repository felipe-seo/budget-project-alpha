import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./Buttons.css";

// import { Container } from './styles';

type Props = {
    nameButton: String;
}




export class SuccessButton extends Component<Props>{

    render(){
        
        return (
            <Link className="SuccessButton" to="/user-login" >{this.props.nameButton}</Link>
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



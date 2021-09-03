import React, {Component} from 'react';
import { Link } from "react-router-dom";
import "./Buttons.css";

// import { Container } from './styles';

type Props = {
    nameButton: String;
    path: String;
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


export class SendButton extends Component<Props>{

    render(){
        
        return (
            <button type="submit"  className="SuccessButton SuccessButton-Register">{this.props.nameButton}</button>
        )
    }
}

export class ClearButton extends Component<Props>{

    render(){
        
        return (
            <button className="PinkButton PinkButton-Register">{this.props.nameButton}</button>
        )
    }
}

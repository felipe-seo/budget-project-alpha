import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import card1 from "../assets/images/card1.svg";
import card2 from "../assets/images/card2.svg";
import card3 from "../assets/images/card3.svg";
import card4 from "../assets/images/card4.svg";
import "./Cards.css"


//Button 1
function CardButton (props) {    
    return (
        <Link to="/create-budget" className="Card">
            <img src={props.image} alt="" />            
            {props.title}
        </Link>
    )
}
export default CardButton;
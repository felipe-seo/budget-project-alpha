import React from 'react';
import { Link } from 'react-router-dom';

import "./Cards.css"


//Button 1
function CardButton (props) {    
    return (
        <Link to={props.route} className="Card">
            <img src={props.image} alt="" />            
            {props.title}
        </Link>
    )
}
export default CardButton;
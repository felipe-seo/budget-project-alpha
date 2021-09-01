import React from 'react';
import CardButton from './Cards.jsx';
import "./Home.css"
import card1 from "../assets/images/card1.svg";
import card2 from "../assets/images/card2.svg";
import card3 from "../assets/images/card3.svg";
import card4 from "../assets/images/card4.svg";


// import { Container } from './styles';

function home() {
  return (<>
    <div className="cardMain">  

            <CardButton title="Criar orçamento" image={card1}/>
            <CardButton title="Consultas" image={card2}/>
    </div>
    <div className="cardMain">                
            <CardButton title="Cadastros" image={card3}/>
            <CardButton title="Ajuda" image={card4}/>
    </div>
  </>);
}

export default home;
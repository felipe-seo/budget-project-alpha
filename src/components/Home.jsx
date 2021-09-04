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

            <CardButton title="Criar orçamento" image={card1} route="/create-budget"/>
            <CardButton title="Consultas de Orçamentos" image={card2} route="/query-budget"/>
    </div>
    <div className="cardMain">                
            <CardButton title="Cadastro de Cliente" image={card3} route="/register-clients"/>
            <CardButton title="Ajuda" image={card4} route="help"/>
    </div>
  </>);
}

export default home;
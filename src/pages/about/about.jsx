import React from 'react';
import './about.css'
import aboutImage from '../../assets/logo-inacius.svg'

const About = () => {
    return (
        <>
            <div className="section-main">
            <div className="about">
                <div className="about-img">
                    <img src={aboutImage} alt="add image" />
                </div>
                <div className="about-text">
                    <h1>Sobre-nós</h1>
                    <p>
                     Existente desde 2019, a INACIUS é uma empresa de direito angolano que
                     actua no sector dos transportes, perfilando como uma das referências 
                     obrigatórias na prestação de serviços de táxi personalizado em Luanda 
                     com maior preponderância n zona sul da cidade de Luanda: Kilamba, Talatona, Benfica, Patriota,
                     Vida Pacífica, Zango e Sequele, cuja a missão é transporta de forma cômoda e segura os seus clientes.
                    </p>
                </div>
            </div>
            </div>
        </>
    );
}

export default About;

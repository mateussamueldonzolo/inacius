import React from 'react';
import './compromissos.css'
const Compromissos = () => {
    return (
        <>
            <div className="section-main">
                <div className="tema">
                    <h1>Compromissos</h1>
                    <p>Na INACIUS, nossa missão é proporcionar soluções de transposrtes seguras e eficientes, <br />
                    conectando pessoas e negócios em Angola</p>
                </div>
                <div className="compromissos">
                    <div className="compro">
                    <div className="icons-compro">
                         <i className='bi fas-facebook'></i>
                       </div>
                        <strong>Vissão</strong>
                        <p>Na INACIUS, nossa missão é proporcionar soluções 
                            de transposrtes seguras e eficientes, <br />
                        conectando pessoas e negócios em Angola</p>
                    </div>
                    <div className="compro">
                    <i className='bi-bell'></i>
                       <div className="icons-compro">
                         <i className='bi fas-facebook'></i>
                       </div>
                        <strong>Missão</strong>
                        <p>Na INACIUS, nossa missão é proporcionar soluções 
                            de transposrtes seguras e eficientes, <br />
                        conectando pessoas e negócios em Angola</p>
                    </div>
                    <div className="compro">
                       <div className="icons-compro">
                         <i className='bi fas-facebook'></i>
                       </div>
                        <strong>Valores</strong>
                        <p>Na INACIUS, nossa missão é proporcionar soluções 
                            de transposrtes seguras e eficientes, <br />
                        conectando pessoas e negócios em Angola</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Compromissos;

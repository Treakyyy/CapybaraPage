import React from 'react';
import './BodyLaboratory.css'
import LaboratoryCapybara from '../../photo/LaboratoryCapybara';

const BodyLaboratory = () => {
    return (
        <div className='Container-BodyLaboratory'>
            <div className='Head-Container-Text-Laboratory'>
                <h2 className='Head-Text-Laboratory'>Лаборатория</h2>
                <div className='Container-Text-Laboratory'>
                    <p className='Text-Laboratory'>Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых<br /> опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов,<br /> микробиологических исследованиях, генетической диагностике и многом другом.</p>
                    <p className='Text-Laboratory'>Мы используем современное оборудование и методики и гарантируем точность и<br /> надежность результатов.</p>
                </div>
                <button className='Send-Button'>Оставить заявку</button>
            </div>
            <LaboratoryCapybara/>
        </div>
    );
};

export default BodyLaboratory;
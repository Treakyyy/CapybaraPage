import React from 'react';
import './BodyLaboratory.css'
import LaboratoryCapybara from '../../photo/LaboratoryCapybara';
import ArrowIcon from '../../photo/ArrowIcon';

const BodyLaboratory = () => {

    return (
        <div className='Container-BodyLaboratory'>
            <div className='Head-Container-Text-Laboratory'>
                <h2 className='Head-Text-Laboratory'>Лаборатория</h2>
                <div className='Mini-Laboratory-Capybara'><LaboratoryCapybara/></div>
                <div className='Container-Text-Laboratory'>
                    <p className='Text-Laboratory'>Наша лаборатория предлагает широкий спектр медицинских исследований, проводимых<br /> опытными капибарами-лаборантами. Мы специализируемся на анализе биоматериалов,<br /> микробиологических исследованиях, генетической диагностике и многом другом.</p>
                    <p className='Text-Laboratory'>Мы используем современное оборудование и методики и гарантируем точность и<br /> надежность результатов.</p>
                </div>
                <button className='Send-Button'>Оставить заявку <ArrowIcon/></button>
            </div>
            <div className='Big-Laboratory-Capybara'><LaboratoryCapybara/></div>
        </div>
    );
};

export default BodyLaboratory;
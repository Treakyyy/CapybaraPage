import React from 'react';
import './NameCompany.css'
import Company from '../../photo/Company';

const NameCompany = () => {
    return (
        <div className='Container-NameCompany'>
            <Company/>
            <p className='Text-NameCompany'>Современные методики <br />диагностики</p>
        </div>
    );
};

export default NameCompany;
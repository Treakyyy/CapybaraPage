import React from 'react';
import Phone from '../../photo/Phone';
import './Contacts.css'

const Contacts = () => {
    return (
        <div className='Container-Contacts'>
            <Phone/>
            <div className='Container-Text-Contacts'>
                <h5 className='Number'>+7 123 456 7890</h5>
                <p className='CallFree'>Звонок бесплатный</p>
            </div>
        </div>
    );
};

export default Contacts;
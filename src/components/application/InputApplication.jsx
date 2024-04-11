import React from 'react';
import './InputApplication.css'

const InputApplication = () => {
    return (
        <div className='Container-InputApplication'>
            <input className='InputApplication' type="text" placeholder='Фамилия' />
            <input className='InputApplication' type="text" placeholder='Имя' />
            <input className='InputApplication' type="text" placeholder='Отчество' />
        </div>
    );
};

export default InputApplication;
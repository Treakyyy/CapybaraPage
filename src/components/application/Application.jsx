import React from 'react';
import './Application.css'
import InputApplication from './InputApplication';
import Check from '../../photo/Check'

const Application = () => {
    return (
        <div className='Container-Application'>
            <h2 className='Head-Text-Application'>Заявка на диагностику</h2>
            <p className='Text-Application'>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите<br /> качественные результаты в кратчайшие сроки!</p>
            <InputApplication/>
            <button className='Send-Button-Application'>Отправить<Check/></button>
        </div>
    );
};

export default Application;
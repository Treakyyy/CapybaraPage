// В компоненте Application

import React, { useEffect, useRef, useState } from 'react';
import './Application.css'
import InputApplication from './InputApplication';
import { useDispatch, useSelector } from 'react-redux';
import { selectScrollToApplication, setScrollToApplication } from '../../features/scroll/scrollSlice';
import CheckForm from '../../photo/CheckForm';

const Application = () => {

    const dispatch = useDispatch()
    const scrollToApplication = useSelector(selectScrollToApplication)
    const applicationRef = useRef(null)
    const [showThankYou, setShowThankYou] = useState(false);

    useEffect(() => {
        if(scrollToApplication){
            applicationRef.current.scrollIntoView({ behavior: 'smooth' });
            dispatch(setScrollToApplication(false))
        }
    }, [scrollToApplication, dispatch])

    const handleFormSubmit = () => {
        setShowThankYou(true);
    };

    return (
        <div ref={applicationRef} className='Container-Application'>
            {showThankYou ? (
                <div className='Container-Complete-Form'>
                    <CheckForm/>
                    <p className='ThankYou-Message'>
                        Спасибо за предоставленную информацию,<br /> мы свяжемся с вами в ближайшее время.
                    </p>
                </div>
            ) : (
                <>
                <h2 className='Head-Text-Application'>Заявка на диагностику</h2>
                <p className='Text-Application'>Доверьте свои медицинские исследования надежным капибарам-лаборантам и получите<br /> качественные результаты в кратчайшие сроки!</p>
                <InputApplication onSubmit={handleFormSubmit} />
                </>
            )}
        </div>
    );
};

export default Application;

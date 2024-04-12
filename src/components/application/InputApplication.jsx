// В компоненте InputApplication

import React, { useState } from 'react';
import './InputApplication.css';
import Check from '../../photo/Check';
import { useDispatch, useSelector } from 'react-redux';
import { selectInputErrors, setSurnameError, setNameError, setPatronymicError } from '../../features/inputErrors/inputErrorsSlice';

const InputApplication = ({ onSubmit }) => {
    const dispatch = useDispatch();
    const { surnameError, nameError, patronymicError } = useSelector(selectInputErrors);
    const [submitted, setSubmitted] = useState(false);
    const [formValues, setFormValues] = useState({
        surname: '',
        name: '',
        patronymic: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });

        if (name === 'surname' && !value.trim()) {
            dispatch(setSurnameError('Введите фамилию'));
        } else {
            dispatch(setSurnameError(''));
        }

        if (name === 'name' && !value.trim()) {
            dispatch(setNameError('Введите имя'));
        } else {
            dispatch(setNameError(''));
        }

        if (name === 'patronymic' && !value.trim()) {
            dispatch(setPatronymicError('Введите отчество'));
        } else {
            dispatch(setPatronymicError(''));
        }
    };

    const handleSubmit = () => {
        if (formValues.surname.trim() && formValues.name.trim() && formValues.patronymic.trim()) {
            onSubmit();
            setSubmitted(true);
        }
    };

    return (
        <>
            {!submitted ? (
                <>
                    <div className='Container-InputApplication'>
                        <div className="Container-InputError">
                            {surnameError && <div className="error">{surnameError}</div>}
                            <input 
                                className={`InputApplication ${surnameError && 'error'}`} 
                                name='surname' 
                                type="text" 
                                placeholder='Фамилия'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="Container-InputError">
                            {nameError && <div className="error">{nameError}</div>}
                            <input 
                                className={`InputApplication ${nameError && 'error'}`} 
                                name='name' 
                                type="text" 
                                placeholder='Имя' 
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="Container-InputError">
                            {patronymicError && <div className="error">{patronymicError}</div>}
                            <input 
                                className={`InputApplication ${patronymicError && 'error'}`} 
                                name='patronymic' 
                                type="text"
                                placeholder='Отчество' 
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <button className='Send-Button-Application' onClick={handleSubmit}>Отправить<Check/></button>
                </>
            ) : (
                <div className='ThankYou-Message'>
                    Спасибо за предоставленную информацию,мы свяжемся с вами в ближайшее время.
                </div>
            )}
        </>
    );
};

export default InputApplication;



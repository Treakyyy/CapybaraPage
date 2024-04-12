import React from 'react';
import { useDispatch } from 'react-redux';
import { setScrollToApplication, setScrollToGallery, setScrollToLaboratory } from '../../features/scroll/scrollSlice';
import './HeaderButtons.css';

const HeaderButtons = () => {
    const dispatch = useDispatch();

    const scrollToLaboratory = () => {
        dispatch(setScrollToLaboratory(true));
    };

    const scrollToGallery = () => {
        dispatch(setScrollToGallery(true));
    };

    const scrollToApplication = () => {
        dispatch(setScrollToApplication(true))
    }

    return (
        <div className='Container-HeaderButtons'>
            <button onClick={scrollToLaboratory} className='HeaderButton'>Лаборатория</button>
            <button onClick={scrollToGallery} className='HeaderButton'>Галерея</button>
            <button onClick={scrollToApplication} className='HeaderButton'>Оставить заявку</button>
        </div>
    );
};

export default HeaderButtons;
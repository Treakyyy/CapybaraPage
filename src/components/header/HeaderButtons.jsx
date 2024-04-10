import React from 'react';
import './HeaderButtons.css'

const HeaderButtons = () => {
    return (
        <div className='Container-HeaderButtons'>
            <button className='HeaderButton'>Лаборатория</button>
            <button className='HeaderButton'>Галерея</button>
            <button className='HeaderButton'>Оставить заявку</button>
        </div>
    );
};

export default HeaderButtons;
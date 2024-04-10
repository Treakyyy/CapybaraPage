import React from 'react';
import './Header.css'
import NameCompany from './NameCompany';
import HeaderButtons from './HeaderButtons';
import Contacts from './Contacts';
import HeaderCapybara from '../../photo/HeaderCapybara';

const Header = () => {
    return (
        <>
        <header className='Container-Header'>
            <NameCompany/>
            <HeaderButtons/>
            <Contacts/>
        </header>
            <div>
                <div className='Text-HeaderCapybara'>
                    <p className='Result-Form'>ТОЧНЫЕ РЕЗУЛЬТАТЫ</p>
                    <p className='Term-Form'>ТОЧНО В СРОК</p>
                </div>
                <HeaderCapybara/>
            </div>
        </>
    );
};

export default Header;
import React from 'react';
import './Header.css'
import NameCompany from './NameCompany';
import HeaderButtons from './HeaderButtons';
import Contacts from './Contacts';
import HeaderCapybara from '../../photo/HeaderCapybara';
import HeaderCapybaraMini from '../../photo/HeaderCapybaraMini';

const Header = () => {
    

    return (
        <>
        <header className='Container-Header'>
            <div className='Container-Header-Menu'>
                <NameCompany/>
                <HeaderButtons/>
                <Contacts/>
            </div>
            <div>
                <div className='Text-HeaderCapybara'>
                    <p className='Result-Form'>ТОЧНЫЕ РЕЗУЛЬТАТЫ</p>
                    <p className='Term-Form'>ТОЧНО В СРОК</p>
                </div>
            <>
                <div className='Big-Header-Capybara'><HeaderCapybara /></div>
                <div className='Mini-Header-Capybara'><HeaderCapybaraMini/></div>
            </>
            </div>
        </header>
        </>
    );
};

export default Header;
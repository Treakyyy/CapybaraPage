import React from 'react';
import './Footer.css';
import FooterPhoto from '../../photo/FooterPhoto'

const Footer = () => {
    return (
        <footer className='Container-Footer'>
            <p className='Text-Footer'>Все права защищены Российской Ассоциацией Капибар</p>
            <FooterPhoto/>
        </footer>
    );
};

export default Footer;
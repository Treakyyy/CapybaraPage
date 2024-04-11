import React from 'react';
import './Laboratory.css'
import HeaderLaboratory from './HeaderLaboratory';
import BodyLaboratory from './BodyLaboratory';

const Laboratory = () => {
    return (
        <div className='Container-Laboratory'>
            <HeaderLaboratory/>
            <BodyLaboratory/>
        </div>
    );
};

export default Laboratory;
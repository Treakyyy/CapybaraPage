import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectScrollToLaboratory, setScrollToLaboratory } from '../../features/scroll/scrollSlice';
import './Laboratory.css';
import HeaderLaboratory from './HeaderLaboratory';
import BodyLaboratory from './BodyLaboratory';

const Laboratory = () => {
    const dispatch = useDispatch();
    const scrollToLaboratory = useSelector(selectScrollToLaboratory);
    const laboratoryRef = useRef(null);

    useEffect(() => {
        if (scrollToLaboratory) {
            laboratoryRef.current.scrollIntoView({ behavior: 'smooth' });
            dispatch(setScrollToLaboratory(false)); 
        }
    }, [scrollToLaboratory, dispatch]);

    return (
        <div ref={laboratoryRef} className='Container-Laboratory'>
            <HeaderLaboratory/>
            <BodyLaboratory/>
        </div>
    );
};

export default Laboratory;

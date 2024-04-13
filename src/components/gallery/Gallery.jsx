import React, { useEffect, useRef } from 'react';
import './Gallery.css'
import Gallery_7 from '../../photo/Gallery_7';
import Gallery_6 from '../../photo/Gallery_6';
import Gallery_5 from '../../photo/Gallery_5';
import Gallery_4 from '../../photo/Gallery_4';
import Gallery_3 from '../../photo/Gallery_3';
import Gallery_2 from '../../photo/Gallery_2';
import Gallery_1 from '../../photo/Gallery_1';
import { useDispatch, useSelector } from 'react-redux';
import { selectScrollToGallery, setScrollToGallery } from '../../features/scroll/scrollSlice';
import MobileGallery from './MobileGallery';

const Gallery = () => {

    const dispatch = useDispatch();
    const scrollToGallery = useSelector(selectScrollToGallery)
    const galleryRef = useRef(null)

    useEffect(() => {
        if(scrollToGallery){
            galleryRef.current.scrollIntoView({ behavior: 'smooth' });
            dispatch(setScrollToGallery(false))
        }
    }, [scrollToGallery, dispatch])

    return (
        <div ref={galleryRef} className='Container-Gallery'>
            <h2 className='Text-Gallery'>Галерея</h2>
            <MobileGallery/>
            <div className='Container-Photo-Gallery'>
                <div className="Container-Up-Photo">
                    <Gallery_1/>
                    <div className='Container-RigthUp-Photo'>
                        <Gallery_2/>
                        <Gallery_3/>
                        <Gallery_4/>
                    </div>
                </div>
                <div className="Container-Down-Photo">
                    <div className='Container-LeftDown-Photo'>
                        <Gallery_5/>
                        <Gallery_6/>
                    </div>
                    <Gallery_7/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
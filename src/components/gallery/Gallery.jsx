import React from 'react';
import './Gallery.css'
import Gallery_7 from '../../photo/Gallery_7';
import Gallery_6 from '../../photo/Gallery_6';
import Gallery_5 from '../../photo/Gallery_5';
import Gallery_4 from '../../photo/Gallery_4';
import Gallery_3 from '../../photo/Gallery_3';
import Gallery_2 from '../../photo/Gallery_2';
import Gallery_1 from '../../photo/Gallery_1';

const Gallery = () => {
    return (
        <div className='Container-Gallery'>
            <h2 className='Text-Gallery'>Галерея</h2>
            <div className='Container-Photo-Gallery'>
                <div className="Container-Up-Photo">
                    <Gallery_1/>
                    <div className='Container-RigthUp-Photo'>
                        <Gallery_2/>
                        <Gallery_3/>
                        <Gallery_4/>
                    </div>
                </div>
                <div className="Container-Down_Photo">
                    <Gallery_5/>
                    <Gallery_6/>
                    <Gallery_7/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
import React from 'react';
import GalleryMini_1 from '../../photo/GalleryMini_1';
import GalleryMini_2 from '../../photo/GalleryMini_2';
import Gallery_3 from '../../photo/Gallery_3';
import Gallery_4 from '../../photo/Gallery_4';
import './MobileGallery.css'

const MobileGallery = () => {
    return (
        <div className="Container-Mobile-Gallery">
            <GalleryMini_1/>
            <GalleryMini_2/>
            <Gallery_3/>
            <Gallery_4/>
        </div>
    );
};

export default MobileGallery;
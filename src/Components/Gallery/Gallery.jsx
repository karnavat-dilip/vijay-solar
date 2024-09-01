// src/Gallery.js
import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './Gallery.css';
import Breadcrumbs from '../Breadcrumbs';
import i1 from '../../Assets/wheat.webp'
import i2 from '../../Assets/organic-farming.jpeg'
import i3 from '../../Assets/innovation.jpg'
import i4 from '../../Assets/img_2_4NGW3NZ.webp'
import i5 from '../../Assets/images (5).jpeg'
import i6 from '../../Assets/images (3).jpeg'
import i7 from '../../Assets/farmbot.jpg'
import i8 from '../../Assets/agriculture.jpg'
import i9 from '../../Assets/solar-water-pump.webp'


const images = [
  i1,i2,i3,i4,i5,i6,i7,i8,i9
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    console.log(index);
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div>
      <Breadcrumbs title='Photos' />
      <section className='m-top53px'>
        <div className='container'>
          <div className="gallery">
            {images.map((src, index) => (
              <div key={index} className="gallery-item" >
                <LazyLoadImage
                className='lazy'
                onClick={() => openLightbox(index)}
                  effect="blur"
                  src={src}
                  alt={`Gallery ${index}`}
                />
              </div>
            ))}

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;

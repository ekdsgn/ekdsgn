import React, { useRef, useEffect } from 'react';
import { Carousel as NativeCarousel } from '@fancyapps/ui';
import '@fancyapps/ui/dist/carousel/carousel.css';

import { Thumbs } from '@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js';
import '@fancyapps/ui/dist/carousel/carousel.thumbs.css';

const defaults = {
  Dots: false,
  Navigation: false,
};

function Carousel({ children, options }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const carouselOptions = {
    ...defaults,
    ...options,


    };

    const instance = new NativeCarousel(container, carouselOptions);

    return () => {
      instance.destroy();
    };
  }, [options]);

  return (
    <div className="f-carousel" ref={containerRef}>
      {children}
    </div>
  );
}

export default Carousel;
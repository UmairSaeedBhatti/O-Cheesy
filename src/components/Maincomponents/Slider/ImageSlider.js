import React, { useState } from 'react';
import SliderData from './SliderData'
import { SliderContainer , SlidertCard, SliderWrapper, SlidertImg} from './SliderElements'

const ImageSlider = ({ slides }) => {

  const [current, setCurrent] = useState(0);
  const length = slides.length;

 
  function setNextImage(){
    setCurrent(current === length - 1 ? 0 : current + 1);
  }
 

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  setTimeout(()=>{
    setNextImage()
  },3000,[])
  return (
    
  <>
      {SliderData.map((slide, index) => {
        return (
          <SliderWrapper
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            {index === current && (
             <SlidertImg src={slide.image} alt='travel image' />
            )}
          </SliderWrapper>
        );
      })}
      </>
  );
};

export default ImageSlider;

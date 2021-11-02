import React, { useState } from 'react';
import { SliderMenuData }  from '../Products/data'
import { MenuliderContainer , SlidertCard, MenuSliderWrapper, MenuSlidertImg} from './menuSliderElements'

const MenuSlider = ({ slides }) => {

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
  },5000,[])
  return (
    
  <>
          {SliderMenuData.map((slide, index) => {
          
          return (
            
          <MenuSliderWrapper
            className={index === current ? 'slide active' : 'slide' }
            key={index}
          >
            {index === current && (
             <MenuSlidertImg src={slide.image} alt='travel image' />
            )}
          </MenuSliderWrapper>
        );
      })}
      </>
  );
};

export default MenuSlider;

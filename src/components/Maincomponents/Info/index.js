import React from 'react';
import { InfoContainer , ProductImg } from './InfoElements';

import choice from '../../images/ChoiceDeliver.jpeg'

import MenuSlider from '../Slider/menuSlider';
import { SliderMenuData } from '../Products/data';


const Info = () => {

  return (
   
    <>
   
      <MenuSlider  slides = {SliderMenuData}/>
    
      <ProductImg src={choice}  />
      </>
      
     
  );
};

export default Info;

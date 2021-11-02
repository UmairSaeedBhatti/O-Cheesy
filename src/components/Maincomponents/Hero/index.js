import React, {useState } from 'react';
import Navbar from '../Navbar';

import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn,
  

} from './HeroElements';
import {VideoBg , VideoContent} from './HeroElements'
import Video from '../../images/Video/oCheesy.mp4'
import { Form } from 'react-bootstrap';
import Products from '../Products';
import { productData, productDataTwo ,productDataThree , productDataFour} from '../Products/data';
import Feature from '../Feature/index';
import FeatureDrinks from '../FeatureDrinks/index'
import Footer from '../Footer/index';
import ImageSlider from '../Slider/ImageSlider'
import SliderData from '../Slider/SliderData'
import FeatureAbout from '../AboutUs/index'

const Hero = () => {

  return (
    <span >
    <HeroContainer>
        <ImageSlider  slides = {SliderData}/>
      </HeroContainer>
      <Products  data={productData} />
      <Feature />
        <Products  data = {productDataFour}/>
      
      <FeatureDrinks />
      <Products data={productDataThree} />
      <FeatureAbout/>
      <Footer/>
      </span>
  );
};

export default Hero;

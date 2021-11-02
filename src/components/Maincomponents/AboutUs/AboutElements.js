import styled from 'styled-components';
import FeaturePic from '../../images/Krahi.jpg';


export const AboutContainer = styled.div`
background: #150f0f;
 
 
  background-position: center;
  background-size: cover;
 flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;

  @media screen and (min-width: 650px) {
    width: 100%;
    height : 100vh
  }
  @media screen and (max-width: 200px) {
    width: 100%;
    height : 50vh
  }

  

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    padding-top: 5rem;
    font-family :fantasy
  }

  p {
    
  margin-left: 3rem;
  margin-right: 3rem;
  padding-top: 2rem;
  padding-bottom : 3rem;
  @media screen and (min-width: 650px) {
    font-size: clamp(0.1rem, 3vw, 4rem);
  }
  @media screen and (max-width: 350px){
    font-size: clamp(0.5rem, 2vw, 1rem);
  }
font-size: clamp(1rem, 4vw, 2rem); 
    line-clamp:5;
  }
  font-family : fantasy
  
`;


import styled from 'styled-components';

import tacos from '../../images/TacosOffer.jpeg';
import taco from '../../images/Tacos.jpeg'
export const TacosContainer = styled.div`

 background: linear-gradient(to right, rgba(112, 11, 123, 0.2), rgba(0, 0, 0, 0.1)),
   
 url(${taco});

  height: 80vh;
  
  
  background-size: cover;
  padding-top:80px;
  &:hover {
   
   background: linear-gradient(to right, rgba(0, 0, 233, 0.1), rgba(0, 123, 0, 0.1)),
   url(${tacos});
 
  transition: 0.2s ease-in;
 
}

  @media screen and (max-width: 650px) {
    width: 100%;
    height : 50vh
    
  }
`;

export const TacosContent = styled.div`
  height: calc(120vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 650px) {
   
    max-height: 100%;
    
  }


  
`;

export const TacosItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;


  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const TacosH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const TacosP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;


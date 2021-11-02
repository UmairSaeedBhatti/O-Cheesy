import styled from 'styled-components';

export const SliderContainer = styled.div`

  min-height: 100vh;

  background-color: #111


`;

export const SliderWrapper = styled.div`

  z-index:-12;

`;



export const SlidertImg = styled.img`
  margin-top : -2.5vh;
  height:  50vh;
  min-width: 100%;
  max-width: 100%;

  @media screen and (max-width: 350px) {
    margin-top : 0.5vh;
max-height: 50vh;
padding-bottom : 5vh

}


 
`;









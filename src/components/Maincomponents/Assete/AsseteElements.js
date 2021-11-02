
import styled from 'styled-components';
import ButerAssete from '../../images/butterChicken.jpg';
export const AsseteContainer = styled.div`

 background: linear-gradient(to right, rgba(1, 256, 0, 0.1), rgba(120, 0, 230, 0.1)),
   
 url(${ButerAssete});

  height: 70vh;
  
  
  background-size: cover;
  padding-top:80px;
  &:hover {
   
   background: linear-gradient(to right, rgba(0, 0, 233, 0.1), rgba(0, 123, 0, 0.1)),
   url(${ButerAssete});
 
  transition: 0.2s ease-in;
 
}

  @media screen and (max-width: 650px) {
    width: 100%;
    height : 50vh
    
  }
`;

export const AsseteContent = styled.div`
  height: calc(120vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 650px) {
   
    max-height: 100%;
    
  }


  
`;
export const VideoContent  = styled.div`



right:0;
bottom : 0;
left: 0;
width: 100%;
height: 100%;




@media screen and (max-width: 650px) {
    width: 100%;
    height: 30%;
    overflow: hidden;
  }

`;
export const VideoBg = styled.video`

width : 100%;
height: 100%;
object-fit: initial;
background: #232a34;

@media screen and (max-width: 650px) {
    width: 100%;
   height : 80%;
  }
`;




export const AsseteItems = styled.div`
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

export const AsseteH1 = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const AsseteP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const AsseteBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

import styled from 'styled-components';

export const SandwichContainer = styled.div`

  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #150f0f;

  color: #fff;
`;

export const SandwichWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const SandwichCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;



export const SandwichHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  text-decoration : skyblue;
  margin-bottom: 3rem;

  @media screen and (max-width: 650px) {
    margin-bottom: 2rem;
  margin-top: -2rem;
  }
`;

export const SandwichTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const SandwichInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
`;


export const SandwichPrice = styled.p`
  margin-bottom: 1rem;
  font-size: 2rem;
`;


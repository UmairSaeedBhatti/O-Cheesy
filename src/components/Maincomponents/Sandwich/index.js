import React from 'react';
import {
  SandwichContainer,
  SandwichWrapper,
  SandwichHeading,
  SandwichTitle,
  SandwichCard,

  SandwichInfo,
 
  SandwichPrice,
  
} from './SandwichElements';
import SandwichFeature  from '../SandwichFeature/index'
import Footer from '../Footer';



const Sandwich = ({data}) => {
  return (
    <>
      <SandwichFeature/>
    <SandwichContainer>
      <SandwichHeading>{"Au Choix à ...... 7,00 €"}</SandwichHeading>
      <SandwichWrapper>
        { data.map((Sandwich, index) => {
          return (
            <SandwichCard key={index}>
              <SandwichInfo>
                <SandwichTitle>{Sandwich.name}</SandwichTitle>
        
                <SandwichPrice>{Sandwich.price}</SandwichPrice>
                {
              } 
              </SandwichInfo>
            </SandwichCard>
          );
        })}
      </SandwichWrapper>
      </SandwichContainer>
      <Footer/>
      </>
  );
};

export default Sandwich;

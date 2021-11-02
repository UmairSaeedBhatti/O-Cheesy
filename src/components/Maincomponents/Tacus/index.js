
import {
  TacosContainer,
  TacosContent,
  TacosItems,
  TacosH1,
  TacosP
   
    
  
} from './TacosElements'
import Products from '../Products';
import { data } from './data';
import Footer from '../Footer/index'
  

const Tacos = () => {

    return (
        <>

                <TacosContainer>
                
            </TacosContainer>
            <Products  data = {data}/>
             <Footer/>   
           
         

        </>);
}

export default Tacos;
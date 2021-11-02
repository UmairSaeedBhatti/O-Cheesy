
import {
    PizzaContainer,
    PizzaContent,
    PizzaItems,
    PizzaH1,
    PizzaP,
    PizzaBtn,
    
  
} from './PizzaElements'
import Products from '../Products';
import { pizzaData } from '../Products/data';
import Footer from '../Footer/index'
  

const Pizza = () => {

    return (
        <>

                <PizzaContainer>
                <PizzaContent>
                    <PizzaItems>
                        <PizzaH1>Special Barbecu Pizza</PizzaH1>
                        <PizzaP>Ready in 15 minutes</PizzaP>
                    </PizzaItems>
                </PizzaContent>
            </PizzaContainer>
            <Products data = {pizzaData}/>
             <Footer/>   
           
         

        </>);
}

export default Pizza;
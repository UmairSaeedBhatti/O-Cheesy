
import {
    NaanContainer,
    NaanContent,
    NaanItems,
    NaanH1,
    NaanP,
    NaanBtn,
    
  
} from './NaanElements'
import Products from '../Products';
import { naanData } from '../Products/data';
import Footer from '../Footer/index'
  

const Naan = () => {

    return (
        <>

                <NaanContainer>
                <NaanContent>
                    <NaanItems>
                        <NaanH1>Special Cheese Naan</NaanH1>
                        <NaanP>Our most special NAAn the Cheesy Naan</NaanP>
                    </NaanItems>
                </NaanContent>
            </NaanContainer>
            <Products  data = {naanData}/>
             <Footer/>   
           
         

        </>);
}

export default Naan;
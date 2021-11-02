
import {
    AsseteContainer,
    AsseteContent,
    AsseteItems,
    AsseteH1,
    AsseteP,
    AsseteBtn,
    
  
} from './AsseteElements'
import Products from '../Products';
import {Assiette } from '../Products/data'
import Footer from '../Footer/index'
  

const FeatureAssete = () => {

    return (
        <>

                <AsseteContainer>
                <AsseteContent>
                    <AsseteItems>
                        <AsseteH1>Special Cheese Assiette</AsseteH1>
                        <AsseteP></AsseteP>
                    </AsseteItems>
                </AsseteContent>
            </AsseteContainer>
            <Products  data = {Assiette}/>
         
           
         

        </>);
}

export default FeatureAssete;
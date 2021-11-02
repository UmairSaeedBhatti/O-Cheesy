import React from 'react'
import Sandwich from '../components/Maincomponents/Sandwich/index'
import Footer from '../components/Maincomponents/Footer';
import { data } from '../components/Maincomponents/Sandwich/data';


const SandwichMenu = () => {
    return (
        <>
        
            <Sandwich data={data}/>
         
        </>
    )
}

export default SandwichMenu

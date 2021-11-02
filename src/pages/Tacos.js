import React from 'react'
import Tacos from '../components/Maincomponents/Tacus/index'
import Footer from '../components/Maincomponents/Footer'
import { data } from '../components/Maincomponents/Tacus/data'

const TacosMenu = () => {
    return (
        <>
        
            <Tacos data={data} />
          
         
        </>
    )
}

export default TacosMenu

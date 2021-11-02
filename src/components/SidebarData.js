import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi'
import * as BiIcons from 'react-icons/bi'


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
    
  },
  {
    title: 'Pizza',
    path: '/pizza',
    icon: <FaIcons.FaPizzaSlice />,
    cName: 'nav-text'
  },
  {
    title: 'Naan',
    path: '/naan',
    icon: <FaIcons.FaBreadSlice/>,
    cName: 'nav-text'
  },
  
  {
    title: 'Assitte',
    path: '/assete',
    icon: <GiIcons.GiHotMeal />,
    cName: 'nav-text'
  },

  {
    title: 'Sandwich',
    path: '/sandwich',
    icon: <GiIcons.GiSandwich/>,
    cName: 'nav-text'
  },

  {
    title: 'Tacos',
    path: '/tacos',
    icon: <GiIcons.GiTacos />,
    cName: 'nav-text'
  },

 
  {
    title: 'Info',
    path: '/info',
    icon: <GiIcons.GiFoodTruck/>,
    cName: 'nav-text'
  },

  {
    title: 'About ',
    path: '/about',
    icon: <AiIcons.AiOutlineProfile/>,
    cName :'nav-text'
    
  }
 
 
  
];

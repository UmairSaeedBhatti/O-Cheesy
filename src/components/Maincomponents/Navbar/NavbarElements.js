import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

import {MdRestaurantMenu} from 'react-icons/md'



export const Nav = styled.nav`
  
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: 700;
  position:fixed;
  background-color: #ee3345;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;

  @media screen and (max-width: 400px) {
    position: absolute;
    top: 20px;
    left: 25px;
  }
 
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 30;
  right: 0;
  cursor: pointer;
  color: #fff;

 h3{
    transform: translate(-175%, 100%);
    font-weight: bold;
  }
`;


export const Bars = styled(MdRestaurantMenu)`
  font-size: 3rem;
  transform: translate(-50%, 30%);
  
  
`;

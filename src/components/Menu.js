import React from 'react';
import '../styles/Menu.css';
import {Burger} from './Burger';
import BurgerShow from '../components/BurgerShow'

const Menu = () => {
  return (
    <div className='menu'>
      <h1>Burgerlerimiz</h1>
      <div className='menuCard'>
        {
          Burger.map((burger, index)=>{
           return (
            <BurgerShow key={index} burger = {burger} />
           ) 
          })
        }

      </div>
    </div>
  )
}

export default Menu

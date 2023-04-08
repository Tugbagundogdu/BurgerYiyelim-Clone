import React from 'react'
import '../styles/BurgerShow.css'

const BurgerShow = ({burger}) => {
 const {image , title , content , price} = burger
  return (
    <div className='menuBurger'>
            <div className='image'>
                <img src={image} alt="" />
            </div>

            <div className='body'>
                <h5>{title}</h5>
                <p>{content}</p>
                <p>{price}</p>
            </div>
           
     
    </div>
  )
}

export default BurgerShow

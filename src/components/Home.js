import React from 'react'
import '../styles/Home.css'
import Banner from '../assets/banneryeni.jpg'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
  
      <div className='home' style={{backgroundImage: `url(${Banner})`}}>

        <div className='homeButton' >
          <Link to={'/menu'}>
            <button>SİPARİŞ VER</button>
           </Link>
        </div>
        

      </div>
      
  )
}

export default Home

import React from 'react'
import '../styles/Contact.css'
import Banner from '../assets/banner.png'
const Contact = () => {
  return (
    <div className='contact'>
      <div className='contactImage'>
        <img src= {Banner} alt="" />
      </div>
      
      <div className='contactForm'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type="text" placeholder='Lütfen adınızı soyadınızı giriniz..' />
          <label>Email</label>
          <input type="text" placeholder='Lütfen emailinizi giriniz..' />
          
          <label>Mesajınız</label>
          <textarea placeholder='Lütfen mesajınızı giriniz..' rows="3"/>
          
          <button>Gönder</button>
        </form>

      </div>
     
    </div>
  )
}

export default Contact

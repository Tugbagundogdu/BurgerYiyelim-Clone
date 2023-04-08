import React from 'react'
import '../styles/AboutUs.css'
import Banner from '../assets/banneryeni.jpg'

const AboutUs = () => {
  return (
    <div className='aboutUs'>
      <div className='imageAbout'>
        <img src= {Banner} alt="" />
      </div>

      <div className='content'>
        <h1>Hakkımızda</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, illo nostrum voluptate nam atque quasi, quos labore numquam aut vitae ducimus vero deserunt eligendi perspiciatis omnis, hic nobis expedita rem ipsum voluptas error incidunt? Vero, dolorum. Quis porro quibusdam corporis quisquam impedit unde cumque. Sunt mollitia incidunt quidem, possimus veniam optio voluptatum libero vitae magnam ea eaque quos velit quasi modi iure inventore officiis similique, dolorem repellat obcaecati quam molestiae, sit voluptates unde. Fugit, aliquid culpa, magni cum dicta deserunt dolorum temporibus, est asperiores doloremque blanditiis quia accusantium nulla ea. Iste maxime consequuntur sequi quibusdam illum neque a aspernatur, vitae at sint modi expedita veniam perspiciatis repellendus officiis nesciunt magni impedit, ad dicta esse! Pariatur, aut voluptate fuga eos repellendus perferendis soluta tempore aliquid reprehenderit, officiis dolore atque cupiditate esse hic culpa exercitationem molestiae accusantium modi vel? Veritatis nihil ipsam provident sequi eaque accusantium rem commodi, dignissimos exercitationem vero itaque!</p>
      </div>
    </div>
  )
}

export default AboutUs

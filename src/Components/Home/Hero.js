import React from 'react'
import CallToAction from './CallToAction'
import '../../styles/Home.css'

export default function Hero() {
  return (
    <>
      <div className='Hero-Container'>
        <div className='Hero-Image'>
          <h1>MindGrow</h1>
          <div className='HeroImage-divisor' />
          <h2>Working for your health</h2>
        </div>

        <div className='calltoaction'>
          <div className='round-img'>

            <img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/shoppingcart_120371.png" alt="" />

          </div>
          <CallToAction linkTo="#" buttonAction='Shop' />
        </div>

        
      </div>
      <div className='CarouselProducts'>
        <h2>Our products</h2>
      </div>

      <div className='DoctorRabbit'>
          <div className='Rabbit-Container'>
            <img className='Rabbit' src="https://i.im.ge/2022/10/04/1VjDyG.doctor-rabbit.png" alt="" />
          </div>
          <input type="text" name="bot" value="" placeholder='How can I help you' />
        </div>
    </>
  )
}

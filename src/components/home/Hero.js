import React from 'react'
import CallToAction from './CallToAction'
import '../../styles/Home.css'
import { useNavigate } from 'react-router-dom'
export default function Hero() {
  const navigate = useNavigate()
  return (
    <>
      <div className='Hero-Container'>
        <div className='Hero-Image'>
          <h1>MindGrow</h1>
          <div className='HeroImage-divisor' />
          <h2>Working for your health</h2>
        </div>
        <div className='calltoaction'>
          <div className='round-img' onClick={() => navigate("/products", { replace: true }) }>

            <img src="https://cdn.icon-icons.com/icons2/1875/PNG/512/shoppingcart_120371.png" alt="" />

          </div>
          <CallToAction linkTo="/products" buttonAction='Shop' />
        </div>
      </div>
    </>
  )
}

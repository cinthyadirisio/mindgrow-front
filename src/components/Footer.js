import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/Footer.css'

export default function Footer() {
    const scroll = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    }
    const today = new Date()
  return (
    <div className='Footer-container'>
        <div className='Footer-container-template'>
            <nav className='Footer-container-nav'>
                <LinkRouter className='Footer-link' to='/'>Home</LinkRouter>
                <LinkRouter className='Footer-link' to='/whyMindGrow?'>Why MindGrow?</LinkRouter>
            </nav>
            <nav className='Footer-container-info'>
                <a href='tel:+54 1122 3344'>Phone: +54 1122 3344</a>
                <a href='mailto: mindgrow31@gmail.com'>Email: mindgrow31@gmail.com</a>
            </nav>
        </div>
        <div className='Footer-container-socials'>
            <a href="https://twitter.com/?lang=es"><img src='https://i.ibb.co/hdjjkZX/twitter.png' /></a>
            <a href="https://www.instagram.com/"><img src='https://i.ibb.co/zQ5wd14/instagram.png' /></a>
            <a href="https://web.whatsapp.com/"><img src='https://i.ibb.co/GFtYnh7/whatsapp.png' /></a>
        </div>
        <div className='Footer-container-map'>
            <a href='https://goo.gl/maps/dKeAMnU3zxQvb9ok9'>Find us here!</a>
        </div>
        <div className='Footer-container-devs'>
            <a href='https://github.com/emazou'>Estefania Mazo</a>
            <a href=''>Franco Muñoz</a>
            <a href='https://github.com/cinthyadirisio'>Cinthya Di Risio</a>
            <a href='https://github.com/HectorGarayBascur'>Hector Garay</a>
            <a href='https://github.com/NataliaTorres5'>Natalia Torres</a>
            <a href='https://github.com/tomasrjs'>Tomas Rojas</a>
        </div>
        <p>©{today.getFullYear()} MindGrow</p>
        <button className='scroll' onClick={scroll}></button>
    </div>
    
  )
}

import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../Styles/Footer.css'

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
            <nav className='Footer-container-products'>
                <span>Products</span>
                <LinkRouter className='Footer-link' to='/'>product 1</LinkRouter>
                <LinkRouter className='Footer-link' to='/'>product 2</LinkRouter>
                <LinkRouter className='Footer-link' to='/'>product 3</LinkRouter>
                <LinkRouter className='Footer-link' to='/'>product 4</LinkRouter>
            </nav>
            <nav className='Footer-container-nav'>
                <LinkRouter className='Footer-link' to='/'>Home</LinkRouter>
                <LinkRouter className='Footer-link' to='/whyMindGrow?'>Why MindGrow?</LinkRouter>
            </nav>
        </div>
        <div className='Footer-container-socials'>
            <a href="https://twitter.com/?lang=es"><img src='https://i.ibb.co/hdjjkZX/twitter.png' /></a>
            <a href="https://www.instagram.com/"><img src='https://i.ibb.co/zQ5wd14/instagram.png' /></a>
            <a href="https://web.whatsapp.com/"><img src='https://i.ibb.co/GFtYnh7/whatsapp.png' /></a>
        </div>
        <p>©{today.getFullYear()} MindGrow</p>
        <button className='scroll' onClick={scroll}></button>
    </div>
  )
}

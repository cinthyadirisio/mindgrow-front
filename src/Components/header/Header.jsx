import React from 'react'
import '../../styles/header.css'
import BurgerNav from './BurgerNav'
import Logo from './Logo'
import Nav from './Nav'
import UI from './UI'
import { Link as LinkRouter } from "react-router-dom";
import Cart from './Cart'



function Header() {
  return (
    <header className='header-container'>

      <div className='logo-title'>
        <LinkRouter to={'/'}>
          <Logo />
        </LinkRouter>
        <h2>MindGrow</h2>
      </div>
      <div className='nav-user'>
        <Nav />
        <UI />
      </div>      
      <BurgerNav />
      <Cart/>
    </header>
  )
}

export default Header
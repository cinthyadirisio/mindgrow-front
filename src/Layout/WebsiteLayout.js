import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/header/Header'
import '../styles/header.css'

function WebsiteLayout(props) {
  return (
<>
        <Header />
        <main id='main' className='main'>

        {props.children}

        </main>
        <Footer/>
    </>
  )
}

export default WebsiteLayout


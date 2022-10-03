import React from 'react'
import Footer from '../Components/Footer'
import Header from '../Components/header/Header'
import '../Styles/header.css'

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


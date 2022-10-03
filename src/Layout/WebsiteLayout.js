import React from 'react'
import Footer from '../Components/Footer'

export default function WebsiteLayout(props) {
  return (
    <div>
        {props.children}
        <Footer />
    </div>
  )
}

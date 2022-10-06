import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import '../../styles/Blog.css'



function BlogCards(props) {



  return (
    <div className='blogcard' key={props.id}>
        <img src={props.photo} alt="photo" />
        <div className='bloginfo'>
            <h3>{props.title}</h3>
            <LinkRouter to={`/blog/${props.id}`} ><button>Read more</button></LinkRouter>
            
        </div>
    </div>
  )
}

export default BlogCards
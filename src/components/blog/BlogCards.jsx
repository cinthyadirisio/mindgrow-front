import React from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import '../../styles/Blog.css'



function BlogCards(props) {



  return (
    <div className='blogcard' key={props.id}>
        <img src={props.photo} alt="photo" />
        <div className='bloginfo'>
            <h4>{props.title}</h4>
            <LinkRouter to={`/blog/${props.id}`} ><button>Read more</button></LinkRouter>
            
        </div>
    </div>
  )
}

export default BlogCards
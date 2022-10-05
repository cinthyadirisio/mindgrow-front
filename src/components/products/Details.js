import React from 'react'
import { Link as LinkRouter, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/productsAPI'
import '../../styles/Details.css'
export default function Details() {
    const { id } = useParams()
    const { data } = useGetProductQuery(id)
    const product = data?.response
    console.log(product)
    return (
        <div className='detail'>
            <div className='image'>
                <img src={product?.photo} alt={product?.name} />
            </div>
            <div className='info-p'>
                <p className='category'>{product?.category}</p>
                <p className='name-p'>{product?.name}</p>
                <p className='description'>{product?.description}</p>
                <h3 className='price'>${product?.price}</h3>
                <div className='input-button'>
                    <p>Stock: {product?.stock}</p>
                    <input type='number' min='0' max={product?.stock} />
                    <button>Add to cart</button>
                </div>
                <LinkRouter to='/products'>Continue Shopping!</LinkRouter>
            </div>

        </div>
    )
}

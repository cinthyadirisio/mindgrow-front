import React, { useState } from 'react'
import { Link as LinkRouter, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/productsAPI'
import '../../styles/Details.css'
import Loading from '../Loading'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../features/cartSlice'
import toast from 'react-hot-toast';
export default function Details() {
    const [stock, setStock] = useState('')
    const { id } = useParams()
    const dispatch = useDispatch()
    const { data, isLoading } = useGetProductQuery(id)
    const product = data?.response
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
                    <input type='number' min='1' onChange={(e) => setStock(e.target.value)} max={product?.stock} />
                    <button type='button' onClick={() => {
                        dispatch(addProduct({ id: id, photo: product?.photo, name: product?.name, price: product?.price, stock: product?.stock, quantity: stock  }))
                        toast.success(`Product added to cart`, {
                            style: {
                                borderRadius: ".5rem",
                                background: "#3f3d56",
                                color: "aliceblue",
                            },
                        });
                    }
                    }>Add to cart</button>
                </div>
                <LinkRouter to='/products'>Continue shopping!</LinkRouter>
            </div>
            {
                isLoading && <Loading />
            }
        </div>
    )
}

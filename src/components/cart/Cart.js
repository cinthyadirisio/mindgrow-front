import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, increment, decrement } from '../../features/cartSlice'
import '../../styles/Cart.css'



export default function Cart() {
    const products = useSelector(state => state.cart.productsCart)
    const dispatch = useDispatch()
    let array = products.map(item => item.price * item.quantity)
    let total = array.reduce((item, sum) => sum + item, 0)
    return (
        <div className='cart-container'>
            <h2>Shopping Cart</h2>

            <div >


                <div className='shoppingCart'>
                    {
                        products.lenght === 0 ? <img style={{ width: 20, height: 20 }} src='https://ohmaigat.com.co/sites/default/files/inline-images/homygat-banner.jpg' alt='empty' /> : (
                            <form>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th> Product </th>
                                            <th> Price</th>
                                            <th> Quantity </th>
                                            <th> Total </th>
                                        </tr>
                                    </thead>
                                    <tbody> {
                                        products.map((p) => {
                                            return (
                                                <>
                                                <tr>
                                                    <td>
                                                        <button className='remove' type='button' onClick={() => dispatch(deleteProduct(p.id))}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width={45} class="bi bi-trash" viewBox="0 0 16 16">
                                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                                            </svg>
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <img src={p.photo} alt="" />
                                                        <p>{p.name} </p>
                                                    </td>
                                                    <td>
                                                        <p>{p.price} </p>
                                                    </td>

                                                    <td className='input'>
                                                        <button type="button" onClick={() => dispatch(decrement(p.id))}>-</button>
                                                        <p>{p.quantity}</p>
                                                        <button type="button" onClick={() => dispatch(increment(p.id))}>+</button>

                                                    </td>
                                                    <td>
                                                        {p.quantity * p.price}
                                                    </td>
                                                </tr>
                                                <div className='tableLine'>
                                                    
                                                </div>
                                                </>)
                                        })}

                                    </tbody>
                                </table>
                            </form>)
                    }
                    <div className='Total-cart'>
                        <p> Total</p>
                        <p>  ${total.toFixed(2)} </p>
                    </div>
                </div>

                <div className=' bill-data'>

                    <p>billing address</p>

                </div>

            </div>

            <div className='notificatios'>
                <div className='free-shipping'>

                    <p>Remember you get free shipping if your order is higher than $500</p>

                </div>

                <div className='Donations'>

                    <p>For every $1000 in sales we donate a percentage to this organizations: </p>
                    <div>
                        <img src="https://researchautism.org/wp-content/uploads/2016/06/logo.gif" alt="" />
                        <img src="https://dev.epilepsy.org.hk/wp-content/uploads/2021/01/EFHK-logo.gif" alt="" />

                        <p>To help funding research</p>
                    </div>


                </div>

            </div>

        </div>
    )
}

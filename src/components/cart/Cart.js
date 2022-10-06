import React, { useState} from 'react'
import { useSelector} from 'react-redux'
import { addProduct, deleteProduct } from '../../features/cartSlice'

export default function Cart() {

    const [cart, setCart] =useState([])

    const products = useSelector(state => state.cart.productsCart)
    console.log(products)

    // const handleDecrement = (cartState) => {
    //     setCart(cart =>
    //         cart.map((item) =>
    //         product.id === item.id ? (...item, product.quantity: item.quantity - 1) : item))
    // }


    return (
        <div>
            {
                products.lenght === 0 ? (<p>Add products to the cart</p>) : (
                    <form>
                        <table>
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th> Product </th>
                                    <th> Price</th>
                                    <th> Quantity </th>
                                    <th> Total </th>
                                </tr>
                            </thead>
                            <tbody> {products?.map((p) => {
                                return ( 
                                <tr>
                                    <td> X </td>
                                    <td>
                                        <img style={{width:20}} src={p.photo} alt=""/>
                                        <p>{p.name} </p>
                                    </td>
                                    <td>
                                        <p>{p.price} </p>
                                    </td>

                                    <td>
                                        <button type="button" onClick={()=> handleDecrement(p.id)}></button>
                                        <input type="number" name="" value={p.quantity} max={p.stock} />
                                
                                    </td>
                                    <td>
                                        {p.quantity * p.price}
                                    </td>
                                </tr>)
                            })}
                                
                            </tbody>
                        </table>
                    </form>)
            }

        </div>
    )
}

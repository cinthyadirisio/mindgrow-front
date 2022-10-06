import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProduct, increment, decrement } from '../../features/cartSlice'
export default function Cart() {
    const products = useSelector(state => state.cart.productsCart)
    const dispatch = useDispatch()
    let array = products.map(item => item.price * item.quantity)
    let total = array.reduce((item, sum) => sum + item, 0)
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
                            <tbody> {
                                products.map((p) => {
                                    return (
                                        <tr>
                                            <td>
                                                <button type='button' onClick={() => dispatch(deleteProduct(p.id))}>
                                                    X
                                                </button>
                                            </td>
                                            <td>
                                                <img style={{ width: 20 }} src={p.photo} alt="" />
                                                <p>{p.name} </p>
                                            </td>
                                            <td>
                                                <p>{p.price} </p>
                                            </td>

                                            <td>
                                                <button type="button" onClick={() => dispatch(decrement(p.id))}>    restar    </button>
                                                <p>{p.quantity}</p>
                                                <button type="button" onClick={() => dispatch(increment(p.id))}>    sumar    </button>

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
            <div>
                <p>
                    Total
                </p>
                <p>
                    ${total.toFixed(2)}
                </p>
            </div>
        </div>
    )
}

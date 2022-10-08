import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

import { clear } from "../features/cartSlice";

export default function PaymentSuccess() {
    const dispatch = useDispatch();
    // limpiar carro en redux
    useEffect(() => {
        dispatch(clear());
    }, []);
    return (
        <div>Thanks for your purchase!!</div>
    )
}
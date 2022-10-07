import React from 'react'
import '../../styles/Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { setModalDeleteProduct } from '../../features/modalSlice'

export default function DeleteProduct() {
    const dispatch = useDispatch()
    const modalDeleteProduct = useSelector(state => state.modal.modalDeleteProduct)
    const openModal = () => {
      console.log(modalDeleteProduct)
        dispatch(setModalDeleteProduct())
    }
  return (
    <button className='edit-btn' onClick={openModal}>Delete</button>
  )
}

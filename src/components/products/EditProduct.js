import React from 'react'
import '../../styles/Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { setModalEditProduct } from '../../features/modalSlice'
export default function EditProduct() {
    const dispatch = useDispatch()
    const modalEditProduct = useSelector(state => state.modal.modalEditProduct)
    const openModal = () => {
      console.log(modalEditProduct)
        dispatch(setModalEditProduct())
    }
  return (
    <button className='edit-btn' onClick={openModal}>Edit</button>
  )
}

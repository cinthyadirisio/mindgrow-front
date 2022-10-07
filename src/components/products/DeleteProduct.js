import React from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux'
import { setModalDeleteProduct } from '../../features/modalSlice'
import { useDeleteOneProductMutation } from '../../features/productsAPI'
import '../../styles/ModalProduct.css'

export default function DeleteProduct(props) {
    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(setModalDeleteProduct())
    }
    const [deleteOneProduct] = useDeleteOneProductMutation()
    async function deleteProduct() {
        try {
            let res = await deleteOneProduct(props.id)
            if (res.data?.success) {
                console.log(props.id)
                dispatch(setModalDeleteProduct())
                toast("Delete successfully", {
                    icon: "😏",
                    style: {
                        borderRadius: ".5rem",
                        background: "#3f3d56",
                        color: "aliceblue",
                    },
                });
            } else {
                toast.error("Couldn't be deleted", {
                    icon: "😞",
                    style: {
                        borderRadius: ".5rem",
                        background: "#3f3d56",
                        color: "aliceblue",
                    },
                });
            }
        } catch (error) {
            console.log(error)
        }
    } 
  return (
    <div className='modal-open-container'>
        <p>Are You sure?</p>
        <div>
            <button className='cancel-btn' onClick={closeModal}>Cancel</button>
            <button className='delete-btn' onClick={deleteProduct}>Delete</button>
        </div>
    </div>
  )
}

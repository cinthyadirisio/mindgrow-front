import React, { useState } from 'react'
import { useGetAllProductsQuery } from '../../features/productsAPI'
import ProductCard from './ProductCard'
import '../../styles/Products.css'
import SearchBar from './SearchBar'
import Loading from '../Loading'
export default function Products() {
    const [sort, setSort] = useState('')
    const [product, setProduct] = useState('')
    const [category, setCategory] = useState('')
    const { data, isLoading } = useGetAllProductsQuery({sort: sort, category: category, product: product})
    const products = data?.response
  return (
    <div className='container'>
        <div className='filters'>
            <div className='selects'>
            <select onChange={(e) => setCategory(e.target.value)}>
                    <option value=''>Categories</option>
                    <option value='Cannabis'>Cannabis</option>
                    <option value='Topicals'>Topicals</option>
                    <option value='Vaping'>Vaping</option>
                    <option value='Oils'>Oils</option>
                    <option value='Pets'>Pets</option>
                    <option value='Edibles'>Edibles</option>
                </select>
            </div>
            <div className='selects'>
                <select onChange={(e) => setSort(e.target.value)}>
                    <option value=''>Order by</option>
                    <option value='1'>Lowest price</option>
                    <option value='-1'>Highest price</option>
                </select>
            </div>
            <SearchBar value={product} onChange={(e)=> setProduct(e.target.value)} />
        </div>
        <div className='cards-container'> 
            {
                products?.map((item) => <ProductCard  id={item._id} name={item.name} category={item.category} price={item.price} photo={item.photo} />)
            }
            {
                products?.length === 0 && <p>No results</p>
            }
            {
                isLoading && <Loading />
            }
        </div>
    </div>
  )
}

import React from 'react'
import { Link as LinkRouter, useParams } from 'react-router-dom'
import { useGetOnePublicationQuery } from '../../features/publicationsAPI'
import Loading from '../Loading'
import '../../styles/Blog.css'

export default function DetailBlog() {
    const { id } = useParams()
    const { data, isLoading } = useGetOnePublicationQuery(id)
    const publication = data?.response
    console.log(publication)
    let year = (new Date(publication?.date)).getUTCFullYear()

  return (
    <div className='detail-div'>
    <div className='detailBlog'>
        <img src={publication?.photo} alt={publication?.name} />
        
        <div className='info-blog'>
            <p className='date-d'> {year}  </p>
            <p className='title-d'> {publication?.title}</p>
            <p className='category-d'>{publication?.category}</p>
            <p className='description-d'>{publication?.description}</p>
            <p className='url-d'>Want to read more? go here: <a>{publication?.url}</a> </p>
            <LinkRouter className='linkto' to='/whymindgrow'>Want to read another?</LinkRouter>
        </div>
        
        {
            isLoading && <Loading />
        }

    </div>
    </div>
  )
}

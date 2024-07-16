import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productStyle from './singleProduct.module.css'
const SingleProductComp = () => {
  const { id } = useParams();
  const [data, setData] = useState({})
  useEffect(() => {
    fetchSingleProduct()
  }, [])
  const fetchSingleProduct = async () => {
    const response = await fetch(`https://dummyjson.com/users/${id}`)
      .then(res => res.json())
      .then(result => setData(result))
      .catch(err => console.log(err))
  }
  return (
    <div >
      {
        <div className={productStyle.card}>
          <>
          <img src={data.image} alt='' />
          </>
          <>
            <h1>{data.firstName} {data.maidenName} {data.lastName}</h1>
          </>
          <>
            <h1>email:{data.email}</h1>
          </>
          <>
            <h1>username:{data.username}</h1>
          </>
          <>
            <h1>phone:{data.phone}</h1>
          </>
        </div>
      }
    </div>
  )
}

export default SingleProductComp

import React, { useEffect, useState } from 'react'
import productStyles from './product.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../Redux/cartSlice';
const ProductsComp = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalItems = products.length;
  const handlePerPage = (page) => {
    setCurrentPage(page);
  }
  const renderPagination = () => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => handlePerPage(i)}>
          {i}
        </button>
      )
    }
    return (
      <div>
        {pageNumbers}
      </div>
    )
  }
  useEffect(() => {
    fetchData();
  }, [currentPage])
  const fetchData = async () => {
    await axios
      .get('https://dummyjson.com/products?limit=99')
      .then(res => setProducts(res.data.products))
      .catch(err => console.log(err))
  }
  const indexOfLastProducts = currentPage * itemsPerPage;
  const indexOfFirstProducts = indexOfLastProducts - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProducts, indexOfLastProducts);
  const dispatch = useDispatch();
  return (
    <div className={productStyles.products}>
      {
        currentProducts.map((el) => (
          <div className={productStyles.product} key={el.id}>
            <img src={el.thumbnail} alt='' />
            <h1>{el.title}</h1>
            <h3>{el.category}</h3>
            <h5>${el.price}</h5>
            <div className={productStyles.btns}>
              <Link to={`${el.id}`} >Show More</Link>
              <button onClick={() => dispatch(cartSlice.actions.addToCart(el))} >add to cart</button>
            </div>
          </div>
        ))
      }
      {renderPagination()}
    </div>
  )
}

export default ProductsComp

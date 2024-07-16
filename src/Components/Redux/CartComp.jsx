import React, { useEffect } from 'react'
import productStyle from './../Products/product.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartSlice } from './cartSlice';
const CartComp = () => {
    // const [users, setUsers] = useState([]);
    const users = useSelector(state => state.cart.items)
    const dispatch =useDispatch();
    const tot = useSelector(state => state.cart.totalPrice)
    useEffect(()=>{
        dispatch(cartSlice.actions.calcTotal())
    })
    return (
        <div className={productStyle.products}>
            <h1>TOTAL PRICES : {tot} $</h1>
            {
                users.map((el, idx) => (
                    <div className={productStyle.product} key={idx}>
                        <img src={el.thumbnail} alt='' />
                        <h1>{el.title}</h1>
                        <h3>{el.category}</h3>
                        <h5>${el.price}</h5>
                        <div className={productStyle.btns}>
                            <Link to={`/products/${el.id}`} >Show More</Link>
                            <button onClick={() => dispatch(cartSlice.actions.removeFromCart(el.id))} >remove FROM cart</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CartComp

import React from 'react'
import { items } from '../../data/list'
import Item from './itemcart/itemcart'
import ClearCart from './clearcartbutton/clearcart'
import AboutStyle from '../homepage/about/about.module.css'
import Select from './finalcart/select'
import LeftComponents from '../../components/navigation/leftcomponents'
import Confirm from './clearcartbutton/confirm'
import { Link } from 'react-router-dom'
import IndexStyle from './index.module.css'

const RenderCart = ({cart, index, check, handleDelete, handleClearCart, selectCart, confirm, confirmOrder}) => {
    return (
    <div>
    {cart.length > 0 ? (
        <div>
        <p className={AboutStyle.para}> CART </p>
        <div>
        <p style={{marginLeft: "32vw"}}> Your order </p>
        {cart.map((item,i) => {
            let id = item.id
            let srcItem = items[id]
            return (
                <Item key = {id} 
                id = {id} 
                srcItem = {srcItem} 
                handleDelete = {handleDelete} 
                item = {item} 
                selectCart = {selectCart} 
                index = {index}
                check = {check}/>
            )
        })}
        </div>
        
        <Select cart = {cart} check = {check} />
        <div className='cart_buttons' style = {{display: "flex", flexDirection: "row", margin: "0px 70vw"}}>
        <Link to="/products">
        <button
        className={IndexStyle.continue_btn}
        > Continue shopping </button>
        </Link>
        <Confirm confirmOrder={confirmOrder} />
        <ClearCart handleClearCart={handleClearCart}/>
        </div>
        
    </div>
    ) : 

    (<div>
        <p className={AboutStyle.para}> CART </p>
        <p className={IndexStyle.para}> Your cart is empty </p>
        <Link to='/products'>
        <button className={IndexStyle.button}> Fill your cart </button>
        </Link>
    </div>)}
    </div>
    
    )
}

export default RenderCart
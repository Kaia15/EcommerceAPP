import React, { useEffect, useMemo, useState } from 'react' 
import { useContext } from 'react'
import { StoreContext } from '../../../context/context'
import AddToTotal from './add/add'
import { items } from '../../../data/list'
import Count from './countbutton/count'
import Cart from '../../cart/cart'
import Detail from './detail/detailproduct'
import { Link, useParams, useHistory } from 'react-router-dom'
import AddStyle from './add/add.module.css'
import ProductStyle from './index.module.css'

const Product = () => {
    // onsole.log(items[id])
    // console.log(typeof id)
    // console.log(id)
    const {id} = useParams()
    
    const [quantity, setQuantity] = useState(1);
    const [subtotal, setSubtotal] = useState(0);
    const { cart, setCart } = useContext(StoreContext)
    const [item, setItem] = useState({})
    
    /*const [cart, setCart] = useState([])
    const a = useContext(StoreContext)
    useEffect(() => setCart(a), [])
    */
    // const [a,b] = useContext(StoreContext)
    // console.log(a,b)

    const handlePlus = () => {
        setQuantity(prev => {
        return prev + 1
        })
    }

    const handleMinus = () => {
        if (quantity <= 0) setQuantity(0)
        else setQuantity(prev => {
            return prev - 1
        })
    }
    const handleCart = () =>  {
        // setCart([1,2])
        // b(() => {return [1,2,3]})

        setCart(prev => {
           let matched = item['id']
           let updated = prev.filter(i => i['id'] !== matched)
           let a = prev.filter(i => i['id'] === matched)
           if (item['quantity'] > 0) {
            if (typeof a[0] !== 'undefined') {
                a[0]['quantity'] += item['quantity']
                a[0]['subtotal'] += item['subtotal']
                updated.push(a[0])
               } else {
                updated = [...updated,item]
            }
           } else {
            alert("Please increase quantity of your product")
           }
           
           return updated
        })
        // setQuantity(0)
    }

    useMemo(() => {
        setSubtotal(quantity * items[id].price)
        setItem(prev => {
            return {...prev, id: id, price: items[id].price, quantity: quantity, subtotal: subtotal}
        })
    }, [id, quantity, subtotal])
    console.log(item)
    // console.log(quantity)
    console.log(cart)
    
    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Detail id = {id}/>
            <div style = {{marginTop: "40px", marginLeft: "30px"}}>
            <p style={{fontFamily:"Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;", fontSize: "20px", fontWeight: "bold"}}> {items[id]['title']} </p>
            <p> Price: {items[id]['price']} </p>
            <Count quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/>
            <div style={{display: "flex", flexDirection: "row"}}>
            <Link to="/cart">
            <button
            className={AddStyle.button}>
                View Cart
            </button>
            </Link>
            <AddToTotal handleCart={handleCart} />
            </div>
            
            </div>
        </div>
        
    )
    
}

export default Product
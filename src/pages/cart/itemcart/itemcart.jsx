import React, {useReducer} from 'react'
import ItemStyle from './itemcart.module.css'

const Item = ({ id, srcItem, handleDelete, item, selectCart }) => {
    // console.log(typeof id)
    return (
        <div style={{display: "flex", flexDirection: 'row', margin: "20px 32vw"}}>
            
            <div className="form-check" key={id}>
                <input
                id="check"
                type="checkbox"
                onChange = {() => selectCart(id)}
                />
                <label htmlFor="check"> {srcItem['title']} </label>
            </div>
            <p className={ItemStyle.item_style}> {item.quantity} x {item.price} </p>
            <p className={ItemStyle.item_style}> {item.subtotal} </p>
            <button
                className={ItemStyle.button}
                onClick={() => handleDelete(id)}>
                Delete
            </button>
            
        </div>
    )
}

export default Item
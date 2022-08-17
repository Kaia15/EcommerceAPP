import React from 'react'
import AddStyle from './add.module.css'

const AddToTotal = ({handleCart}) => {
    
    // console.log(idItem)
    return (
    <div>
        <button
        className={AddStyle.button}
        onClick = {handleCart}
        > Add to Cart </button>
    </div>
    )
}

export default AddToTotal
import React from 'react'

const ClearCart = ({cart, handleClearCart}) => {
    return (
        <div>
            <button
            style={{backgroundColor: "white", height: "50px", width: "80px", borderRadius: "4px", border: "1px solid", margin: "0px 10px"}}
            onClick = {handleClearCart}> Clear Cart </button>
        </div>
    )
}

export default ClearCart
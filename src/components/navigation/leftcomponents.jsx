import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { StoreProvider, StoreContext } from '../../context/context'

const LeftComponents = () => {
    const components = ["HOME", "ABOUT", "PRODUCTS", "CONTACT", "CART"]
    // const CART = "CART" + "(" + (cart.length).toString() + ")"
    
    return (
        <div style = {{display: "flex", flexDirection: "row"}}>
            {components.map((compo, index) => {
                let lower = "/" + compo.toLowerCase()
                return (
                <Link to = {lower} style={{}}>
                    <button style = {{backgroundColor: "white",border: "none", margin: "30px", textDecoration: "none"}} key = {index}> {compo} </button>
                </Link>
                )
            })}
            
        </div>
    )
}

export default LeftComponents
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { StoreProvider, StoreContext } from '../../context/context'
import ButtonStyle from './button.module.css'

const LeftComponents = () => {
    const components = ["HOME", "ABOUT", "PRODUCTS", "CONTACT", "CART"]
    // const CART = "CART" + "(" + (cart.length).toString() + ")"
    
    return (
        <div style = {{display: "flex", flexDirection: "row"}}>
            {components.map((compo, index) => {
                let lower = "/" + compo.toLowerCase()
                return (
                <Link to = {lower} style={{}}>
                    <button className={ButtonStyle.button} key = {index}> {compo} </button>
                </Link>
                )
            })}
            
        </div>
    )
}

export default LeftComponents

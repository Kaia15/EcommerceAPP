import React from 'react'
import Product from '../pages/product/product'
import { StoreProvider } from './context'
import Cart from '../pages/cart/cart'

const AppProvider = () => {
    return 
    (
    <div>
    <StoreProvider>
        <Product />
        <Cart />
    </StoreProvider>
    </div>
    
    )
}

export default AppProvider
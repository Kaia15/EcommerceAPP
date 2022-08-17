import React from 'react'
import SelectStyle from './select.module.css'

const Select = ({cart, check}) => {
    let total = 0
    let itemSelect = cart.filter((item) => {return check.indexOf(item['id']) !== -1})
    itemSelect.map(item => {
        total += item['subtotal']
    })
    return (
    <div>
        <p className={SelectStyle.para}> Total of order: {total} </p>
    </div>
    )
}

export default Select
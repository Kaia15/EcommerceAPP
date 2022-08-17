import React from 'react';

const Confirm = ({confirmOrder}) => {
    return (
        <button
        style={{backgroundColor: "white", height: "50px", width: "10vw", borderRadius: "4px", border: "1px solid", margin: "0px 10px"}}
        onClick = {confirmOrder}>
            Confirm
        </button>
    )
}

export default Confirm
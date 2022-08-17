import React from "react";
import AboutStyle from '../about/about.module.css'

const Contact = () => {
    return (
        <div>
            <p className={AboutStyle.para}> CONTACT US </p>
            <div style = {{textAlign: "center"}}>
            <p>
            <i class="fas fa-map-marker-alt"></i> Address <br />
            <span> NY.Lyon.Paris
            <br />
            America-France
            </span>
            </p>
            <p>
                <i class="fas fa-phone-alt"></i> Contact via phone number <br />
                <span> 0787878787</span>
            </p>
            <p>
                <i class=" far fa-envelope"></i> General Support <br />
                <span>contact@example.com</span>
            </p>
            </div>
        </div>
    )
}

export default Contact
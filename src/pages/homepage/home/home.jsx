import React from 'react'
import HomeStyle from './home.module.css'
import AboutStyle from '../about/about.module.css'
import { homeImages } from '../../../assets/images'

const Home = () => {
    return (
    <div>
        <div className={HomeStyle.banner}>
            {homeImages.map(img => {
                return (
                <img src = {img} style = {HomeStyle.img}/>
                )
            })}
        </div>
        <div>
            <p className={AboutStyle.para}> BeU Visuals </p>
            <p className={HomeStyle.para}> Since 2022 </p>
            <p className={HomeStyle.para}> Be yourself, be unique, be you </p>
            
        </div>
    </div>
    )
}

export default Home
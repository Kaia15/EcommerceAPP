import React from 'react'
import AboutStyle from './about.module.css'

const About = () => {
    console.log('About')
    return (
    <div className={AboutStyle.container}>
        <img src="https://i.pinimg.com/474x/ad/03/80/ad038088f8cfd26ac6e5f6bc9df657eb.jpg" className={AboutStyle.img}/>
        <div className={AboutStyle.wrap}>
        <p className={AboutStyle.para}> ABOUT US </p>
        <p> Exploring the universe of unknownment. We have a heart of love and an interest of lorem ipsum and <br /> mauris neque quam blog. 
        I want to share my world with you. Praesent tincidunt sed tellus ut rutrum. <br /> Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla. <br />
        Praesent tincidunt sed tellus ut rutrum. <br /> Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
        </div>
        
    </div>
    )
}

export default About